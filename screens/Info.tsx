import React, { Component } from "react";
import {
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
} from "react-native";

interface InfoState {
  infoText: string;
}

class Info extends Component<{}, InfoState> {
  state: InfoState;

  public constructor(props: {}) {
    super(props);

    this.state = {
      infoText: "",
    };
  }

  componentDidMount() {
    this.setState({
      infoText: require("../static/text.json").oceanInfo,
    });
  }

  render() {
    return (
      <SafeAreaView style={styles.view}>
        <ScrollView>
          <Text style={styles.heading}>Information about the ocean</Text>
          <Text style={styles.normalText}>{this.state.infoText}</Text>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  heading: {
    color: "black",
    fontWeight: "bold",
    fontSize: 20,
    marginTop: "10%",
    marginLeft: "10%",
  },
  view: {
    flex: 1,
    justifyContent: "flex-end",
  },
  normalText: {
    ...Platform.select({
      ios: {
        margin: "10% 5%",
      },
      android: {},
    }),
  },
});

export default Info;

