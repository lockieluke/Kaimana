import React, { useState } from "react";
import TabNavigator from "react-native-tab-navigator";
import { StatusBar, View } from "react-native";
import Goal from "./screens/Goal";
import TabIcon from "./sharedComponents/tabIcons";
import AboutUsScreen from "./screens/AboutUsScreen";
import FutureEvents from "./screens/FutureEvents";
import * as ScreenOrientation from "expo-screen-orientation";
import { OrientationLock } from "expo-screen-orientation";
import Info from "./screens/Info";

export default function App() {
  ScreenOrientation.lockAsync(OrientationLock.PORTRAIT);

  const [selectedScreen, setSelectedScreen] = useState("Goal");

  return (
    <View style={{ flex: 1 }}>
      <TabNavigator>
        <TabNavigator.Item
          selected={selectedScreen === "Goal"}
          title="Goal"
          renderIcon={() => <TabIcon name={"water"} selected={false} />}
          renderSelectedIcon={() => <TabIcon name={"water"} selected={true} />}
          onPress={() => setSelectedScreen("Goal")}
        >
          <Goal />
        </TabNavigator.Item>

        <TabNavigator.Item
          selected={selectedScreen === "Info"}
          title="Info"
          renderIcon={() => (
            <TabIcon name={"information-circle"} selected={false} />
          )}
          renderSelectedIcon={() => (
            <TabIcon name={"information-circle"} selected={true} />
          )}
          onPress={() => setSelectedScreen("Info")}
        >
          <Info />
        </TabNavigator.Item>

        <TabNavigator.Item
          selected={selectedScreen === "FutureEvents"}
          title="Events"
          renderIcon={() => <TabIcon name={"flag"} selected={false} />}
          renderSelectedIcon={() => <TabIcon name={"flag"} selected={true} />}
          onPress={() => setSelectedScreen("FutureEvents")}
        >
          <FutureEvents />
        </TabNavigator.Item>

        <TabNavigator.Item
          selected={selectedScreen === "AboutUs"}
          title="About Us"
          renderIcon={() => <TabIcon name={"people"} selected={false} />}
          renderSelectedIcon={() => <TabIcon name={"people"} selected={true} />}
          onPress={() => setSelectedScreen("AboutUs")}
        >
          <AboutUsScreen />
        </TabNavigator.Item>
      </TabNavigator>
      <StatusBar barStyle={"default"} backgroundColor={"white"} />
    </View>
  );
}

