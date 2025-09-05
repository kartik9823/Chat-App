import express from "express";
import http from "http";
import {Server} from "socket.io";

const app=express();
const server=http.createServer(app);

const io=new Server(server, {
    cors:{
        origin: "*",
        methods: ["GET", "POST"]
    }
});

const port =process.env.PORT || 5000;

app.get("/health",(req,res)=>{
    res.send("OK");
})

io.on("connection",(socket)=>{
    console.log("A user connected:",socket.id);

    socket.on("chat message",(msg)=>{
        console.log("Message received:",msg);
        io.emit("chat message",msg);
    })
})

server.listen(port,()=>{
    console.log(`server is enticingly working on port ${port}`);
})