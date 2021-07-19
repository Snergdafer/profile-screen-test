import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        margin: 6,
        borderRadius: 5,
        padding: 10
    },
    bottomBit: {
        marginTop: 10,
        padding: 10,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopColor: 'black',
        borderTopWidth: StyleSheet.hairlineWidth
    },
    activity: {
        flex:1,
        flexDirection: 'row',
        marginBottom: 16
    },
    image : {
        borderRadius: 57,
        margin: 12
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 15
    },
    button: {
        color: 'red'
    },
    skillButton: {
        width: 25
    }
})