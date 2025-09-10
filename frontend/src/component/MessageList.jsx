import React from "react";
import MessageBubble from "./MessageBubble";

function MessageList({ messages, username }) {
  return (
    <div>
      {messages.map((msg, index) => (
        <MessageBubble key={index} msg={msg} isOwn={msg.user === username} />
      ))}
    </div>
  );
}

export default MessageList;
