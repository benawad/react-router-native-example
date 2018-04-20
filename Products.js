import React from "react";
import { View, Text, Button } from "react-native";

export default ({ history, location }) => (
  <View>
    <Text>Product 1</Text>
    <Text>Product 2</Text>
    <Text>{JSON.stringify(location.state)}</Text>
    <Button title="change page" onPress={() => history.push("/")} />
  </View>
);
