import React, {useState,useEffect} from "react";
import io from "socket.io-client";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";

const socket=io("http://localhost:3000");

function Chat({username}){
    const [messages, setMessages]= useState([]);

    useEffect(()=>{
        socket.on("chat message", (msg)=>{
            setMessages((prev)=>[...prev,msg]);
        });

        return ()=>{
            socket.off("chat message");
        }
    },[]);

    const sendMessage=(text)=>{
        const newMessage={user:username,text};
        setMessages((prev)=>[...prev,newMessage]);
    }

    return (
        <div>
            <h2>Welcome, {username} 👋</h2>
              <MessageList messages={messages} username={username} />
              <MessageInput sendMessage={sendMessage} /> 
        </div>
    )
}

export default Chat;