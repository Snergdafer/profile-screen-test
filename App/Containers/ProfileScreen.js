// import { create } from 'apisauce'
import React, {Component} from 'react'
import {ScrollView, Text, View, Image, Pressable} from 'react-native'
import {connect} from 'react-redux'
import ProfileSplash from './ProfileSplash'
import ProfileAbout from './ProfileAbout'
import ProfileActivity from './ProfileActivity'
import Footer from './Footer'

// Styles
import styles from './Styles/ProfileScreenStyle'


// const api = create({ baseURL: 'https://raw.githubusercontent.com/xomly/profile-screen-test/master/api/users/4932.json'})

class ProfileScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      user: {
        "id":"4932",
        "name":"Nathan Garcia",
        "picture":"https://puzl-production.s3.amazonaws.com/files/uploads/files/001/684/988/original/john_martin.jpg",
        "isOnline":true,
        "position":"UI/UX Designer",
        "about":"Not so many years ago businesses used to grunt at using illustrations in their marketing materials. But today, the use and influence of illustrations is growing right along. An illustration, image, or picture that does not express a distinct idea is a poor illustration.",
        "skills":[
           "Business",
           "Management",
           "Creativity",
           "Webdesign",
           "PHP"
        ],
        "recentActivity":[
           {
              "icon":"calendar",
              "date":"28 February",
              "details":"Meeting with client"
           },
           {
              "icon":"briefcase",
              "date":"1 March",
              "details":"New incoming request"
           },
           {
              "icon":"calendar",
              "date":"2 March",
              "details":"Meeting with client"
           },
           {
              "icon":"check-circle",
              "date":"8 March",
              "details":"Marked 12 Tasks Done"
           },
           {
              "icon":"briefcase",
              "date":"13 March",
              "details":"New incoming request"
           },
           {
              "icon":"credit-card",
              "date":"16 March",
              "details":"Payout processed"
           },
           {
              "icon":"briefcase",
              "date":"20 March",
              "details":"Marked 12 Tasks Done"
           }
        ]
     }
    }
  }

  // I absolutely could not fix this JSON. I tried a couple of npm packages and some regex but I found this site: https://jsonformatter.curiousconcept.com/ which fixed it easily so
  // I've opted to save it directly to state to save time.

  // componentDidMount () {
    
  //   api.get().then((res) => {

  //     let response = JSON.stringify(res.data)
  //     console.log('first', response)
  //     let noNs = response.replace(/\\n/g,'')
  //     let nos = noNs.replace(/'/g,'')
  //     let noSpcs = nos.split(' ').join('')
  //     let formattedResponse = noSpcs.replace(/([a-zA-Z0-9-\/]+):([a-zA-Z0-9-\/]+)/g, "\"$1\":\"$2\"")
  //     console.log('second', formattedResponse)
  //     JSON.parse(formattedResponse)

  //     this.setState({ user: data }, console.log(this.state.user))
  //   })
    
  // }

  

  render () {
    return (
      <ScrollView style={styles.container} stickyHeaderIndices={[4]}>

        <ProfileSplash user={this.state.user}/>

        <ProfileAbout user={this.state.user}/>

        <ProfileActivity user={this.state.user}/>

        <Footer/>

      </ScrollView>
    )
  }
}

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen)
