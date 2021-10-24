import TIPO_VEHICULO from "../models/TIPO_VEHICULO";


 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const  create_TIPO_VEHICULO = async (req, res) => {
  try {
    
    const {id_tipo,nombre_tipo,distancia,factorDeEmision } = req.body
    const TIPO_VEHICULOnew = new TIPO_VEHICULO({id_tipo,nombre_tipo,distancia,factorDeEmision});
    
    const savedTIPO_VEHICULO = await TIPO_VEHICULOnew.save();
    
    return res.status(200).json({  TIPO_VEHICULO:savedTIPO_VEHICULO, message:"TIPO DE VEHICULO creado correctamente",status:200 });
  } catch (error) {
  
    console.log(error)
    return res.status(200).json({message:"Campos imcompletos",status:500})
  }
};
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const GetTIPO_VEHICULO = async (req, res) => {
  try {
    const { id } = req.params;
    const idfound = await TIPO_VEHICULO.findOne( {_id:id});
    if(!idfound) return res.status(406).json({message:"cliente no encontrado"})
    return res.status(200).json({message:"cliente encontrado correctamente",TIPO_VEHICULO:idfound})
  } catch (error) {
    return res.status(500).json({message:"Error al encontrar empresa"})
  }
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const GetTIPO_VEHICULOS = async (req, res) => {
  try {
    
    const idfound = await TIPO_VEHICULO.find();
    
    if(!idfound) return res.status(406).json({message:"clientes  no encontrados"})
    return res.status(200).json({message:"clientes encontrados correctamente",TIPO_VEHICULO:idfound})
  } catch (error) {
    return res.status(500).json({message:"Error al encontrar cliente"})
  }
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



export const Deletevehiculos = async (req, res) => {
  try {
    const { id } = req.params;
    const TIPO_VEHICULOfound=await TIPO_VEHICULO.findById({_id:id})
    if(!TIPO_VEHICULOfound) return res.status(500).json({message:"registro no encontrado"})
    await TIPO_VEHICULO.deleteOne({_id:id})
    return res.status(200).json({menssage:"Empresa eliminada correctamente",company:null})
  } catch (error) {
    return res.status(406).json({menssage:"Error"})
  }
}

