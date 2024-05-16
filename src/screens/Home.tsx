import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  Entypo,
  AntDesign,
  MaterialCommunityIcons,
  Ionicons,
  FontAwesome,
  MaterialIcons,
} from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeTransaction from "../components/HomeTransaction";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.balanceContainer}>
        <Text style={{ color: "#B5C0D0", fontSize: 16 }}>Your Balance</Text>
        <Text
          style={{
            color: "#B5C0D0",
            fontSize: 40,
            textTransform: "uppercase",
            fontWeight: 700,
          }}
        >
          usd 5860.4
        </Text>
      </View>

      <View style={styles.mainOptionContainer}>
        <View style={styles.singleOptionContainer}>
          <View style={styles.optionContainer}>
            <MaterialIcons
              style={{
                transform: [{ rotate: "-45deg" }],
                padding: 12,
              }}
              name='send'
              size={30}
              color='white'
            />
          </View>
          <Text
            style={{
              color: "white",
              textAlign: "center",
              fontSize: 20,
              fontWeight: 500,
            }}
          >
            Send
          </Text>
        </View>

        <View style={styles.singleOptionContainer}>
          <View style={styles.optionContainer1}>
            <AntDesign
              style={{
                padding: 12,
              }}
              name='creditcard'
              size={26}
              color='white'
            />
          </View>
          <Text
            style={{
              color: "white",
              textAlign: "center",
              fontSize: 20,
              fontWeight: 500,
            }}
          >
            Pay
          </Text>
        </View>

        <View style={styles.singleOptionContainer}>
          <View style={styles.optionContainer2}>
            <MaterialCommunityIcons
              style={{
                padding: 12,
              }}
              name='billboard'
              size={26}
              color='white'
            />
          </View>
          <Text
            style={{
              color: "white",
              textAlign: "center",
              fontSize: 20,
              fontWeight: 500,
            }}
          >
            Bill
          </Text>
        </View>

        <View style={styles.singleOptionContainer}>
          <View style={styles.optionContainer3}>
            <Entypo
              style={{
                padding: 12,
              }}
              name='menu'
              size={26}
              color='white'
            />
          </View>
          <Text
            style={{
              color: "white",
              textAlign: "center",
              fontSize: 20,
              fontWeight: 500,
            }}
          >
            More
          </Text>
        </View>
      </View>

      <HomeTransaction />

      <View style={styles.navigationContainer}>
        <Entypo name='home' size={26} color='skyblue' />
        <AntDesign name='creditcard' size={26} color='gray' />

        <View style={{}}>
          <View
            style={{
              ...styles.scanContainer,
              borderWidth: 12,
              borderColor: "black",
            }}
          >
            <MaterialCommunityIcons name='line-scan' size={26} color='white' />
          </View>
        </View>

        <Ionicons name='stats-chart-outline' size={26} color='gray' />
        <FontAwesome name='user' size={26} color='gray' />
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  mainOptionContainer: {
    display: "flex",
    alignItems: "center",
    paddingTop: 20,
    flexDirection: "row",
    columnGap: 10,
    justifyContent: "space-around",
  },
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  navigationContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingBottom: 30,
    backgroundColor: "#31363F",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    borderRadius: 20,
    borderBottomStartRadius: 0,
    borderBottomEndRadius: 0,
  },
  scanContainer: {
    backgroundColor: "blue",
    marginTop: -40,
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: "center",
    alignItems: "center",
  },
  balanceContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 50,
  },
  optionContainer: {
    backgroundColor: "#FFC374",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },
  optionContainer1: {
    backgroundColor: "#640D6B",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },
  optionContainer2: {
    backgroundColor: "#7469B6",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },
  optionContainer3: {
    backgroundColor: "#40A578",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },
  singleOptionContainer: {
    padding: 15,
    borderRadius: 15,
    backgroundColor: "#222831",
    display: "flex",
    alignItems: "center",
    height: "auto",
    rowGap: 25,
    justifyContent: "center",
    margin: "auto",
  },
});
