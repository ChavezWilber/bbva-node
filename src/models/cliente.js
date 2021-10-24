import { Schema, model } from "mongoose";
import bcrypt from "bcryptjs";

const cliente = new Schema(
  {

    cd_cliente:{
        type: String,
      },
    cd_grupo:{
        type: String,
      },
    nivel_grupo: {
        type: String,
    },
    fh_alta:{
        type: String,

    },
    fh_nacimiento: {
        type: String,
    },
    tp_sector:{
        type:String
    },
    cd_sector:{
        type: String,
    },
    cd_actividad:{
        type: Number,
    },
    cd_postal:{
        type: Number,
    },
    recursos:{
        type: Number,
    },
    credito:{
        type: Number,
    },
    rentabilidad:{
        type: Number,
    },
    consumo_cfe_12m:{
        type: Number,
    },
    pagos_cfe_12m:{
        type: Number,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);


export default model("clientes", cliente);