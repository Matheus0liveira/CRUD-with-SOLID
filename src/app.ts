import express from 'express';
import connection from './database/connection';
import routes from './routes';

export const app = express();

connection();

app.use(express.json());
app.use(routes);

