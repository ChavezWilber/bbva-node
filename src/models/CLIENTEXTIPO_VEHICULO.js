import { Schema, model } from "mongoose";
import bcrypt from "bcryptjs";

const clientextipocliente = new Schema(
  {

    id_cliente:{
        type: String,
      },        
    id_tipo:{
        type: String,
    },
    cantidad:{
        type: Number,
      },        
    emisionCO2:{
        type: Number,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);


export default model("clientextipocliente", clientextipocliente);