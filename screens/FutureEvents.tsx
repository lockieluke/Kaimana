import React, {Component} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text} from "react-native";

interface FutureEventsState {
    futureEventText: string
}

class FutureEvents extends Component<{}, FutureEventsState> {

    state: FutureEventsState;

    public constructor(props: {}) {
        super(props);

        this.state = {
            futureEventText: ""
        };
    }

    componentDidMount() {
        this.setState({
            futureEventText: require('../static/text.json').futureEvents
        });
    }

    render() {
        return (
            <SafeAreaView style={styles.view}>
                <ScrollView>

                    <Text style={styles.heading} >Future Events</Text>
                    <Text style={styles.normalText}>{this.state.futureEventText}</Text>
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
        marginLeft: '10%'
    },
    view: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    normalText: {
        margin: '10% 5%'
    }
});

export default FutureEvents;