import { PrismaClient } from "@prisma/client";
import { Request,Response } from "express";
import { Post } from "../queryTypes.js";
const prisma = new PrismaClient();

class PostController{
    async createPost(req:Request,res:Response){
        const data=req.body 
        const post=await prisma.posts.create({data})
        res.json(post)
    }

    async deletePost(req:Request,res:Response){
        try {
        const id = +req.params.id
        const post =await prisma.posts.delete({where:{id:id}})
        res.json(post)
        } catch (error) {
            res.status(404)
            res.end()
        }
        
    }

    async getPostsByUserId(req:Request,res:Response){
        if(!req.query.id) return
        const id = +req.query.id
        const posts= await prisma.posts.findMany({where:{userId:id } })
        console.log(posts)
        res.json(posts)
    }
}

const postController=new PostController()

export default postController


