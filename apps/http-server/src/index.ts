import express from "express"

import { prisma } from "@repo/db"


const app = express()

app.use("/",async(req,res) =>{

const users = await prisma.user.findMany();

    res.send(users);

});



app.listen(3000);
