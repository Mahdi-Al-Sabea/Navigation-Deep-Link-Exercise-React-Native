import { View,Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from "react-native";
import {styles} from "../styles";

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
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Voice Bot")}>
        <Text style={styles.buttonText}>Launch Voice Bot Screen</Text>
      </TouchableOpacity>
    </View>
  );
}



export default MainScreen;