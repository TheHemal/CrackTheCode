import React, {Component} from "react";
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    TextInput,
} from 'react-native';


class HomePage extends Component {

    static navigationOptions = {
        header: null
    };

    render() { 
        return ( 
            <View style = {styles.container}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View>
                    <Text style={{fontWeight: 'bold', fontSize: 20, color: 'white'}}> CrackTheCode </Text>
                </View>
                <View style={{alignItems: 'center', paddingLeft: 8, marginBottom: 15, borderRadius: 5, borderWidth: 1, width: 60, height: 30, borderColor: 'white', flexDirection: 'row' }}>
                    <Text> Login </Text>
                </View>
                </View>
                <View style = {styles.questionCard}>
                    <Text style={styles.cardStyles}>Algorithms</Text>
                </View >
                <View style = {styles.questionCard}>
                    <Text style={styles.cardStyles}>Puzzles </Text>
                </View>
                <View style = {styles.questionCard}>
                    <Text style={styles.cardStyles}>Designs </Text>
                </View >
                <View style = {styles.questionCard}>
                    <Text style={styles.cardStyles}>Computer Science </Text>
                </View >


            </View>
         );
    }
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#36485f',
        paddingTop: 80,
        paddingLeft: 60,
        paddingRight: 60,
        alignSelf: 'stretch'
    },
    questionCard:  {
        marginBottom: 35,
        borderWidth: 1,
        height: 150,
        borderColor: 'white',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    cardStyles: {
        fontSize: 40,
        alignItems: 'center',
        textAlign: 'center'
    }
})
 
export default HomePage;