import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";

const GoalItems = (props) => {
  return (
    <View style={styles.goalContainer}>
      <View style={styles.text}>
        <Text>{props.title}</Text>
      </View>
      <View>
        <Button
          title="Delete"
          key={props.title}
          onPress={() => props.newAnswer(props.title)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  goalContainer: {
    padding: 10,
    width: "100%",
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },

  text: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
    width: "70%",
  },
});

export default GoalItems;
