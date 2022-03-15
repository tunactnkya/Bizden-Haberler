import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Pagebir from "./src/Pages/pagebir";
import Pageİki from "./src/Pages/pageiki";


const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} >
                <Stack.Screen name="Page 1" component={Pagebir} />
                <Stack.Screen name="Page 2" component={Pageİki} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;