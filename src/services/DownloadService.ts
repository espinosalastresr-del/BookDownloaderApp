import ReactNativeBlobUtil 
from "react-native-blob-util";


import {Book} 
from "../models/Book";


import {getDownloadUrl}
from "../api/books";

import {
saveBook
}
from "../database/library";

function cleanName(name:string){

    return name
        .replace(/[^a-zA-Z0-9-_ ]/g,"")
        .trim();

}




export async function downloadBook(
    book:Book,
    onProgress?:(value:number)=>void
):Promise<string>{



const extension =
book.file_type
? `.${book.file_type.toLowerCase()}`
: "";



const fileName =
`${cleanName(book.title)}${extension}`;



const path =
`${ReactNativeBlobUtil.fs.dirs.DocumentDir}/Books/${fileName}`;



await ReactNativeBlobUtil.fs.mkdir(
`${ReactNativeBlobUtil.fs.dirs.DocumentDir}/Books`
);



const task =
ReactNativeBlobUtil
.config({

path:path,

fileCache:true

})

.fetch(

"GET",

getDownloadUrl(book.md5)

);



task.progress(
{interval:250},

(received,total)=>{

    if(onProgress){

        onProgress(
            received / total
        );

    }

}

);



await task;


await saveBook(
    book,
    path
);



return path;


}