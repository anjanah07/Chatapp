import express from "express";

import { Server } from "socket.io";
import { createServer } from "http";
import http from "http";

const PORT = process.env.PORT || 5000;
const app = express();
const server = http.createServer(app);
const io = new Server(server);
server.listen(PORT, () => console.log(`Server listening on ${PORT}`));
