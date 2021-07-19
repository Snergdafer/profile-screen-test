import React, {Component} from 'react'
import {Text, View, Pressable} from 'react-native'
import {connect} from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome'
import styles from './Styles/ProfileActivityStyles'



class ProfileActivity extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showMore: false
        }
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

    handlePress() {
        this.setState({
            showMore: !this.state.showMore
        })
    }

    render() {
        return (
        <View style={styles.container}>
            <Text style={styles.title}>Recent Activity</Text>
            {this.props.user.recentActivity.map((elem, i, arr) => (
              <View key={i} style={styles.activity}>
                <Icon name={elem.icon} size={20}/>
                <Text> {elem.date}  {elem.details}</Text>
              </View>
            ))}
            <View style={styles.bottomBit}>
                <Pressable onPress={() => this.handlePress()}>
                <Text>ALL ACTIVITES</Text>
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
  
  export default connect(mapStateToProps, mapDispatchToProps)(ProfileActivity)