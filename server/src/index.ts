import express,{ Express, Request, Response } from 'express';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';

const app:Express = express();
require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const PORT = process.env.PORT || 3002;

app.get('/', (req:Request, res:Response) => {
  res.send("Welcome");
});

app.listen(PORT, () => {
  console.log(`Server started at Port ${PORT}`);
});
