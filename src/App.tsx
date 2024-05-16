import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import SendMoney from "./screens/SendMoney";
import AddRecipient from "./screens/AddRecipient";

export type RootStackParamList = {
  Home: undefined;
  SendMoney: undefined;
  AddRecipient: { receiverId: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <View
      style={{
        width: "100%",
        maxWidth: 450,
        marginHorizontal: "auto",
      }}
    >
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name='Home'
            component={Home}
            options={{
              title: "",
              headerShown: false,
            }}
          />
          <Stack.Screen
            name='SendMoney'
            component={SendMoney}
            options={{
              title: "Send Money",
            }}
          />
          <Stack.Screen
            name='AddRecipient'
            component={AddRecipient}
            options={{
              title: "Send Money",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
