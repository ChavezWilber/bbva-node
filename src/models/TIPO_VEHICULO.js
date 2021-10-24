import { Schema, model } from "mongoose";
import bcrypt from "bcryptjs";

const TIPO_VEHICULO = new Schema(
  {

    id_tipo:{
        type: String,
      },        
    nombre_tipo:{
        type: String,
    },
    distancia:{
        type: Number,
      },        
    factorDeEmision:{
        type: Number,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);


export default model("TIPO_VEHICULO", TIPO_VEHICULO);