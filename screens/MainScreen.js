import { View,Text,BackHandler,Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from "react-native";
import {styles} from "../styles";
import { useEffect } from "react";

function MainScreen() {
  const navigation = useNavigation();


  useEffect(() => {
    const onBackPress = () => {
      Alert.alert(
        'Exit App',
        'Do you want to exit?',
        [
          {
            text: 'Cancel',
            onPress: () => {
              // Do nothing
            },
            style: 'cancel',
          },
          { text: 'YES', onPress: () => BackHandler.exitApp() },
        ],
        { cancelable: false }
      );
  
      return true;
    };
  
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      onBackPress
    );
  
    return () => backHandler.remove();
  }, []);
  

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