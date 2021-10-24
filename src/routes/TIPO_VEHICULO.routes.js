import { Router } from "express";
const router = Router();

import * as TIPO_VEHICULO from "../controllers/TIPO_VEHICULO_controller";


 

//Config-Master to Company
router.post( "/",TIPO_VEHICULO.create_TIPO_VEHICULO);
router.get( "/:id",  TIPO_VEHICULO.GetTIPO_VEHICULO);
router.get( "/",  TIPO_VEHICULO.GetTIPO_VEHICULOS);
//router.put( "/:id",  company.PutCompany);
router.delete( "/:id",TIPO_VEHICULO.Deletevehiculos);

export default router;