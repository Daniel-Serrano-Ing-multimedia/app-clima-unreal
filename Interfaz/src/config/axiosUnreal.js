import axios from 'axios';
const engine = '192.168.0.32'

const axiosUnreal = axios.create( {
    baseURL : `http://${ engine }:30010/remote/object/`,
    headers :  { 'Content-Type': 'application/json' }
} );

export default axiosUnreal;