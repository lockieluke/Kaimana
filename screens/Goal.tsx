import React, { Component } from "react";
import {
  ImageBackground,
  Platform,
  StyleSheet,
  Text,
  View,
} from "react-native";
import * as ExpoFont from "expo-font";

interface GoalState {
  goalText: string;
  fontsLoaded: boolean;
}

class Goal extends Component<{}, GoalState> {
  state: GoalState;

  public constructor(props: {}) {
    super(props);

    this.state = {
      goalText: "",
      fontsLoaded: false,
    };
  }

  async loadFonts(): Promise<void> {
    await ExpoFont.loadAsync({
      CursiveFont: require("../assets/fonts/Allura-Regular.ttf"),
    });
    this.setState({
      fontsLoaded: true,
    });
  }

  componentDidMount() {
    this.loadFonts();
    this.setState({
      goalText: require("../static/text.json").goal,
    });
  }

  render() {
    return this.state.fontsLoaded ? (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ImageBackground
          source={{
            uri:
              "https://static.wixstatic.com/media/1377c15318784282b1066b61f761eab8.jpg/v1/fill/w_1405,h_903,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01/1377c15318784282b1066b61f761eab8.webp",
          }}
          style={{
            flex: 1,
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Text style={styles.goal}>{this.state.goalText}</Text>
        </ImageBackground>
      </View>
    ) : null;
  }
}

const styles = StyleSheet.create({
  goal: {
    textAlign: "center",
    fontFamily: "CursiveFont",
    fontWeight: "bold",
    fontSize: 50,
    color: "white",
    ...Platform.select({
      ios: {
        margin: "5% 0%",
      },
      android: {},
    }),
  },
});

export default Goal;

