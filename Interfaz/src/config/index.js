import axios from 'axios';
const engine = '192.168.0.13';
const api = '192.168.0.13';

const unreal = axios.create( {
    baseURL : `http://${ engine }:30010/remote/object/`,
    headers :  { 'Content-Type': 'application/json' }
} );

const hidromet = axios.create( {
    baseURL : `http://${ api }:4000/hidromet`,
    headers :  { 'Content-Type': 'application/json' }
} );

const xml = axios.create( {
    baseURL : `http://${ api }:4000/xml`,
    headers :  { 'Content-Type': 'application/json' }
} );

const connection = {
    unreal, 
    hidromet,
    xml
}

export default connection 