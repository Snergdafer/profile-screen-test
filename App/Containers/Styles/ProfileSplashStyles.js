import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 6,
        borderRadius: 5,
        padding: 10
    },
    bottomBit: {
        flex: 1,
        marginTop: 10,
        padding: 10,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopColor: 'black',
        borderTopWidth: StyleSheet.hairlineWidth,
        flexDirection: 'row'
    },
    icon: {
        marginLeft: 10,
        marginRight: 10
    },
    image : {
        borderRadius: 57,
        margin: 12
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 1
    },
    button: {
        color: 'red'
    },
    skillButton: {
        width: 25
    }
})