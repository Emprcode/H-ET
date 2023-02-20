import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
dotenv.config();

const app = express();

const PORT = process.env.PORT || 8000;

//middleware

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.use("/api/v1/user", (req, res, next) => {
  res.json({
    status: "success",
    message: "success",
  });
});

//uncaught error handler

app.use("*", (req, res, next) => {
  const error = {
    errorCode: 404,
    message: "404 Page not found",
  };
  next(error);
});

//global error handler

app.use((error, req, res, next) => {
  const statusCode = error.errorCode || 500;
  res.status(statusCode).json({
    status: "error",
    message: error.message,
  });
});

app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`your server running at http://localhost:${PORT}`);
});
