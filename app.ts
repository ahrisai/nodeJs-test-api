import userRouter from "./routes/user.routes.js";
import postRouter from "./routes/post.routes.js";
import express, {Request,Response} from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import authRouter from "./routes/auth.routes.js";
import authMiddleware from "./middlewares/authMiddleware.js";
const app = express();


const allowedOrigins = ['http://localhost:5173', 'http://127.0.0.1:5500'];

app
  .use(
    cors({
      origin: allowedOrigins,
      
      credentials:true
    })
  )
  .use(express.json())
  .use(cookieParser())
  .use(authMiddleware)
  .use("/api", userRouter)
  .use("/api", postRouter)
  .use('/api',authRouter)

  

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
