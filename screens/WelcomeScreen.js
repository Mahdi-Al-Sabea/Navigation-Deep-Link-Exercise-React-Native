import { View,Text,TouchableOpacity,BackHandler,Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../styles";
import { useEffect } from "react";

function WelcomeScreen() {
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
      <Text style={styles.title}>Welcome to the App</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Enter Company")}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
    </View>
  );
}

export default WelcomeScreen;
