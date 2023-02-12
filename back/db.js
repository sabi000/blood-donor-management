const mysql = require("mysql2")
const dotenv = require("dotenv")

dotenv.config({ path: "./.env" });

const client = mysql.createConnection({
    user: "LabUse",
    password: process.env.DB_PASSWORD,
    host: "localhost",
    database: "blood"
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