import { Router } from "express";
const router = Router();

import * as CLIENTEXTIPO_VEHICULO from "../controllers/CLIENTEXTIPO_VEHICULO_controller";


 

//Config-Master to Company
router.post( "/",CLIENTEXTIPO_VEHICULO.createCLIENTEXTIPO_VEHICULO);
router.get( "/:id",  CLIENTEXTIPO_VEHICULO.GetCLIENTEXTIPO_VEHICULO);
router.get( "/",  CLIENTEXTIPO_VEHICULO.GetCLIENTEXTIPO_VEHICULOS);
//router.put( "/:id",  company.PutCompany);
router.delete( "/:id",CLIENTEXTIPO_VEHICULO.Deleteregistro);

export default router;