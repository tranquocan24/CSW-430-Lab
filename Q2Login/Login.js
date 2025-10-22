import { View, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import styles from './Styles'
const LoginScreen = () => {
    return (
        <ScrollView showVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <Text style={styles.title}>
                    Login
                </Text>
                <TextInput style={styles.input} placeholder="Phone">
                </TextInput>
                <TextInput style={styles.input} placeholder="Password" secureTextEntry>
                </TextInput>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
};

export default LoginScreen;