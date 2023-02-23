const { client } = require("../db/db");

const addEvent = async (req, res) => {
  const { name, location, date, stime, etime, contact, description } = req.body;

  const exist = await client
    .promise()
    .query("select name from events where name = ? and location=? and date=? and stime = ?", [name, location, date, stime])
    .then(([rows, fields]) => {
        console.log("yo yo yo")
      return rows;
    })
    .catch((e) => console.log(e));
  console.log(exist);

  if (exist.length > 0)
    return res.status(500).json({ error: "event already registered." });

  client.query(
    "insert into events(name, location, date, stime, etime, contact, description) values(?, ?, ?, ?, ?, ?, ?)",
    [name, location, date, stime, etime, contact, description],
    (error, result) => {
      if (error) {
        //console.log(error)
        return res.status(500).json({ error: "something went wrong." });
      } else return res.status(201).json({ message: "event added." });
    }
  );
};

module.exports = { addEvent };
