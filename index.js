import express from "express";
import http from "http";

const app=express();
const server=http.createServer(app);

const port =process.env.PORT || 5000;

app.get("/health",(req,res)=>{
    res.send("OK");
})

app.listen(port,()=>{
    console.log(`server is enticingly working on port ${port}`);
})