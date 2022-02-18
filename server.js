var express = require('express');
var mysql = require('mysql2');

var app=express();

app.use(express.static("GUIDINOSOFTPEDIA"));

var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Sanju@123",
    database:"GuidinoSoftpedia"
})

app.listen(1000,(err)=>{
    if(err)
    console.log("Error");

    else
    console.log("Server listened(1000)");
});

app.get("/style",(req,res)=>{
    res.sendFile(__dirname+"/style.css")
});

app.get("/client",(req,res)=>{
    res.sendFile(__dirname+"/client.js");
})

app.get("/home",(req,res)=>{
    res.sendFile(__dirname+"/Welcome.html");
});

app.get("/publish",(req,res)=>{
    res.sendFile(__dirname+"/publish.html");
})

app.get("/getUserDetails",(req,res)=>{


    function insert(){
        con.query("INSERT INTO posts (username,password,data) values(?,?,?)",[req.query.name,req.query.pass,req.query.data],
    (err,result)=>{
        
        if(err)res.send("username and password doesn't match");
        else res.send("Posted successfully go home and refresh to view changes");
    })
    }


    if(req.query.type=="1"){
         
        con.query("INSERT INTO users values (?,?)",[req.query.name,req.query.pass],
        (err,result)=>{

            if(err)res.send("Username exists");
            else {insert();res.send("Posted successfully go home and refresh to view changes");}
            
        })
    }

    else if(req.query.type=="2")insert();

});

app.get("/getPosts",(req,res)=>{
     
    if(Number(req.query.flag)==1){
        
        con.query("SELECT count,username,data from posts where username=? AND password=?",[req.query.user,
        req.query.pass],(err,result)=>{
            if(err)
            res.send("user doesnt exists")

            else
            res.send(result);
        })
    }

    else
    con.query("SELECT count,username,data from posts",(err,result)=>{
        res.send(result);
    })

});

app.get("/viewposts",(req,res)=>{

    res.sendFile(__dirname+"/viewposts.html");
})

app.get("/delete",(req,res)=>{

    con.query("DELETE FROM posts where count=?",[req.query.id],(err,result)=>{
        console.log(result);
    })
});

