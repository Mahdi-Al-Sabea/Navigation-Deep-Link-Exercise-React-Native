import { View,Text,StyleSheet,Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/MaterialIcons';

import { TouchableOpacity } from "react-native";

function MainScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
         <View style={styles.settings} >
        <TouchableOpacity  onPress={() => navigation.navigate('Settings')}>
            <Icon name="settings" size={50} color="#545458ff" />
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
    },
    settings: {
      position: 'absolute',
      top: 30,
      left: 30
    }
});

export default MainScreen;