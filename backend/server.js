import express from 'express';

import dotenv from 'dotenv';
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

dotenv.config();
const port = process.env.PORT || 5000;

connectDB(); // Connect to MongoDB

const app = express();

app.get('/', (req, res) => {
    res.send(('API is running...'))
});

app.use('/api/products', productRoutes);

app.use(notFound); // Middleware to handle 404 errors
app.use(errorHandler); // Middleware to handle all other errors

app.listen(port, () => console.log(`Server running on port ${port}`));