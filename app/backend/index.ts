import express, { Application } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import router from './routes/index';
import mongoose from 'mongoose';

dotenv.config();

const app: Application = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', router);

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/node-rizz')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.log(`Error connecting to MongoDB: ${error}`);
  });

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
