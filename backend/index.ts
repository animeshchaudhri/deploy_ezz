import express from 'express';
import type { Application } from 'express';
import dotenv from 'dotenv';
import cors from 'cors'; // Import cors package
import router from './routes/index';
import mongoose from 'mongoose';

dotenv.config();

const app: Application = express();
const port = process.env.PORT ?? 3000;

// Use cors middleware
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', router);

// Connect to MongoDB
require('./models/userModel');

mongoose.connect(process.env.MONGODB_URI ?? 'mongodb://localhost:27017/node-rizz')
  .then(() => {
    console.log('Connected to MongoDB')
  })
  .catch((error) => {
    console.log(`Error connecting to MongoDB: ${error}`)
  })

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
