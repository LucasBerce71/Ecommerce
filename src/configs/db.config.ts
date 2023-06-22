import dotenv from "dotenv";
import mongoose from "mongoose"
import { IMongoDBConnectOptions } from "../models/mongoDbConnectOptions";

dotenv.config();

const username = process.env.MONGO_DB_USERNAME;
const password = process.env.MONGO_DB_PASSWORD;
const databaseName = process.env.MONGO_DB_DATABASE_NAME;

const connectionString = `mongodb+srv://${username}:${password}@ecommerce-express.zhfyc6b.mongodb.net/${databaseName}`;

const options: IMongoDBConnectOptions = {
  autoIndex: true,
  maxPoolSize: 10,
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 45000,
  family: 4,
};

export const db = mongoose.connect(connectionString, options)
  .then(result => {
    if (result) console.log(`Database connection succesfully to ${databaseName}`);
  }).catch(error => console.error(error));