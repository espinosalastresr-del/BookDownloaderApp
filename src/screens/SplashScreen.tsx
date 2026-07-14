import React,{useEffect}
from "react";


import {
View,
ActivityIndicator,
Text
}
from "react-native";


export default function SplashScreen(){

return(

<View
style={{
flex:1,
justifyContent:"center",
alignItems:"center"
}}
>

<ActivityIndicator size="large"/>

<Text>
Book Downloader
</Text>

</View>

)

}