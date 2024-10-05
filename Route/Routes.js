import React from "react";
import { View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import LandingPage from "../Screens/LandingPage";
import Home from "../Screens/Home";
import Register from "../Screens/Register";

const Routes = () => {

    const Stack=createStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen name="LandingPage" component={LandingPage}/>
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="Register" component={Register}/>
        </Stack.Navigator>
    )
}

export default Routes;