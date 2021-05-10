import connection from '../config';
// unreal
//const connetcion = require ('../db');

const obtenerEmbalses = async () => {
  try {
    const result = await connection.hidromet.get(`/embalses`);
    console.log("result", result.data);
    //return result.data;
  } catch (error) {
    console.log("Error", error);
  }
}


export {
  obtenerEmbalses
}