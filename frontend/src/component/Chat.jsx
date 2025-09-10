import React, {useState} from "react";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";

function Chat({username}){
    const [messages, setMessages]= useState([]);

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