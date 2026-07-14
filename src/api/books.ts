import {api} from "./client";
import {Book} from "../models/Book";


export interface SearchResponse {

    total:number;

    books:Book[];

}


export interface CoverResponse {

    cover:string;

}



function buildUrl(path:string):string{

    if(path.startsWith("http")){
        return path;
    }

    return `${api.defaults.baseURL}${path}`;

}



export async function searchBooks(
    query:string
):Promise<Book[]>{


    const response =
        await api.get<SearchResponse>(
            "/search",
            {
                params:{
                    q:query
                }
            }
        );


    return response.data.books.map(book=>({

        ...book,

        cover: book.cover
            ? buildUrl(book.cover)
            : undefined

    }));

}



export async function getCover(
    md5:string
):Promise<string|null>{


    try{

        const response =
            await api.get<CoverResponse>(
                `/cover/${md5}`
            );


        return response.data.cover
            ? buildUrl(response.data.cover)
            : null;


    }catch{

        return null;

    }


}



export function getDownloadUrl(
    md5:string
){

    return `${api.defaults.baseURL}/download/${md5}`;

}