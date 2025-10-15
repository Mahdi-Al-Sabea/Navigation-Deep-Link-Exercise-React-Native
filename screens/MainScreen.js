import { View,Text,StyleSheet,Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from "react-native";

function MainScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
         <View style={{ padding: 20 }}>
        <TouchableOpacity onPress={() => navigation.navigate('SettingsModal')}>
          <Text>Settings</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>Main Screen</Text>
        <Button title="Launch Voice Bot Screen" onPress={() => navigation.navigate("Voice Bot")} />
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

export default MainScreen;