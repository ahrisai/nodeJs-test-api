import { PrismaClient } from "@prisma/client";
import { Request,Response } from "express";
const prisma = new PrismaClient();

interface MySession {
    myCookie?: string;
  }

class UserController{
    async createUser(req:Request,res:Response){
        const user=req.body
        const newUser = await prisma.users.create({data:user});
        
         res.cookie('user', JSON.stringify(newUser),{sameSite:'none', secure:true,httpOnly:false,maxAge:360000,});
        res.json('ok')
    }   
    async getUsers(req:Request,res:Response){
    const users = await prisma.users.findMany();
        console.log(req.cookies)
    res.json(users)
    }
    async getUserById(req:Request,res:Response){
        const id =+req.params.id

    const user= await prisma.users.findFirst({where:{id:id}, include:{posts:{}}})
    console.log(user)

    res.json(user)
    }
    async updateUser(req:Request,res:Response){
        
        const id =+req.params.id
        const data=req.body
        const user = await prisma.users.update({where:{id}, data:data})
        res.json(user)
    }
    async deleteUser(req:Request,res:Response){
        const id =+req.params.id
        const user=await prisma.users.deleteMany({where:{age:18}})
        res.json(user)
    }
}

const userController = new UserController()

export default userController
