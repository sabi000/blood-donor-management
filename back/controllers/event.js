const { client } = require("../db/db");

const addEvent = async (req, res) => {
  const { name, location, date, stime, etime, contact, description } = req.body;
  const {email} = req.id;

  const exist = await client
    .promise()
    .query(
      "select name from events where name = ? and location=? and date=? and stime = ?",
      [name, location, date, stime]
    )
    .then(([rows, fields]) => {
      //console.log("yo yo yo");
      return rows;
    })
    .catch((e) => console.log(e));
  console.log(exist);

  if (exist.length > 0)
    return res.status(500).json({ error: "event already registered." });

  client.query(
    "insert into events(name, location, date, stime, etime, contact, description, orgid) values(?, ?, ?, ?, ?, ?, ?, (select id from org where email = ?))",
    [name, location, date, stime, etime, contact, description, email],
    (error, result) => {
      if (error) {
        //console.log(error)
        return res.status(500).json({ error: "something went wrong." });
      } else return res.status(201).json({ message: "event added." });
    }
  );
};


const getEventProfile = async (req, res) => {
	const { pid } = req.query;
  const {email} = req.id;
	const event = await client
		.promise()
		.query(
			"select pid, name, location, date_format(date,'%Y-%m-%d') as date, stime, etime, contact, description from events where pid = ? and orgid= (select id from org where email = ?)",
			[pid, email]
		)
		.then(([rows, fields]) => {
			return rows[0]
		})
		.catch(e => {
			console.log(e)
			return { "error": "Event not found" }
		})
	//console.log(events);

	return res.status(200).json({ data: event })
}

const getEvent = async (req, res) => {
  const { location, date } = req.query;

  let loc = location ? location : "%";
  let date1 = date ? date : "%";
  // console.log(loc, date1);

  const events = await client
    .promise()
    .query(
      "select pid, name, location, date_format(date,'%Y-%m-%d') as date, stime, etime, contact, description from events where location like ? and date(date) like ?",
      [loc, date1]
    )
    .then(([rows, fields]) => {
      return rows;
    })
    .catch((e) => console.log(e));
  // console.log(events);

  return res.status(200).json({ data: events });
};

const getOrgEvent = async (req, res) => {
  const { email } = req.id;

  const events = await client
    .promise()
    .query(
      "select pid, name, location, date_format(date,'%Y-%m-%d') as date, stime, etime, contact, description from events where orgid=(select id from org where email = ?)",
      [email]
    )
    .then(([rows, fields]) => {
      return rows;
    })
    .catch((e) => console.log(e));
  // console.log(events);

  return res.status(200).json({ data: events });
};

const deleteEvent = async (req, res) => {
  const { pid } = req.query;
  console.log(pid);

  const exist = await client
    .promise()
    .query("select pid from events where pid = ?", [pid])
    .then(([rows, fields]) => {
      console.log("yo yo yo");
      return rows;
    })
    .catch((e) => console.log(e));
  console.log(exist);

  if (exist.length === 0)
    return res.status(500).json({ error: "event not found." });

  const deleted = await client
    .promise()
    .query("delete from events where pid =? ", [pid])
    .then(([rows, fields]) => {
      return true;
    })
    .catch((e) => console.log(e));
  console.log(deleted);
  if (deleted) return res.status(200).json({ message: "event deleted." });
  return res.status(500).json({ error: "something went wrong." });
};

const editEvent = async (req, res) => {
  const { pid } = req.query;
  console.log(pid);

  const exist = await client
    .promise()
    .query("select pid from events where pid = ?", [pid])
    .then(([rows, fields]) => {
      console.log("yo yo yo");
      return rows;
    })
    .catch((e) => console.log(e));
  console.log(exist);

  if (exist.length === 0)
    return res.status(500).json({ error: "event not found." });

  const events = await client
    .promise()
    .query("update events set ? where pid = ?", [req.body, pid])
    .then(([rows, fields]) => {
      return rows;
    })
    .catch((e) => console.log(e));
  //console.log(events);
  if (events.affectedRows > 0)
    return res.status(200).json({ message: "record edited." });
  return res.status(500).json({ error: "something went wrong." });
};

module.exports = { addEvent, getEvent, deleteEvent, editEvent, getEventProfile , getOrgEvent};
