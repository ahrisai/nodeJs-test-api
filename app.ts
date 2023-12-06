import userRouter from "./routes/user.routes.js";
import postRouter from "./routes/post.routes.js";
import express, {Request,Response} from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

const app = express();



app
  .use(
    cors({
      origin: "http://127.0.0.1:5500",
      credentials:true
    })
  )
  .use(express.json())
  .use(cookieParser())
  .use("/api", userRouter)
  .use("/api", postRouter)

  app.get('/api/cookie',(req:Request,res:Response)=>{
    console.log(req.cookies)
  res.send('sdsds')
  res.end()
  })

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
