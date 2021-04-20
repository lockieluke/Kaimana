import {Ionicons} from "@expo/vector-icons";
import React from "react";
import {Platform, PlatformColor} from "react-native";

const TabIcon = (props: {name: string | any | unknown, selected: boolean}) => {

    return props.selected ? (
        <Ionicons name={props.name} size={27} color={Platform.OS === 'ios' ? PlatformColor("systemBlue") : "blue"}/>
    ) : (
        <Ionicons name={props.name} size={27}/>
    );
};

export default TabIcon;