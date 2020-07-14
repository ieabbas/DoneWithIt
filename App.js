import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableHighlight,
  Button,
} from "react-native";

//VIDEO PROGRESS: 57:36//

//SafeAreaView considers notch space when placing text/images/assets

/* 
  Image Passing:
    Passing an image through folders locally: <Image source={require("./assets/icon.png")} /> 
    Passing an image from the internet: <Image source={{uri: "https://i.picsum.photos/id/802/200/300.jpg?hmac=q6ItUSh1lSpO66uCg28JvcSG6TC_XXIOgCwifpzTD9M"}} />
*/

export default function App() {
  const handlePress = () => console.log("You pressed it, N I C E.");

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="orange" />
      <Text style={styles.blackText} onPress={handlePress}>
        F U D G E
      </Text>
      <Text style={styles.blackText}>M E</Text>
      <Text style={styles.blackText}>S O N</Text>
      <TouchableHighlight underlayColor="black">
        <Image
          source={{
            width: 200,
            height: 300,
            uri:
              "https://i.picsum.photos/id/802/200/300.jpg?hmac=q6ItUSh1lSpO66uCg28JvcSG6TC_XXIOgCwifpzTD9M",
          }}
        />
      </TouchableHighlight>
      <Button
        title="Button with options!"
        onPress={() =>
          // an onPress that provides an array of choices when pressed
          Alert.alert("My title", "My message", [
            {
              text: "Yes option",
              onPress: () => console.log("Yes button pressed."),
            },
            {
              text: "No option",
              onPress: () => console.log("No button pressed."),
            },
          ])
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },

  blackText: {
    color: "#fff",
  },
});
