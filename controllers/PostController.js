import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

class PostController{
    async createPost(req,res){
        const data=req.body
        const post=await prisma.post.create({data})
        res.json(post)
    }

    async deletePost(req,res){
        try {
        const id = +req.params.id
        const post =await prisma.post.delete({where:{id:id}})
        res.json(post)
        } catch (error) {
            res.status(404)
            res.end()
        }
        
    }

    async getPostsByUserId(req,res){
        const id = +req.query.id
        const posts= await prisma.post.findMany({where:{userId:id } })
        console.log(posts)
        res.json(posts)
    }
}

const postController=new PostController()

export default postController


