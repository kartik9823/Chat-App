import React from "react";

function MessageBubble({ msg, isOwn }) {
  return (
    <div style={{ textAlign: isOwn ? "right" : "left" }}>
      <strong>{msg.user}: </strong>
      <span>{msg.text}</span>
    </div>
  );
}

export default MessageBubble;
