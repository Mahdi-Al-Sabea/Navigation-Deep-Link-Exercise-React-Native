import { View,Text,StyleSheet } from "react-native";
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";







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
      <Text style={styles.title}>Splash Screen</Text>
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

export default SplashScreen;