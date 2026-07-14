import React,
{
useEffect,
useState
}
from "react";


import {

View,

Text,

FlatList,

StyleSheet,

Image,

Button

}

from "react-native";


import {
getLibrary,
deleteBook
}
from "../database/library";



export default function LibraryScreen(){


const [books,setBooks]=useState<any[]>([]);



async function load(){

const data =
await getLibrary();

setBooks(data);

}



useEffect(()=>{

load();

},[]);



return (

<View style={styles.container}>


<Text style={styles.title}>
Mi biblioteca
</Text>



<FlatList

data={books}

keyExtractor={
item=>item.id
}


renderItem={({item})=>(


<View style={styles.card}>


<Image

source={{
uri:item.cover
}}

style={styles.cover}

/>



<View>

<Text>

{item.title}

</Text>


<Text>

{item.author}

</Text>



{
item.exists ?

<Button

title="Abrir"

onPress={()=>
openBook(item.path)
}

/>


:

<Button

title="Descargar nuevamente"

onPress={()=>
downloadBook(item)
}

/>

}


</View>


</View>


)}

/>


</View>

)

}



const styles=StyleSheet.create({

container:{
flex:1,
padding:10
},


title:{
fontSize:22,
fontWeight:"bold"
},


card:{

flexDirection:"row",

padding:10,

marginVertical:8,

borderRadius:10,

backgroundColor:"#eee"

},


cover:{

width:70,

height:100

}


});