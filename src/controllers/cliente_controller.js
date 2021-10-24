import Cliente from "../models/cliente";


 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const  createCliente = async (req, res) => {
  try {
    console.log(req.body)
    const { cd_cliente,cd_grupo,nivel_grupo,fh_alta,fh_nacimiento,tp_sector,cd_sector,cd_actividad,cd_postal,cd_estado,recursos,credito,rentabilidad,consumo_cfe_12m,pagos_cfe_12m} = req.body
    const clientenew = new Cliente({ cd_cliente,cd_grupo,nivel_grupo,fh_alta,fh_nacimiento,tp_sector,cd_sector,cd_actividad,cd_postal,cd_estado,recursos,credito,rentabilidad,consumo_cfe_12m,pagos_cfe_12m});
    
    const savedCliente = await clientenew.save();
    
    return res.status(200).json({  cliente:savedCliente, message:"cliente creado correctamente",status:200 });
  } catch (error) {
  
    console.log(error)
    return res.status(200).json({message:"Campos imcompletos",status:500})
  }
};
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const Getcliente = async (req, res) => {
  try {
    const { id } = req.params;
    const idfound = await Cliente.findOne( {_id:id});
    if(!idfound) return res.status(406).json({message:"cliente no encontrado"})
    return res.status(200).json({message:"cliente encontrado correctamente",cliente:idfound})
  } catch (error) {
    return res.status(500).json({message:"Error al encontrar empresa"})
  }
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const Getclientes = async (req, res) => {
  try {
    
    const idfound = await Cliente.find();
    
    if(!idfound) return res.status(406).json({message:"clientes  no encontrados"})
    return res.status(200).json({message:"clientes encontrados correctamente",cliente:idfound})
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
    const sectorfound=await Cliente.findById({_id:id})
    if(!sectorfound) return res.status(500).json({message:"registro no encontrado"})
    await Cliente.deleteOne({_id:id})
    return res.status(200).json({menssage:"registro eliminado correctamente",sector:null})
  } catch (error) {
    return res.status(406).json({menssage:"Error"})
  }
}
