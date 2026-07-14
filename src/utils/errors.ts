import axios from "axios";


export function getErrorMessage(
error:any
){

if(
axios.isAxiosError(error)
){

if(error.code==="ECONNABORTED"){

return "Tiempo de conexión agotado";

}


if(!error.response){

return "No hay conexión con el servidor";

}


return error.response.data?.detail
||
"Error del servidor";

}


return "Error desconocido";

}