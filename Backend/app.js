import express from "express";
import cors from "cors";
const app = express();

//json body
app.use(express.json());

//cors body
app.use(cors());

export default app;
