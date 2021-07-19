import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import {View, Pressable, Alert} from 'react-native'
import styles from './Styles/FooterStyles'

const Footer = () => {

    const handlePress = (button) => {
        Alert.alert(
            "Navigation",
            "You have navigated to " + button,
            [
                {
                    text: "Awesome",
                    onPress: () => console.log('Alert Dismissed')
                }
            ]
        )
    }
   
    return (
        <View style={styles.container}>
            <Pressable onPress={() => handlePress('Check Mark')}>
                <Icon name='check' size={25}/>
            </Pressable>
            <Pressable onPress={() => handlePress('Business Stuff')}>
                <Icon name='briefcase' size={25}/>
            </Pressable>
            <Pressable onPress={() => handlePress('Circle Place')}>
                <Icon name='circle' size={25}/>
            </Pressable>
            <Pressable onPress={() => handlePress('Star Time')}>
                <Icon name='star' size={25}/>
            </Pressable>
            <Pressable onPress={() => handlePress('Diamonds are Unbreakable')}>
                <Icon name='diamond' size={25}/>
            </Pressable>
        </View>
    )
}

export default Footer