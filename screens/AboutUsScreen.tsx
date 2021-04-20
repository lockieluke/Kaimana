import React, {Component} from 'react';
import {Linking, Platform, PlatformColor, SafeAreaView, ScrollView, StyleSheet, Text, View} from "react-native";

interface AboutUsScreenState {
    aboutUsText: string,
    ourMissionText: string
}

class AboutUsScreen extends Component<{}, AboutUsScreenState> {

    state: AboutUsScreenState;

    public constructor(props: {}) {
        super(props);

        this.state = {
          ourMissionText: "",
          aboutUsText: ""
        };
    }

    componentDidMount() {
        this.setState({
            aboutUsText: require('../static/text.json').aboutUs,
            ourMissionText: require('../static/text.json').ourMission
        });
    }

    render() {
        return (
            <SafeAreaView style={styles.view}>
                <ScrollView>

                    <Text style={styles.heading} >Our Mission</Text>
                    <Text style={styles.normalText}>{this.state.ourMissionText}</Text>

                    <Text style={styles.heading} >About Us</Text>
                    <Text style={styles.normalText}>{this.state.aboutUsText}</Text>

                    <Text style={styles.heading} >Contact Us!</Text>
                    <Text style={styles.linkText} onPress={async () => {
                        await Linking.openURL('https://instagram.com/oceankaimana?igshid=h3t6tqomnbtt')
                    }} >Instagram</Text>
                    <Text style={styles.linkText} onPress={async () => {
                        await Linking.openURL('https://leet8020.wixsite.com/proteccocean')
                    }} >Our Website</Text>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    heading: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: '10%',
        marginLeft: '10%',
        padding: '0% 0%'
    },
    view: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    normalText: {
        margin: '10% 2%'
    },
    linkText: {
        color: Platform.OS === 'ios' ? PlatformColor('systemBlue') : 'blue',
        margin: '10% 0%'
    }
});

export default AboutUsScreen;