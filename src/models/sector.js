import { Schema, model } from "mongoose";
import bcrypt from "bcryptjs";

const sector = new Schema(
  {

    cd_sector:{
        type: String,
      },        
      nm_sector:{
        type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);


export default model("sectores", sector);