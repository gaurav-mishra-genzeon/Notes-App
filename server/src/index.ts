import express,{ Express, Request, Response } from 'express';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import user from './routes/userRoutes';
import notes from './routes/notesRoutes';

const app:Express = express();
require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/api",user)
app.use("/api",notes)

const PORT = process.env.PORT || 3002;

app.get('/', (req:Request, res:Response) => {
  res.send("Welcome");
});

app.listen(PORT, () => {
  console.log(`Server started at Port ${PORT}`);
});
