const exprress = require("express")
const app = express();
const cors = require ("cors");

const http = require("http").Server(app);
const io = require("socket.io")(http,{
    cors: {
        origin: "http://localhost:4200",
        method: ["GET", "POST"],
    }
});

const sockets = require("./socket.js");
const sockets = require("./listen.js");

const PORT = 3000;

app.use(cors());
sockets.connect(io,PORT);
server.listen(http,PORT);