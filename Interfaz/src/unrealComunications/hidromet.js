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


const pronostico = async region =>{
  try {
    const result = await connection.hidromet.get( `/pronostico/${ region }`  );
    const { pronostico } = result.data;
    Mensaje( `pronostico Manana :  ${ pronostico[0].tiempo_manana }`);
    //
    const mensaje = `pronostico Manana :  ${ pronostico[0].tiempo_manana }`;
    const  data = {
      "objectPath" : "/Game/Hunter_Game_Levels/UEDPIE_0_DEV_Testing.DEV_Testing:PersistentLevel.Text3D_2",
      "functionName":"EnviarTexto",
      "Parameters":{
        "Txt": mensaje
      },
      "generateTransaction":true
    }
    enviarPeticion( '/call', data );
  } catch (error) {
    console.log(' error : ', error.response);     
  }
}

const defaultText = async text =>{
  try {
    const  data = {
      "objectPath" : "/Game/Hunter_Game_Levels/UEDPIE_0_DEV_Testing.DEV_Testing:PersistentLevel.Text3D_2",
      "functionName":"EnviarTexto",
      "Parameters":{
        "Txt": text
      },
      "generateTransaction":true
    }
    enviarPeticion( '/call', data );
  } catch (error) {
    console.log(' error : ', error.response);     
  }
}


export {
  pronostico,
  defaultText,
}