import mongoose from "mongoose";
import { DB_NAME } from "../constants";

export const connect = async () => {
  try {
    const databaseconnection = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
    console.log(`database connected` , databaseconnection.connection.host)
  } catch (error) {
    console.log(error);
    process.exit(1)
  }
};
