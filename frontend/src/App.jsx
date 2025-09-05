import { useState } from "react";
import { Container, AppBar, Toolbar, Typography, Box, TextField, Button, Paper } from "@mui/material";

function App() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSend = () => {
    if (message.trim() === "") return;
    setMessages([...messages, message]);
    setMessage("");
  };

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
        {messages.map((msg, index) => (
          <Box key={index} sx={{ marginBottom: 1, textAlign: "left" }}>
            <Typography variant="body1">{msg}</Typography>
          </Box>
        ))}
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
