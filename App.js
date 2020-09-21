import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
  Header,
} from "react-native";

import GoalItems from "./components/GoalItems";
import GoalInputs from "./components/GoalInputs";

export default function App() {
  const [courseGoal, setCourseGoal] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);
  const addGoalHandler = (goalTitle) => {
    setCourseGoal((currentGoal) => [
      ...currentGoal,
      { id: Math.random().toString(), value: goalTitle },
    ]);
    setIsAddMode(false);
  };

  const newAnswer = (data) => {
    console.log(data);
    setCourseGoal(data);
  };

  const cancelHandler = () => {
    setIsAddMode(false);
  };

  const idHandler = (data) => {
    const course = courseGoal.filter((element) => {
      //console.log(element);
      //console.log(data);
      return element.value !== data;
    });
    //course.forEach((e) => console.log("1->", e));

    setCourseGoal(course);
  };

  return (
    <View style={style.screen}>
      <Button title="Add Items" onPress={() => setIsAddMode(true)} />
      <GoalInputs
        onAddGoal={addGoalHandler}
        visible={isAddMode}
        cancel={cancelHandler}
      />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoal}
        renderItem={(itemData) => (
          <GoalItems title={itemData.item.value} newAnswer={idHandler} />
        )}
      />
    </View>
  );
}

const style = StyleSheet.create({
  screen: {
    paddingLeft: 40,
    padding: 40,
  },
});
