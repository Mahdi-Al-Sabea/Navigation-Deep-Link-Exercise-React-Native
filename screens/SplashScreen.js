import { View,Text,StyleSheet } from "react-native";
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../styles";
import { colors } from "../styles";





function SplashScreen() {

    const navigation = useNavigation();

    useEffect(() => {
        const timer = setTimeout(() => {
            
            navigation.replace("OnboardingFlow");
        }, 3000);

        return () => clearTimeout(timer);
    }, []);






  return (
    <View style={styles.container}>
      <Text style={customStyles.title}>Splash</Text>
    </View>
  );
}


const customStyles = StyleSheet.create({
    title: {
        fontSize: 54,
        fontWeight: "bold",
        color: colors.textPrimary
    }
});

export default SplashScreen;