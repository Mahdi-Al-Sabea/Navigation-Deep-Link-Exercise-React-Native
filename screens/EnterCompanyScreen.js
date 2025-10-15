import { View,Text,StyleSheet,Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
    
function EnterCompanyScreen() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Enter Company ID </Text>
            <Button title="Continue" onPress={() => navigation.navigate("Pick Voice")} />
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

export default EnterCompanyScreen;
