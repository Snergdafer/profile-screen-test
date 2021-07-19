import React, {Component} from 'react'
import {Text, View, Image, Pressable} from 'react-native'
import {connect} from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome'
import styles from './Styles/ProfileSplashStyles'



class ProfileSplash extends Component {
    constructor(props) {
        super(props)
        
    }


    render () {
        return (
            <View style={styles.container}>
              <Image source={{ 
                width: 115,
                height: 115,
                uri : 'https://picsum.photos/200',
                }} style={styles.image}/>
              <Text style={styles.title}>{this.props.user.name}</Text>
              <Text>{this.props.user.position}</Text>
              <View style={styles.bottomBit}>
                <Icon name='facebook' size={25} style={styles.icon}/>
                <Icon name='pinterest' size={25} style={styles.icon}/>
                <Icon name='twitter' size={25} style={styles.icon}/>
                <Icon name='instagram' size={25} style={styles.icon}/>
              </View>
            </View>
        )
    }
}




const mapStateToProps = state => {
    return {}
}
  
const mapDispatchToProps = dispatch => {
    return {}
}
  
export default connect(mapStateToProps, mapDispatchToProps)(ProfileSplash)