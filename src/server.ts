import 'dotenv/config'
import express from 'express';

const app = express();

const { APP_PORT } = process.env;

app.listen(Number(APP_PORT), () => console.log(`server is running, port ${APP_PORT}`))