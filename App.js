import React from "react";
import Navigation1 from "./ReactNavigation/Navigation1";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "./ReactNavigation/TabNavigation";
import HeaderBar from "./ReactNavigation/HeaderBar";
import DrawerNavigation from "./ReactNavigation/DrawerNavigation";

/* Aktifkan untuk nested navigation */
import Home from "./ReactNavNested/screens/Home";
import Progate from "./ReactNavNested/screens/Progate";
import Contact from "./ReactNavNested/screens/Contact";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
/* End of nested navigation */

// Aktifkan untuk nested navigation
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      {/* <Navigation1 /> */}
      {/* <HeaderBar /> */}
      {/* <TabNavigation /> */}
      {/* <DrawerNavigation /> */}

      {/* Aktifkan untuk nested navigation */}
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Progate" component={Progate} />
        <Stack.Screen name="Contact" component={Contact} />
      </Stack.Navigator>
      {/* End of nested navigation */}

    </NavigationContainer>
  );
};

export default App;
