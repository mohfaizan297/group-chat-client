import "./App.css";
import { Route, Routes } from "react-router-dom";
import Join from "./component/Join/Join";
import Chat from "./component/Chat/Chat";
import socketIO from "socket.io-client";

// const ENDPOINT = "http://localhost:4500/";
// const ENDPOINT = "https://nodejs-group-chat-app.onrender.com/";
// const socket = socketIO(ENDPOINT, { transports: ["websocket"] });

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Join />} />
      <Route path="/chat" element={<Chat />} />
    </Routes>
  );
}

export default App;
