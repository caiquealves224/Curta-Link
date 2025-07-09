import express from 'express';
import routes from './routes.js';

const app = express();

app.use(express.json());

app.use(routes);

const PORT = process.env.APP_PORT || 3000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
