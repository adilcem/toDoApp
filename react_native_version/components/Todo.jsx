import React from "react";
import { View, Button, Text, StyleSheet, Switch } from "react-native";

const Todo = (props) => (
  <View style={styles.todoContainer}>
    <View style={styles.switch}>
      <Switch value={props.todo.checked} onValueChange={props.onToggle} />
    </View>
    <View style={styles.todoText}>
      <Text>{props.todo.text}</Text>
    </View>
    <View style={styles.deleteButton}>
      <Button onPress={props.onDelete} title="Delete" color="red" />
    </View>
  </View>
);

const styles = StyleSheet.create({
    todoContainer: {
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: 'space-around'
    },
    switch :{
      flexBasis: "10%"
    },
    todoText: {
      flexBasis: "50%"
    },
    deleteButton : {
      flexBasis: "20%"
    }
  });

export default Todo;
