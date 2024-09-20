import cors from "cors";
import dotenv from "dotenv";
import express, { Application, Request, Response } from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import expose from "./middleware/expose";
import postsRoute from "./routes/postsRoute";
import usersRoute from "./routes/usersRoute";
import employeesRoute from "./routes/employeesRoute";
import categoriesRoute from "./routes/categoriesRoute";
import learningPathsRoute from "./routes/learningPathsRoute";
import contributionsRoute from "./routes/contributionsRoute";
import authRoute from "./routes/authRoute";
import { verifyToken } from "./middleware/verifytoken";

//For env File
dotenv.config();

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(cors());
app.use(expose);

app.use("/auth", authRoute);

app.use(verifyToken); //routes below this are all protected by jwt
app.use("/employees", employeesRoute);
app.use("/categories", categoriesRoute);
app.use("/learning_paths", learningPathsRoute);
app.use("/contributions", contributionsRoute);
app.use("/posts", postsRoute);
app.use("/users", usersRoute);

app.get("/test", (req: Request, res: Response) => {
  res.status(200).json({ message: "Hello World" });
});

const port = process.env.PORT || 3000;

const mongoUrl = process.env.MONGO_URL;
if (!mongoUrl) {
  throw new Error("MONGO_URL is not defined in the environment variables");
}

mongoose
  .connect(mongoUrl)
  .then(() => {
    app.listen(port, () => console.log(`Server Port: ${port}`));
  })
  .catch((error) => console.log(`${error} did not connect`));
