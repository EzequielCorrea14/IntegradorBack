import express from 'express';
import routerProducts from '../routes/productRoutes.js';
import routerCart from '../routes/cartRouter.js';
import routerAuth from '../routes/authRoutes.js';
import routerError from '../utils/routeError.js';
import validateToken from '../utils/validateToken.js';
import cors from 'cors';
const server = express();


server.use(cors('*'));
server.use(express.json());
server.use('/api/', routerAuth);
server.use(validateToken)
server.use('/api/', routerProducts);
server.use('/api/', routerCart);


server.use(routerError)

export default server;