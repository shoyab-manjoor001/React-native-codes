import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View,TextInput } from "react-native";

export default function App() {
  const [name, setName] = useState("Shoyab");
  const [age, setAge] = useState(18);
  return (
    <View style={styles.container}>
      <View>
        <Text>Enter your name :</Text>
        <TextInput
          style={styles.input}
          multiline
          placeholder=" e.g. abc"
          onChangeText={(val) => setName(val)}
        />
        <Text>Enter your age</Text>
        <TextInput
          style={styles.input}
          placeholder=" 18"
          keyboardType="numeric"
          onChangeText={(val) => setAge(val)}
        />
      </View>
      <Text>
        Your name is {name} and age is {age}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  boldText: {
    color: "red",
    fontWeight: "bold",
    fontSize: 30,
  },
  header: {
    backgroundColor: "red",
    padding: 30,
  },
  body: {
    backgroundColor: "yellow",
    padding: 10,
  },
  input: {
    borderWidth: 2,
    borderColor: "black",
    padding: 1,
    margin: 2,
    width: 200,
  },
});
