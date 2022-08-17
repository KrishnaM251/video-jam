const express = require('express');
const app = express();
const http = require('http');
const server = require("http").Server(app);
const io = require("socket.io")(server);
const morgan = require('morgan');


const port = 3001;
let users = []

const addUser = (userName, roomId) => {
    users.push({
        userName : userName,
        roomId : roomId
    })
}

const userLeave = (userName, roomId) => {
    users = users.filter(user => (user.userName != userName) && (user.roomId != roomId))
}

const getRoomUsers = (roomId) => {
    return users.filter((user => user.roomId == roomId))
}

app.get("/", (req, res) => {
    res.send("Hello World")
})

// 2) upon receiving connection
io.on("connection", socket => {
    console.log("Someone Connected!")
    
    // 7) when "join-room triggered, adds user / id to list"
    socket.on("join-room", ({roomId, userName}) => {
        console.log("User Joined Room")
        console.log(userName + " " + roomId)
        socket.join(roomId);
        addUser(userName, roomId)
        socket.to(roomId).emit("user-connected", userName)

        // 8) displays updated list of users in room "roomId"
        const myRoomUsers = getRoomUsers(roomId);
        console.log(myRoomUsers);
        io.to(roomId).emit("all-users", myRoomUsers)

        socket.on("disconnect", () => {
            console.log("disconnected");
            socket.leave(roomId);
            userLeave(userName, roomId);
            console.log(users);
            io.to(roomId).emit("all-users", getRoomUsers(roomId))
        })

    })
})

server.listen(port, ()=>{
    console.log("Video Jam listening on localhost 3001")
});