import FileViewer
from "react-native-file-viewer";


export async function openBook(
path:string
){

try{


await FileViewer.open(path);


}catch(error){

console.log(
"No se pudo abrir",
error
);


}

}