const userRouter = require("./routes/user.routes");
const postRouter = require("./routes/post.routes");

const express = require("express");
const app = express();
const cors = require("cors");

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
