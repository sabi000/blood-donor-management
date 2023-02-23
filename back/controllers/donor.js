const { client } = require("../db/db");

const getDonorList = async (req, res) => {
  const donors = await client
    .promise()
    .query("select name, address, bloodgroup, phone, available from donor")
    .then(([rows, fields]) => {
      return rows;
    })
    .catch((e) => console.log(e));
  console.log(donors);

  return res.status(200).json({data: donors});
};

module.exports = { getDonorList };
