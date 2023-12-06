const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class UserController{
    async createUser(req,res){
        const user=req.body
        const newUser = await prisma.user.create({data:user})
        res.cookie('userData', JSON.stringify(newUser))
       res.end()
    }
    async getUsers(req,res){
    const users = await prisma.user.findMany();
    res.json(users)
    }
    async getUserById(req,res){
        const id =+req.params.id

    const user= await prisma.user.findFirst({where:{id:id}, include:{posts:{}}})
    console.log(user)

    res.json(user)
    }
    async updateUser(req,res){
        
        const id =+req.params.id
        const data=req.body
        const user = await prisma.user.update({where:{id}, data:data})
        res.json(user)
    }
    async deleteUser(req,res){
        const id =+req.params.id
        const user=await prisma.user.deleteMany({where:{age:18}})
        res.json(user)
    }
}

module.exports=new UserController()