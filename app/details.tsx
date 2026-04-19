import { useLocalSearchParams, useRouter } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Details() { const { id } =
useLocalSearchParams();
const router = useRouter();
return (
<View> <Text>Item ID: {id}</Text> <Button title="Go Back"
onPress={() => router.back()} /> </View> );}