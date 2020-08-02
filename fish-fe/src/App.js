import React, { useState, useEffect } from "react";
import { socket } from "./socket";
import "./App.css";

function App() {
  const [numPlayers, setNumPlayers] = useState(1);
  const [connected, setConnected] = useState(false);
  const [roomId, setRoomId] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (!connected) {
      // Sample emit to server (or other sockets) based on event
      socket.emit("joinRoom", roomId);
      setConnected(true);
    }
  };

  // Handle event emit event from server (or other sockets)
  socket.on("connectToRoom", (data) => setNumPlayers(data));

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>RoomId: </label>
        <input
          type="text"
          value={roomId}
          onChange={(e) => setRoomId(e.target.value)}
        ></input>
      </form>
      <p>Room Id: {roomId}</p>
      <p>numPlayers: {numPlayers}</p>
    </div>
  );
}

export default App;
