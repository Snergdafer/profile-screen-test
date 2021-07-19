import React, {Component} from 'react'
import {Text, View, Pressable} from 'react-native'
import {connect} from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome'
import styles from './Styles/ProfileAboutStyles'


class ProfileAbout extends Component {
    constructor (props) {
        super(props)
        this.state = {
            showMore: false
        }
    }

    handlePress() {
        this.setState({
            showMore: !this.state.showMore
        })
    }

    toggleShowMore() {
        if(this.state.showMore) {
            return (
                <View>
                    <Text>So</Text>
                    <Text>Much</Text>
                    <Text>More</Text>
                    <Text>Text</Text>
                </View>
            )
        }
    }

    render() {
        return (
            <View style={styles.container}>
            <Text style={styles.title}>About</Text>
            <Text>{this.props.user.about}</Text>
            <View style={styles.skillsContainer}>
              {this.props.user.skills.map( (elem, i) => (
                <Pressable key={i}>
                  <Text style={styles.skills}>{this.props.user.skills[i]}</Text>
                </Pressable>
              ))}
            </View>
            <View style={styles.bottomBit}>
                <Pressable onPress={() => this.handlePress()}>
                <Text>LEARN MORE</Text>
                </Pressable>
            </View>
            {this.toggleShowMore()}
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
  
  export default connect(mapStateToProps, mapDispatchToProps)(ProfileAbout)