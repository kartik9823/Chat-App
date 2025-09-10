import React, { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";

function Login({ setUsername }) {
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    if (input.trim() !== "") {
      setUsername(input.trim());
    }
  };

  return (
    <Box sx={{ textAlign: "center", mt: 10 }}>
      <Typography variant="h5" gutterBottom>
        Enter your username
      </Typography>
      <TextField
        label="Username"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        sx={{ mr: 2 }}
      />
      <Button variant="contained" onClick={handleSubmit}>
        Join Chat
      </Button>
    </Box>
  );
};

export default Login;