import userRouter from "./routes/user.routes.js";
import postRouter from "./routes/post.routes.js";
import express from 'express'
import cors from 'cors'

const app = express();


app
  .use(
    cors({
      origin: "http://127.0.0.1:5500",
    })
  )
  .use(express.json())

  .use("/api", userRouter)
  .use("/api", postRouter)


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
