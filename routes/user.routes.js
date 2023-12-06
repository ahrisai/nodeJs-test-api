import { Router } from 'express'

import userController from '../controllers/UserController.ts'

const userRouter = new Router()

userRouter.post('/user',userController.createUser)
userRouter.get('/user',userController.getUsers)
userRouter.get('/user/:id',userController.getUserById)
userRouter.put('/user/:id',userController.updateUser)
userRouter.delete('/user/:id',userController.deleteUser)


export default userRouter