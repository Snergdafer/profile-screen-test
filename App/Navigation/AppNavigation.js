import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import ProfileScreen from '../Containers/ProfileScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = createStackNavigator(
  {
    ProfileScreen: ProfileScreen,
  },
  {
    // Default config for all screens
    headerMode: 'screen',
    initialRouteName: 'ProfileScreen',
    navigationOptions: {
      headerStyle: styles.header,
    },
  },
)

export default createAppContainer(PrimaryNav)
