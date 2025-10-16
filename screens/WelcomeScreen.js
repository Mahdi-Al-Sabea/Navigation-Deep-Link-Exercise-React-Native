import { View,Text,TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../styles";

function WelcomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the App</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Enter Company")}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
    </View>
  );
}

export default WelcomeScreen;
