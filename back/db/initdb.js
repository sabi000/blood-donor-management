const fs = require("fs");
const mysql = require("mysql2")
const dotenv = require("dotenv")

dotenv.config({ path: "../.env" });

const client = mysql.createConnection({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    database: process.env.DATABASE,
    multipleStatements: true
});
  
const connectDb = async () => {
    if (client.state != "connected") {
        client.connect(function (err) {
            if (err) {
                console.error("Could not connect to database:: " + err)
                return
            } else console.log("Connected to db with id " + client.threadId)
            // console.log(client.state)
        })
    }
}


const initdb = async() => {
  connectDb();
  let sql = fs.readFileSync("schema.sql", "utf8")

   const res = await client
        .promise()
        .query(sql)
        .then(result => {
            console.log("Hello")
            return result
        })
        .catch(e => console.error(e.stack))

    process.exit()
};

initdb();
