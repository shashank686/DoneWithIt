import React, { useState } from "react";
import { TextInput, View, StyleSheet, Button, Modal } from "react-native";

const GoalInputs = (props) => {
  const [enteredGoal, setEnteredGoal] = useState("");
  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const goalAddhandler = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal("");
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={style.inputContainer}>
        <TextInput
          placeholder="GO AHEAD"
          style={style.input}
          onChangeText={goalInputHandler} //  BUT ONCHANGE WILL NOT WORK LIKE THIS WE HAVE TO PAAS PARAMETERS FOR IT LIKE e.target.value
        />
        <View style={style.butt}>
          <View style={style.button}>
            <Button title="ADD" onPress={goalAddhandler} />
          </View>
          <View style={style.button}>
            <Button title="CANCEL" color="red" onPress={props.cancel} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const style = StyleSheet.create({
  inputContainer: {
    flexDirection: "column",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },

  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 2,
    padding: 10,
    marginBottom: 10,
  },

  butt: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
    width: "70%",
  },
  button: {
    padding: 10,
    width: "40%", // here 40% means its relative to its parent means it's 40% of 70% width that is of its parent view
    flex: 1,
    justifyContent: "space-around",
  },
});

export default GoalInputs;
