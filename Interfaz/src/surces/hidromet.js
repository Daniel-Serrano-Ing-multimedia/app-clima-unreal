import connection from '../config';
// unreal
//const connetcion = require ('../db');

const obtenerEmbalses = async () => {
  try {
    const result = await connection.hidromet.get(`/embalses`);

    return result.data.pronostico;
  } catch (error) {
    console.log("Error", error);
    return error
  }
}

const obtenerEmbalses0 = async () => {
  connection.hidromet.get(`/embalses`).then( result => {
    return result.data.pronostico;
  })
  .catch( error => {
    console.log("Error", error);
    return error
  });
    
}

export {
  obtenerEmbalses
}