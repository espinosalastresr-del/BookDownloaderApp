import {getDatabase}
from "./database";


import {Book}
from "../models/Book";

import {
fileExists
}
from "../storage/files";

import {
deleteFile
}
from "../storage/files";

export async function saveBook(
    book:Book,
    path:string
){


const db =
await getDatabase();



await db.executeSql(

`
INSERT OR REPLACE INTO books

(
id,
md5,
title,
author,
cover,
file_type,
size,
path,
download_date
)

VALUES (?,?,?,?,?,?,?,?,?)

`,

[

book.id,

book.md5,

book.title,

book.author,

book.cover ?? "",

book.file_type,

book.size,

path,

Date.now()

]


);


}



export async function getLibrary(){


const db =
await getDatabase();



const result =
await db.executeSql(
"SELECT * FROM books ORDER BY download_date DESC"
);



const rows =
result[0].rows;


let books=[];



for(
let i=0;
i<rows.length;
i++
){

const book =
rows.item(i);



books.push({

...book,

exists:
await fileExists(book.path)

});


}



return books;


}



export async function deleteBook(
    id:string,
    path:string
){

const db =
await getDatabase();


await deleteFile(path);



await db.executeSql(

"DELETE FROM books WHERE id=?",

[id]

);


}