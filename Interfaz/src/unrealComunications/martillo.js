import axiosUnreal from '../config/axiosUnreal';

const objectPathMArtillo = "/Game/Hunter_Game_Levels/DEV_Testing.DEV_Testing:PersistentLevel.FeedUpActor3_8";
const objectPathMArtilloInGame = "/Game/Hunter_Game_Levels/UEDPIE_0_DEV_Testing.DEV_Testing:PersistentLevel.FeedUpActor3_8";

const enviarPeticion = async (tipoPeticion, data) =>{
  try {
    // enviar peticion http
    const response = await axiosUnreal.put( tipoPeticion, data );
    console.log ( 'reponse : ', response );
  } catch (error) {
    console.log( 'Error : ', error );
  }
}

const tomarMartillo = async () => {
  // objeto con la peticion http
  const  data = {
    "objectPath" : objectPathMArtilloInGame,
    "functionName":"Martillo",
    "generateTransaction":true
  }
  enviarPeticion( '/call', data );
}


const visible = async () => {
  // objeto con la peticion http
  const  data = {
    "objectPath" : objectPathMArtilloInGame,
    "functionName":"Visible",
    "generateTransaction":true
  }
  enviarPeticion( '/call', data );
}


const Saludo = async () => {
  const  data = {
    "objectPath" : objectPathMArtillo,
    "functionName":"Saludo",
    "generateTransaction":true
  }
  enviarPeticion( '/call', data );
}

const Mensaje = async mensaje => {
  const  data = {
    "objectPath" : objectPathMArtillo,
    "functionName": "Mensaje",
    "Parameters":{
      "Texto": mensaje
    },
    "generateTransaction":true
  }
  enviarPeticion( '/call', data );
}

const ActivarEvento = async () => {
  const  data = {
    "objectPath" : objectPathMArtillo,
    "functionName":"ActivarEvento",
    "generateTransaction":true
  }
  enviarPeticion( '/call', data );
}

export {
  tomarMartillo, 
  visible,
  ActivarEvento,
  Saludo,
  Mensaje
}