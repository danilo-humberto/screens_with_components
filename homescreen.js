import React from "react";
import { View, Text, StyleSheet, SafeAreaView, Pressable } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Escolha uma Interface</Text>

      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Template01")}
      >
        <Text style={styles.buttonText}>Ir para Interface 1</Text>
      </Pressable>

      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Template02")}
      >
        <Text style={styles.buttonText}>Ir para Interface 2</Text>
      </Pressable>

      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Template03")}
      >
        <Text style={styles.buttonText}>Ir para Interface 3</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F3F4F6",
    paddingHorizontal: 32,
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 40,
  },

  button: {
    width: "100%",
    backgroundColor: "#5A6CF3",
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
