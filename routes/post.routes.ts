import { Router} from 'express'
const postRouter= Router()
import postController from '../controllers/PostController.js'
postRouter.post('/post',postController.createPost)
postRouter.delete('/post/:id',postController.deletePost)
postRouter.get('/post',postController.getPostsByUserId)


export default postRouter

