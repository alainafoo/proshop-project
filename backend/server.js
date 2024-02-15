import express from 'express';
import cookieParser from 'cookie-parser';

import dotenv from 'dotenv';
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

dotenv.config();
const port = process.env.PORT || 5000;

connectDB(); // Connect to MongoDB

const app = express();

// body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Cookie parser middleware
app.use(cookieParser());

app.get('/', (req, res) => {
    res.send(('API is running...'))
});

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);
app.use(notFound); // Middleware to handle 404 errors
app.use(errorHandler); // Middleware to handle all other errors

app.listen(port, () => console.log(`Server running on port ${port}`));