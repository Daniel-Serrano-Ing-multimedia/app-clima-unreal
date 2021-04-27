import axios from 'axios';
const engine = '192.168.0.32';
const api = '192.168.0.27';

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