import React from "react";

import {
NavigationContainer
}
from "@react-navigation/native";


import {
PaperProvider
}
from "react-native-paper";


import {
theme
}
from "./theme/theme";


import AppNavigator
from "./navigation/AppNavigator";



export default function App(){


return (

<PaperProvider theme={theme}>

<NavigationContainer>

<AppNavigator/>

</NavigationContainer>

</PaperProvider>

);


}