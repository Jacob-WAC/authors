const express = require("express");
const cors = require("cors");
const { Socket } = require("socket.io");
const app = express();
require("./server/config/mongoose.config");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require("./server/routes/Author.routes")(app);
const server = app.listen(8000, () => {
    console.log("Listening at Port 8000");
});
const io = require("socket.io")(server, { cors: true });
io.on("connection", (socket) => {
    console.log(socket.id);
    socket.on("event_from_client", (data) => {
        socket.broadcast.emit("send_data_to_all_other_clients");
    });
});
