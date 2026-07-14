import React from "react";

import {
createBottomTabNavigator
}
from "@react-navigation/bottom-tabs";


import SearchScreen from "../screens/SearchScreen";
import LibraryScreen from "../screens/LibraryScreen";


const Tab =
createBottomTabNavigator();


export default function AppNavigator(){

return (

<Tab.Navigator>


<Tab.Screen
name="Buscar"
component={SearchScreen}
/>


<Tab.Screen
name="Biblioteca"
component={LibraryScreen}
/>


</Tab.Navigator>

)

}