import 'dotenv/config'
import express from 'express';
import { routes } from './routes/routes';

const app = express();

app.use(express.json());

const { APP_PORT, APP_GLOBAL_PREFIX } = process.env;

app.use(`${APP_GLOBAL_PREFIX}`, routes)

app.listen(Number(APP_PORT), () => console.log(`server is running, port ${APP_PORT}`))