import connection from '../config';
// unreal
import { Mensaje} from './martillo';

// const objectPathMArtillo = "/Game/Hunter_Game_Levels/DEV_Testing.DEV_Testing:PersistentLevel.FeedUpActor3_8";
// const objectPathMArtilloInGame = "/Game/Hunter_Game_Levels/UEDPIE_0_DEV_Testing.DEV_Testing:PersistentLevel.FeedUpActor3_8";


const enviarPeticion = async (tipoPeticion, data) =>{
  try {
    // enviar peticion http
    const response = await connection.unreal.put( tipoPeticion, data );
    console.log ( 'reponse : ', response );
  } catch (error) {
    console.log( 'Error : ', error );
  }
}


const newBBC = async dataNew =>{
  const { 
    link,
    title,
    content,
    pubDate
   } = dataNew ;
  try {
    const  data = {
      "objectPath" : "/Game/Hunter_Game_Levels/UEDPIE_0_DEV_Testing.DEV_Testing:PersistentLevel.BBCNew_3",
      
      "functionName":"getNoticia",
      "Parameters":{
        "titulo"    : title,
        "info"      : content,
        "fecha"     : pubDate,

      },
      "generateTransaction":true
    }
    enviarPeticion( '/call', data );
    console.log(' Enviando a unreal : ', data)
  } catch (error) {
    console.log(' error : ', error.response);     
  }
}


const newsBBC = async dataNews =>{
  let titulos = [];
  let descripciones = [];
  let fechas = [];

  dataNews.forEach(element => {
    titulos.push( element.title );
    descripciones.push( element.content );
    fechas.push( element.isoDate );
  });

  try {
    const  data = {      
      "objectPath" : "/Game/Hunter_Game_Levels/UEDPIE_0_DEV_Testing.DEV_Testing:PersistentLevel.BBCNew_3",
      
      "functionName":"getNoticiasV2",
      "Parameters":{
        "titulares"   : titulos,
        "infos"       : descripciones,
        "fechas"      : fechas,

      },
      "generateTransaction":true
    }
    enviarPeticion( '/call', data );
    console.log(' Enviando a unreal : ', data )
  } catch (error) {
    console.log(' error : ', error);     
  }
}

const newsBBC_v2 = async dataNews =>{
  try {
    const  data = {      
      "objectPath" : "/Game/Hunter_Game_Levels/UEDPIE_0_DEV_Testing.DEV_Testing:PersistentLevel.BBCNew_3",
      
      "functionName":"getNoticiasV2",
      "Parameters":{
        "noticiasBBC"   : dataNews,

      },
      "generateTransaction":true
    }
    enviarPeticion( '/call', data );
    console.log(' Enviando a unreal v2: ', data )
  } catch (error) {
    console.log(' error : ', error);     
  }
}


export {
  newBBC,
  newsBBC,
  newsBBC_v2
}