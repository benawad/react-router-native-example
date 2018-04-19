import React from "react";
import { View, Text, Button } from "react-native";

export default ({ history }) => (
  <View>
    <Text>Product 1</Text>
    <Text>Product 2</Text>
    <Button title="change page" onPress={() => history.push("/")} />
  </View>
);
