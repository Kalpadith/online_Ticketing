import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from 'cors';



import busRoutes from './routes/bus_r.js'
import bookRoutes from './routes/book_r.js'
import user_account_r from './routes/user_account_r.js'
import Token_r from './routes/Token_r.js'

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
app.use('/users', user_account_r);
app.use('/token', Token_r);



const URL = 'mongodb+srv://Ishan:gNdyH7YrkraCKbpF@onlineticketing.8bzhwcf.mongodb.net/Ticketing?retryWrites=true&w=majority';

const PORT = process.env.PORT || 5000;



mongoose.connect(URL).then(() => {
    console.log(`Server is running on port`);
    httpServer.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`));
}).catch((error) => {
    console.error(error)
})





