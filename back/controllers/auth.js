const {client} = require("../db/db");

const registerDonor = async(req, res)=>{
    const {name, address, bloodgroup, email, phone, password, available}= req.body;

    const exist = await client
        .promise()
        .query('select email from donor where email =?', [email])
        .then(([rows, fields]) => {
            
            return rows
        })
        .catch(e => console.log(e))
    console.log(exist)
    
    if (exist.length>0)
        return res.status(500).json({"error": "email already in use."})

    client.query('insert into donor(name, address, bloodgroup, email, phone, password, available) values(?, ?, ?, ?, ?, ?, ?)', 
    [name, address, bloodgroup, email, phone, password, available ], 
    (error, result)=>{
        if (error){
            //console.log(error)
            return res.status(500).json({"error": "something went wrong."})
        }
        else    
            return res.status(201).json({"message": "user registered."})
    }
    )
}

const registerOrg = async(req, res)=>{
    const {name, address, PAN, email, phone, password}= req.body;

    const exist = await client
        .promise()
        .query('select email from org where email =?', [email])
        .then(([rows, fields]) => {
            console.log("Hello")
            return rows
        })
        .catch(e => console.log(e))
    console.log(exist)
    
    if (exist.length>0) 
        return res.status(500).json({"error": "email already in use."})

    client.query('insert into org(name, address, PAN, email, phone, password) values(?, ?, ?, ?, ?, ?)', 
    [name, address, PAN, email, phone, password], 
    (error, result)=>{
        if (error)
            return res.status(500).json({"error": "something went wrong."})
        else    
            return res.status(201).json({"message": "user registered."})
    }
    )
}



module.exports={registerDonor, registerOrg}