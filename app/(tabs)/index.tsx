import { useLocalSearchParams, useRouter } from 'expo-router';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function Home() {
  const router = useRouter()
  const { username } = useLocalSearchParams();
  return ( <View style={styles.container}>
    <Text>Welcome {username}</Text>
  <Button   title='Go to Details' onPress={() => {
   router.push ({  pathname: '/details',  params: { id: 42 }, });
  }} /> </View> );}




  const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff', // White background for a fresh start
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    marginTop: 10,
    width: '80%',
  }
});