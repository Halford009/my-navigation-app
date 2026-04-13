import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
export default function Login() { const [username, setUsername] = useState('');
    const router = useRouter();
    return ( <View> <Text>Login Screen</Text> <TextInput placeholder="Enter Username" value={username} onChangeText={setUsername} /> <Button title="Login" onPress={() => {router.push({ pathname: "/(tabs)", params: { username } }); }} /> </View> );}