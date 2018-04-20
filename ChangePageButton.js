import React from "react";
import { View, Text, Button } from "react-native";
import { withRouter } from "react-router-native";

const ChangePageButton = ({ history }) => (
  <Button
    title="change page"
    onPress={() =>
      history.push("/products", {
        val1: "alksdfjalksdjfl",
        val2: 519032812
      })
    }
  />
);

export default withRouter(ChangePageButton);
