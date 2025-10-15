import { View,Text,StyleSheet,Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import 

function SettingsScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings Screen</Text>
    
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f0f0f0"
    },
    title: {
        fontSize: 24,
        fontWeight: "bold"
    }
});

export default VoiceBotScreen;