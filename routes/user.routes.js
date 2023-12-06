const Router=require('express')
const userRouter = new Router()
const userController=require('../controllers/UserController')

userRouter.post('/user',userController.createUser)
userRouter.get('/user',userController.getUsers)
userRouter.get('/user/:id',userController.getUserById)
userRouter.put('/user/:id',userController.updateUser)
userRouter.delete('/user/:id',userController.deleteUser)


module.exports=userRouter