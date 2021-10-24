import { Router } from "express";
const router = Router();

import * as sectores from "../controllers/sector_controller";
import sector from "../models/sector";


 

//Config-Master to Company
router.post( "/",sectores.createsector);
router.get( "/:id",  sectores.Getsector);
router.get( "/",  sectores.Getsectores);
//router.put( "/:id",  company.PutCompany);
router.delete( "/:id",sectores.Deletesector);

export default router;