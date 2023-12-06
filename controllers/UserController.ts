import { PrismaClient } from "@prisma/client";
import { Request,Response } from "express";
const prisma = new PrismaClient();

class UserController{
    async createUser(req:Request,res:Response){
        const user=req.body
        const newUser = await prisma.user.create({data:user})
        
         res.cookie('user', JSON.stringify(newUser),{sameSite:'none', secure:true,httpOnly:false,maxAge:360000,});
       res.send()
    }   
    async getUsers(req:Request,res:Response){
    const users = await prisma.user.findMany();
    res.json(users)
    }
    async getUserById(req:Request,res:Response){
        const id =+req.params.id

    const user= await prisma.user.findFirst({where:{id:id}, include:{posts:{}}})
    console.log(user)

    res.json(user)
    }
    async updateUser(req:Request,res:Response){
        
        const id =+req.params.id
        const data=req.body
        const user = await prisma.user.update({where:{id}, data:data})
        res.json(user)
    }
    async deleteUser(req:Request,res:Response){
        const id =+req.params.id
        const user=await prisma.user.deleteMany({where:{age:18}})
        res.json(user)
    }
}

const userController = new UserController()

export default userController
