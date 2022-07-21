import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "./Navigation/DrawerNavigator";
import { createSwitchNavigator,createAppContainer } from "react-navigation";
import * as firebase from "firebase";
import { firebaseConfig } from "./config";

import LoginScreen from "./screens/LoginScreen";
import LoadingScreen from "./screens/LoadingScreen";
import DashboardScreen from "./screens/DashboardScreen"

 if(!firebase.apps.legth){
  firebase.initializeApp(firebaseConfig);
 }
 else{firebase.app();}
 
 const AppSwitchNavigator =createSwitchNavigator({
  LoadingScreen: LoadingScreen,
  LoginScreen: LoginScreen,
  DashboardScreen: DashboardScreen
 })

 const AppNavigator =createAppContainer(AppSwitchNavigator);

export default function App() {
  return <AppNavigator/>
}
