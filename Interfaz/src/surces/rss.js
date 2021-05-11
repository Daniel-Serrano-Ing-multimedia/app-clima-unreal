import connection from '../config';
import { xml } from '../config';
// unreal
//const connetcion = require ('../db');

const news = async () => {
  try {
    const result = await connection.xml.get(`/bbc`);
    //console.log('result ', result.data.news);
    return result.data.news;
  } catch (error) {
    console.log("Error", error);
    return error
  }
}

export {
  news
}