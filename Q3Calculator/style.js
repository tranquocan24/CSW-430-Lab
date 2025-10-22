import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        justifyContent: 'flex-end',
        padding: 40,
    },
    display: {
        fontSize: 48,
        textAlign: 'center',
        marginBottom: 20,
        color: '#000',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },

    button: {
        backgroundColor: '#FFFFFF',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        height: 70,
        width: 70,
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowRadius: 2,
    },
    buttonText: {
        fontSize: 24,
        color: '#000',
    },

    buttonOperator: {
        backgroundColor: '#E0E0E0',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        height: 70,
        width: 70,
    },
    operatorText: {
        fontSize: 32,
        color: '#FF9500',
    },
    plusOperator: {
        backgroundColor: '#E0E0E0',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        height: 70,
        width: 90,
    },
    plusOperatorText: {
        fontSize: 28,
        color: '#FF9500',
        fontWeight: 'bold',
    },
    equalButton: {
        backgroundColor: '#FF9500',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        height: 70,
        width: 55,
    },
    equalText: {
        fontSize: 28,
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
    clearButton: {
        marginTop: 10,
        alignSelf: 'center',
        borderWidth: 1.5,
        borderColor: '#D0D0D0',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        height: 70,
        width: '100%',
        backgroundColor: '#E0E0E0',
    },
    clearText: {
        fontSize: 24,
        color: '#666',
        fontWeight: 'bold',
    },
});
