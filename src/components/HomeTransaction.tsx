import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const HomeTransaction = () => {
  return (
    <View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 10,
          marginTop: 40,
          marginBottom: 40,
        }}
      >
        <Text
          style={{
            fontSize: 24,
            fontWeight: 500,
            textAlign: "center",
            borderColor: "red",
            borderStyle: "solid",
            borderRadius: 4,
            color: "white",
          }}
        >
          Recent Transaction
        </Text>
        <Text
          style={{
            fontWeight: 500,
            fontSize: 20,
            color: "#006769",
          }}
        >
          View All
        </Text>
      </View>

      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 10,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            columnGap: 24,
          }}
        >
          <View
            style={{
              backgroundColor: "#222831",
              display: "flex",
              width: 60,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 15,
            }}
          >
            <AntDesign
              style={{
                paddingTop: 20,
                paddingBottom: 20,
                paddingLeft: 6,
                paddingRight: 6,
              }}
              name='medicinebox'
              size={28}
              color='white'
            />
          </View>
          <View style={{}}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                columnGap: 15,
              }}
            >
              <Text
                style={{
                  fontSize: 24,
                  color: "white",
                  fontWeight: 700,
                }}
              >
                Health
              </Text>
              <AntDesign name='arrowdown' size={24} color='red' />
            </View>
            <Text
              style={{
                color: "grey",
                fontSize: 20,
              }}
            >
              1 Transaction
            </Text>
          </View>
        </View>
        <View>
          <Text style={{ color: "grey", fontSize: 24, fontWeight: 600 }}>
            -$46.00
          </Text>
        </View>
      </View>
    </View>
  );
};

export default HomeTransaction;

const styles = StyleSheet.create({});
