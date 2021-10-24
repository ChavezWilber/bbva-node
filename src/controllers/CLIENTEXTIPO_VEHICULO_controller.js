import CLIENTEXTIPO_VEHICULO from "../models/CLIENTEXTIPO_VEHICULO";
import TIPO_VEHICULO from "../models/TIPO_VEHICULO";

 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const  createCLIENTEXTIPO_VEHICULO = async (req, res) => {
  try {
     
    const {id_cliente,id_tipo,cantidad} = req.body
 
    const idfound = await TIPO_VEHICULO.findOne( {id_tipo:id_tipo});
    if(!idfound) return res.status(200).json({  clientextipo_vehiculo:null, message:"tipo de vehiculo no encontrado",status:200 });
    let emisionCO2=cantidad*idfound.distancia*idfound.factorDeEmision
    console.log(emisionCO2)
    
    const CLIENTEXTIPO_VEHICULOnew = new CLIENTEXTIPO_VEHICULO({id_cliente,id_tipo,cantidad,emisionCO2});
    
    const savedCLIENTEXTIPO_VEHICULO = await CLIENTEXTIPO_VEHICULOnew.save();
    
    return res.status(200).json({  clientextipo_vehiculo:savedCLIENTEXTIPO_VEHICULO, message:"registro creado correctamente",status:200 });
  } catch (error) {
  
    console.log(error)
    return res.status(200).json({message:"Campos imcompletos",status:500})
  }
};
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const GetCLIENTEXTIPO_VEHICULO = async (req, res) => {
  try {
    const { id } = req.params;
    const idfound = await CLIENTEXTIPO_VEHICULO.findOne( {_id:id});
    if(!idfound) return res.status(406).json({message:"registro no encontrado"})
    return res.status(200).json({message:"registro encontrado correctamente",clientextipo_vehiculo:idfound})
  } catch (error) {
    return res.status(500).json({message:"Error al encontrar empresa"})
  }
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const GetCLIENTEXTIPO_VEHICULOS = async (req, res) => {
  try {
    
    const idfound = await CLIENTEXTIPO_VEHICULO.find();
    
    if(!idfound) return res.status(406).json({message:"registros  no encontrados"})
    return res.status(200).json({message:"registros encontrados correctamente",clientextipo_vehiculo:idfound})
  } catch (error) {
    return res.status(500).json({message:"Error al encontrar cliente"})
  }
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



export const Deleteregistro = async (req, res) => {
  try {
    const { id } = req.params;
    const sectorfound=await CLIENTEXTIPO_VEHICULO.findById({_id:id})
    if(!sectorfound) return res.status(500).json({message:"registro no encontrado"})
    await CLIENTEXTIPO_VEHICULO.deleteOne({_id:id})
    return res.status(200).json({menssage:"registro eliminado correctamente",sector:null})
  } catch (error) {
    return res.status(406).json({menssage:"Error"})
  }
}
