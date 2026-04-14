import express from "express"

import { prisma } from "@repo/db"


const app = express()

app.get("/",async(req,res) =>{

const users = await prisma.user.findMany();

    res.send(users);

});

app.post("/add",async(req,res) =>{

const users = await prisma.user.create({
    data:{
        name : Math.random().toString(),
        email : Math.random().toString()
    }
})

    res.send(users);

});



app.listen(3000);
