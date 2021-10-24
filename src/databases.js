import mongoose from "mongoose";
import config from "./config";


let conection="mongodb://localhost/bbva-datatonXD"
mongoose.connect(conection, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //useCreateIndex: true,
  })
  .then((db) => console.log(`DB is connected`))
  .catch((err) => console.log(err));