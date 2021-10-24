import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";


import pkg from "../package.json";
import clientes from "./routes/cliente.routes";
import sectores from "./routes/sectores.routes";
import TIPO_VEHICULO from "./routes/TIPO_VEHICULO.routes";
import CLIENTEXTIPO_VEHICULO from "./routes/CLIENTEXTIPO_VEHICULO.routes";
 
const app = express();


// Settings
app.set("pkg", pkg);
app.set("port", process.env.PORT || app.get("pkg").Port);
app.set("json spaces", 4);


// Middlewares
const corsOptions = {
    // origin: "http://localhost:3000",
  };

  app.use(cors(corsOptions));
  app.use(helmet());
  app.use(morgan("dev"));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.get("/", (req, res) => {
    res.json({
      message: "Welcome to my Products API",
      name: app.get("pkg").name,
      version: app.get("pkg").version,
      description: app.get("pkg").description,
      author: app.get("pkg").author,
    });
  });

 

  app.use((req, res, next) => {

    // Dominio que tengan acceso (ej. 'http://example.com')
       res.setHeader('Access-Control-Allow-Origin', '*');
    // Metodos de solicitud que deseas permitir
       res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    // Encabecedados que permites (ej. 'X-Requested-With,content-type')
       res.setHeader('Access-Control-Allow-Headers', '*');
    
    next();
  })



  app.use("/api/clientes", clientes);
  app.use("/api/sectores", sectores);
  app.use("/api/TIPO_VEHICULOS", TIPO_VEHICULO);
  app.use("/api/CLIENTEXTIPO_VEHICULO", CLIENTEXTIPO_VEHICULO);


  
  
  
  export default app;