import { View,Text,StyleSheet,Button } from "react-native";
import { useNavigation } from "@react-navigation/native";


function SettingsScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings Screen</Text>
      <Button title="Go to Set Company" onPress={() => navigation.navigate("Set Company")} />
        <Button title="Pick Voice" onPress={() => navigation.navigate("Pick Voice",{sourceScreen: "Settings"})} />
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

export default SettingsScreen;