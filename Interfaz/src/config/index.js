import axios from 'axios';
const engine = '192.168.1.146';
const api = '192.168.1.146';

const unreal = axios.create( {
    baseURL : `http://${ engine }:30010/remote/object/`,
    headers :  { 'Content-Type': 'application/json' }
} );

const hidromet = axios.create( {
    baseURL : `http://${ api }:4000/hidromet`,
    headers :  { 'Content-Type': 'application/json' }
} );

const connection = {
    unreal, 
    hidromet
}

export default connection 