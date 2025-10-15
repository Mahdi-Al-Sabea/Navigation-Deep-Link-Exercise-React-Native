import { View,Text,StyleSheet,Button } from "react-native";

function PickVoiceScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Pick Voice Screen</Text>
            <Button title="Dismiss" onPress={() => {}} />
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

export default PickVoiceScreen;
