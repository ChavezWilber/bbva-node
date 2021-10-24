import { Router } from "express";
const router = Router();

import * as cliente from "../controllers/cliente_controller.js";


 

//Config-Master to Company
router.post( "/",cliente.createCliente);
router.get( "/:id",  cliente.Getcliente);
router.get( "/",  cliente.Getclientes);
//router.put( "/:id",  company.PutCompany);
//router.delete( "/:id",company.DeleteCompany);

export default router;