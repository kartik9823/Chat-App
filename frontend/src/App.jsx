import { useState, useEffect } from "react";
import {
  Container,
  AppBar,
  Toolbar,
  Typography,
  Box,
  TextField,
  Button,
  Paper,
} from "@mui/material";
import { io } from "socket.io-client";

const socket = io("http://localhost:5000");

function App() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSend = () => {
    if (message.trim() === "") return;
    // setMessages([...messages, message]); //this is for local message handling
    socket.emit("chat message", {
      text: message,
      sender: socket.id,
    }); //emit message to server
    setMessage("");
  };

  useEffect(() => {
    socket.on("chat message", (msg) => {
      setMessages((prev) => [...prev, msg]);
    });

    return () => {
      socket.off("chat message");
    };
  }, []);

  return (
    <Container maxWidth="sm">
      {/* Top bar */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">React Chat</Typography>
        </Toolbar>
      </AppBar>

      {/* Chat messages area */}
      <Paper
        sx={{
          height: "60vh",
          overflowY: "auto",
          padding: 2,
          marginTop: 2,
          marginBottom: 2,
        }}
      >
        {messages.map((msg, index) => {
          const isMine=msg.sender===socket.id;
          return(
          <Box 
            key={index}
            sx={{
              display:"flex",
              justifyContent:isMine?"flex-end":"flex-start",
              mb:1
            }}
            >
              <Box sx={{
                px:2,
                py:1,
                borderRadius:3,
                maxWidth:"65%",
                color:"white",
                background: isMine
                ? "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)" 
                : "linear-gradient(135deg, #43cea2 0%, #185a9d 100%)", 
              }}
              >
                {socket.id}
                <Typography variant="body1">{msg.text}</Typography>
              </Box>
            </Box>
          )
        })}
      </Paper>

      {/* Input area */}
      <Box sx={{ display: "flex", gap: 1 }}>
        <TextField
          fullWidth
          label="Type a message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button variant="contained" onClick={handleSend}>
          Send
        </Button>
      </Box>
    </Container>
  );
}

export default App;
