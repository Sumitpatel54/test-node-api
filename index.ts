import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

// Load environment variables
dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;
const mongoUri: any = process.env.MONGO_URL;

// MongoDB connection
mongoose.connect(mongoUri)
  .then(() => {
    console.log(' Connected to MongoDB successfully');
  })
  .catch((error) => {
    console.error('❌ Error connecting to MongoDB:', error);
    process.exit(1);
  });

// Middleware for parsing JSON bodies
app.use(express.json());

// Basic route
app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server is running');
});

// Start server
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port} ✌`);
});
