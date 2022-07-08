import express from "express";

import { Server } from "socket.io";
import { createServer } from "http";
import http from "http";
import router from "./router.js";

const PORT = process.env.PORT || 5000;
const app = express();
const server = createServer(app);
const io = new Server(server);
io.on("connection", (socket) => {
  console.log("New connection established!");
  socket.on("disconnect", () => {
    console.log("Connection disconnected!");
  });
});
app.use(router);
server.listen(PORT, () => console.log(`Server listening on ${PORT}`));
