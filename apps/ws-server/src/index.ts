import { WebSocketServer } from "ws";
import {prisma} from "@repo/db"



const wss = new WebSocketServer({port : 8080});


wss.on("connection" , async (ws) => {

    console.log("connected");
    
   const user = await prisma.user.create({

        data:{

            name : Math.random().toString(),
            email : Math.random().toString()

        }

    })

    console.log(user);
    

})