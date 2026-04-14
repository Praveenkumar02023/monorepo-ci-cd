import { WebSocketServer } from "ws";
import {prisma} from "@repo/db"



const wss = new WebSocketServer({port : 8080});


wss.on("connection" , (ws) => {

    console.log("connected");
    
    prisma.user.create({

        data:{

            name : Math.random().toString(),
            email : Math.random().toString()

        }

    })


})