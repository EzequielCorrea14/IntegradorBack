import express from 'express';
import routerProducts from '../routes/productRoutes.js';
import CartRouter from '../routes/cartRouter.js';
import authRoutes from '../routes/authRoutes.js';
import routerError from '../utils/routeError.js';

import cors from 'cors';
const server = express();


server.use(cors());
server.use(express.json());
server.use('/api/', authRoutes);

server.use('/api/', routerProducts);
server.use('/api/', CartRouter);


server.use(routerError)

export default server;