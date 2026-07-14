import React, {useState} from "react";

import {
View,
TextInput,
FlatList,
StyleSheet,
ActivityIndicator
} from "react-native";


import BookCard from "../components/BookCard";

import {
searchBooks,
getCover
} from "../api/books";


import {
Book
} from "../models/Book";


import {
downloadBook
}
from "../services/DownloadService";



export default function SearchScreen(){


const [query,setQuery]=useState("");

const [books,setBooks]=useState<Book[]>([]);

const [loading,setLoading]=useState(false);



async function search(){


if(!query.trim())
return;


setLoading(true);


try{


const result =
await searchBooks(query);



const withCovers =
await Promise.all(

result.map(async(book)=>{


if(!book.cover){

book.cover =
await getCover(book.md5)
||
undefined;

}


return book;


})

);



setBooks(withCovers);



}catch(error){

console.log(error);

}
finally{

setLoading(false);

}


}



return (

<View style={styles.container}>


<TextInput

style={styles.search}

placeholder="Buscar libro..."

value={query}

onChangeText={setQuery}

onSubmitEditing={search}

/>



{
loading ?

<ActivityIndicator/>

:

<FlatList

data={books}

keyExtractor={
item=>item.md5
}

renderItem={({item})=>(

<BookCard

book={item}

onDownload={()=>{

downloadBook(item);

}}

/>

)}

/>

}



</View>

)

}



const styles=StyleSheet.create({

container:{

flex:1,

padding:10

},


search:{

height:50,

borderRadius:10,

borderWidth:1,

paddingHorizontal:15

}

});