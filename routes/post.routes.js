const Router=require('express')
const postRouter = new Router()
const postController=require('../controllers/PostController')

postRouter.post('/post',postController.createPost)
postRouter.delete('/post/:id',postController.deletePost)
postRouter.get('/post',postController.getPostsByUserId)


console.log('da')



module.exports=postRouter