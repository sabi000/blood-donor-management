const { client } = require("../db/db");
const { tokenGenerator } = require("../utils");

const registerDonor = async (req, res) => {
  const { name, address, bloodgroup, email, phone, password, available } =
    req.body;

  const exist = await client
    .promise()
    .query(
      "select email from donor where email =? union select email from org where email=? ",
      [email, email]
    )
    .then(([rows, fields]) => {
      return rows;
    })
    .catch((e) => console.log(e));
  console.log(exist);

  if (exist.length > 0)
    return res.status(500).json({ error: "email already in use." });

  client.query(
    "insert into donor(name, address, bloodgroup, email, phone, password, available) values(?, ?, ?, ?, ?, ?, ?)",
    [name, address, bloodgroup, email, phone, password, available],
    (error, result) => {
      if (error) {
        //console.log(error)
        return res.status(500).json({ error: "something went wrong." });
      } else return res.status(201).json({ message: "user registered." });
    }
  );
};

const registerOrg = async (req, res) => {
  const { name, address, PAN, email, phone, password } = req.body;

  const exist = await client
    .promise()
    .query(
      "select email from donor where email =? union select email from org where email=? ",
      [email, email]
    )
    .then(([rows, fields]) => {
      console.log("Hello");
      return rows;
    })
    .catch((e) => console.log(e));
  console.log(exist);

  if (exist.length > 0)
    return res.status(500).json({ error: "email already in use." });

  client.query(
    "insert into org(name, address, PAN, email, phone, password) values(?, ?, ?, ?, ?, ?)",
    [name, address, PAN, email, phone, password],
    (error, result) => {
      if (error)
        return res.status(500).json({ error: "something went wrong." });
      else return res.status(201).json({ message: "user registered." });
    }
  );
};

const login = async (req, res) => {
  const { role, email, password } = req.body;

  const exist = await client
    .promise()
    .query(
      "select email from donor where email =? union select email from org where email=? ",
      [email, email]
    )
    .then(([rows, fields]) => {
      return rows;
    })
    .catch((e) => console.log(e));
  console.log(exist);

  if (exist.length < 1) {
    return res.status(500).json({ error: "invalid credentials." });
  }
  let password2 = "";
  if (role === "donor") {
    password2 = await client
      .promise()
      .query("select password from donor where email =? ", [email])
      .then(([rows, fields]) => {
        return rows;
      })
      .catch((e) => console.log(e));
  } else {
    password2 = await client
      .promise()
      .query("select password from org where email =? ", [email])
      .then(([rows, fields]) => {
        return rows;
      })
      .catch((e) => console.log(e));
  }
  
  if (password !== password2[0].password) {
    return res.status(500).json({ error: "invalid credentials." });
  }
  const token = tokenGenerator(email);
  res.cookie("token", token, { httpOnly: true });
  console.log("MESSAGE HERER:", token);
  return res.status(200).json({ message: "Login Successful." });
};

module.exports = { registerDonor, registerOrg, login };
