const mysql = require("mysql2")
const dotenv = require("dotenv")

dotenv.config({ path: "./.env" });

const client = mysql.createConnection({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    database: process.env.DATABASE
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

module.exports={connectDb, client}