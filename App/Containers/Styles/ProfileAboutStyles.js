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
    skillsContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 10
    },
    skills: {
        alignSelf: 'flex-start',
        backgroundColor: 'rgb(163, 234, 255)',
        padding: 6,
        borderRadius: 5,
        margin: 2,
        color: 'blue'
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 15
    },
    skillButton: {
        width: 25
    }
})