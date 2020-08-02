import io from "socket.io-client";
const server = "http://localhost:3001";

export const socket = io(server);
