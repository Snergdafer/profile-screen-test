#  ProfileScreenTest
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/)

* Standard compliant React Native App Utilizing [Ignite](https://github.com/infinitered/ignite)

## Download Repository

1. `fork` github repo into your account
2. `clone` your fork into desired path
3. `cd` into project directory


#### Steps for iOS Debugging (Recommended for Mac)

##### Install Cocoapods
1. To install cocoapods you will first want to have Brew and Ruby.
2. Use the commands to see if you have these already install
3. Install software as needed.
 
 | Software |  Check if installed | Install |
 | --- | --- | --- |
 |Homebrew | `$ brew -v`|  `$ /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"`|
|Ruby | `$ ruby -v` | `$ brew install ruby`|
|Cocoapods | `$ pod --version`| `$ sudo gem install cocoapods` |

##### Install Xcode 
1. Open App Store
2. Search for Xcode
3. Download the application.

##### Install Simulator
1. Open Xcode
2. Selected Xcode -> Preferences from Top Menu
3. Select Components Tab
4. Select simulator and install it.

#### Steps for Android Debugging (Recommended for Windows)
1. Install [Android Studio](https://developer.android.com/studio)

## How to Run App with VSCode

1. Open application with [VSCode](https://code.visualstudio.com/download)
  * If you have never run react-native through VSCode you will also need to download React Native Tools.  Open the Extension Tab ![image](./Docs/Images/Extension-Tab.png) in VSCode and type React Native Tools in the search bar.  Select React Native Tools and then press the install button on the page.
2. Select the Run Tab ![image](./Docs/Images/Run-Tab.png) on the far left
3. Open up the Terminal tab on the bottom panel
4. Install packages with [NPM](https://www.npmjs.com/get-npm) : `npm install` 
6. For iOS install CocoaPods:
  	`cd ios; pod install; cd ..`
5. With the Run tab ![image](./Docs/Images/Run-Tab.png) selected, go to the top left of the page and select the debug script. 
  * for iOS: Debug iOS
  * for Android: Debug Android
6. Run application by hitting the play button next to the debug script you just selected.


## Project
Copy this screen to the best of your abilities in the ProfileScreen.js file of the project.

![image](./Docs/Images/Profile-Screen.png)


#### Instructions

1. Create components as much as possible especially for any repeatable code.
2. Hit this endpoint: 
`https://raw.githubusercontent.com/xomly/profile-screen-test/master/api/users/4932.json` 
for all fake user data information.
3. These exact image/icons are not necessary, but an image/icon should be provided. [React-Native-Vector-Icons](https://github.com/oblador/react-native-vector-icons) library is already included in application.
4. Navigation is not required.  If you don't know how to navigate, create an alert that tells where it navigates to instead of preforming the navigation on press.
5. "Learn More" and "All Activities" should be buttons.  When the button is pressed show a View with extra text beneath the button.  When the button is pressed again hide that View.
6. Bonus Points for adding navigation/animations/redux etc.


## Submission

Once you have completed the project email us your forked github repo url.
