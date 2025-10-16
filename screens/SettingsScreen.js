import { View,Text,TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../styles";


function SettingsScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings Screen</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Set Company")}>
        <Text style={styles.buttonText}>Go to Set Company</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Pick Voice", { sourceScreen: "Settings" })}>
        <Text style={styles.buttonText}>Pick Voice</Text>
      </TouchableOpacity>
    </View>
  );
}


export default SettingsScreen;