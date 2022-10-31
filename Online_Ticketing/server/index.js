import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from 'cors';



import busRoutes from './routes/bus_r.js'
import bookRoutes from './routes/book_r.js'

import http from 'http';
import { Server } from "socket.io";

const app = express()
    , httpServer = http.createServer(app)
    , io = new Server(httpServer,{
        cors:{
            origin: "*",
            methods: "*"
        }
});


app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());



app.use('/bus', busRoutes);
app.use('/book', bookRoutes);


const URL = 'mongodb+srv://Mishara:WwFLJsYgCNoKO8Ot@onlineticketing.8bzhwcf.mongodb.net/Ticketing?retryWrites=true&w=majority';

const PORT = process.env.PORT || 5000;


/*io.on('connection', async (socket) => {


    socket.on('sendMessage', async messageObj => {

        const newChats = new Chats(messageObj);
        await newChats.save();

        const ret = await Chats.find({studentGroup: messageObj.studentGroup})
            .populate('user', '_id user_Fname user_Lname user_role user_avatar')
            .select("message user createdAt");


        io.emit(messageObj.studentGroup, ret);
    })

    socket.on('chat message', msg => {
        io.emit('chat message', msg);
    });
});*/



mongoose.connect(URL).then(() => {
    console.log(`Server is running on port`);
    httpServer.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`));
}).catch((error) => {
    console.error(error)
})





