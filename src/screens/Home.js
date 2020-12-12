import React from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'

function Home ({ navigation }) {
    function onPressEnter () {
        navigation.navigate("Facility")
    }
    return (
        <View style={{justifyContent: 'center', alignItems: 'center', height: '100%'}}>
            <Text style={{marginBottom: 15}}>InepInn</Text>
            <TouchableOpacity style={styles.button} onPress={onPressEnter}>
                <Text style={styles.buttonText}>Enter</Text>
            </TouchableOpacity>
        </View> 
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'blue', 
        padding: 8, 
        width: 70, 
        borderRadius: 5
    },
    buttonText: {
        color: 'white', 
        textAlign: 'center'
    }
})

export default Home