const express=require('express')
const mysql=require('mysql')
const cors=require('cors')

const app= express()
const port=8081
app.use(cors())

// create connection to mysql
const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"crud"
})


app.get('/',(req,res)=>{
    return res.json("From backend side.")
})
app.get('/users', (req,res)=>{
    const sql="SELECT * FROM users";
    db.query(sql,(err, data)=>{
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.listen(port,()=>{
    console.log(`server lancer sur le port:${port}`)
})