import React, { useState } from "react";
import { TextField, Button } from "@mui/material";

function MessageInput({ sendMessage }) {
  const [text, setText] = useState("");

  const handleSend = () => {
    if (text.trim() !== "") {
      sendMessage(text);
      setText("");
    }
  };

  return (
    <div>
      <TextField
        label="Type a message"
        value={text}
        onChange={(e) => setText(e.target.value)}
        sx={{ mr: 2 }}
      />
      <Button variant="contained" onClick={handleSend}>
        Send
      </Button>
    </div>
  );
}

export default MessageInput;
