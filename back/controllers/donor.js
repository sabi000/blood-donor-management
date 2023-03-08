const { client } = require("../db/db");

const getDonorList = async (req, res) => {
  const { address, bloodgroup } = req.query;
console.log("mesasge")
  let bg = bloodgroup ? bloodgroup : "%";
  let add = address ? "%"+address+"%" : "%";
console.log(add)
  const donors = await client
    .promise()
    .query(
      "select pid, name, address, bloodgroup, phone, available from donor where bloodgroup like ? and address like ? and available = true",
      [bg, add]
    )
    .then(([rows, fields]) => {
      return rows;
    })
    .catch((e) => console.log(e));
  //console.log(donors);

  return res.status(200).json({ data: donors });
};

const getDonorProfile = async (req, res) => {
  // console.log("kei message ni lekhdeu",req.email)
  const { email } = req.id;
  const donor = await client
    .promise()
    .query(
      "select pid, name, address, bloodgroup, email, phone, available from donor where email = ?",
      [email]
    )
    .then(([rows, fields]) => {
      return rows[0];
    })
.catch((e) => {
console.log(e);
  return {"error":"Donor not found"}})
  //console.log(donors);

  return res.status(200).json({ data: donor });
};


const deleteDonor = async (req, res) => {
  const { pid } = req.query;
  console.log(pid);

  const exist = await client
    .promise()
    .query("select pid from donor where pid = ?", [pid])
    .then(([rows, fields]) => {
      //console.log("yo yo yo");
      return rows;
    })
    .catch((e) => console.log(e));
  console.log(exist);

  if (exist.length === 0)
    return res.status(500).json({ error: "donor not found." });

  const deleted = await client
    .promise()
    .query("delete from donor where pid =? ", [pid])
    .then(([rows, fields]) => {
      return true;
    })
    .catch((e) => console.log(e));
  console.log(deleted);
  if (deleted) return res.status(200).json({ message: "donor deleted." });
  return res.status(500).json({ error: "something went wrong." });
};

const editDonor = async (req, res) => {
  const { pid } = req.query;
  console.log(pid);

  const exist = await client
    .promise()
    .query("select pid from donor where pid = ?", [pid])
    .then(([rows, fields]) => {
      //console.log("yo yo yo");
      return rows;
    })
    .catch((e) => console.log(e));
  console.log(exist);

  if (exist.length === 0)
    return res.status(500).json({ error: "donor not found." });

  const edited = await client
    .promise()
    .query("update donor set ? where pid = ?", [req.body, pid])
    .then(([rows, fields]) => {
      return rows;
    })
    .catch((e) => console.log(e));
  //console.log(events);
  if (edited.affectedRows > 0)
    return res.status(200).json({ message: "donor info edited." });
  return res.status(500).json({ error: "something went wrong." });
};

module.exports = { getDonorList, deleteDonor, editDonor, getDonorProfile };
