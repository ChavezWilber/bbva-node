import { config } from "dotenv";
config();

export default {
  MONGODB_URI: process.env.MONGODB_URI || "mongodb+srv://multransan-admin-database:rj1dsC7sxvVBaIAj@antares.mt7gc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
};