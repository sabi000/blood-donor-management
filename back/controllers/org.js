const { client } = require("../db/db");

const getOrgList = async (req, res) => {
  const orgs = await client
    .promise()
    .query("select pid, name, address, PAN, email, phone from org")
    .then(([rows, fields]) => {
      return rows;
    })
    .catch((e) => console.log(e));
  console.log(orgs);

  return res.status(200).json({ data: orgs });
};

const getOrgProfile = async (req, res) => {
  const { email } = req.id;
  const donor = await client
    .promise()
    .query(
      "select pid, name, address, PAN, email, phone from org where email = ?",
      [email]
    )
    .then(([rows, fields]) => {
      return rows[0];
    })
    .catch((e) => {
      console.log(e);
      return { error: "Org not found" };
    });
  //console.log(donors);

  return res.status(200).json({ data: donor });
};

const deleteOrg = async (req, res) => {
  const { pid } = req.query;
  console.log(pid);

  const exist = await client
    .promise()
    .query("select pid from org where pid = ?", [pid])
    .then(([rows, fields]) => {
      //console.log("yo yo yo");
      return rows;
    })
    .catch((e) => console.log(e));
  console.log(exist);

  if (exist.length === 0)
    return res.status(500).json({ error: "organization not found." });

  const deleted = await client
    .promise()
    .query("delete from org where pid =? ", [pid])
    .then(([rows, fields]) => {
      return true;
    })
    .catch((e) => console.log(e));
  console.log(deleted);
  if (deleted) return res.status(200).json({ message: "org deleted." });
  return res.status(500).json({ error: "something went wrong." });
};

const editOrg = async (req, res) => {
  const { email } = req.id

  const exist = await client
    .promise()
    .query("select pid from org where email = ?", [email])
    .then(([rows, fields]) => {
      //console.log("yo yo yo");
      return rows;
    })
    .catch((e) => console.log(e));
  console.log(exist);

  if (exist.length === 0)
    return res.status(500).json({ error: "organization not found." });

  const edited = await client
    .promise()
    .query("update org set ? where email = ?", [req.body, email])
    .then(([rows, fields]) => {
      return rows;
    })
    .catch((e) => console.log(e));
  //console.log(events);
  if (edited.affectedRows > 0)
    return res.status(200).json({ message: "organization info edited." });
  return res.status(500).json({ error: "something went wrong." });
};

module.exports = { getOrgList, deleteOrg, editOrg, getOrgProfile };
