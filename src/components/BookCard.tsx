import React from "react";


import {

Card,

Text,

Button,

Avatar

}

from "react-native-paper";


import {

View,

StyleSheet

}

from "react-native";


import {Book} from "../models/Book";



interface Props {

book:Book;

onDownload:()=>void;

}



export default function BookCard({

book,

onDownload

}:Props){



return (

<Card style={styles.card}>


<Card.Cover

source={{

uri:book.cover

}}

/>



<Card.Content>


<Text

variant="titleMedium"

>

{book.title}

</Text>



<Text>

{book.author}

</Text>



<Text>

{book.year} · {book.file_type}

</Text>



<Text>

{book.size}

</Text>



</Card.Content>



<Card.Actions>


<Button

mode="contained"

onPress={onDownload}

>

Descargar

</Button>


</Card.Actions>



</Card>

)

}



const styles=StyleSheet.create({

card:{

margin:10,

borderRadius:16,

overflow:"hidden"

}

});