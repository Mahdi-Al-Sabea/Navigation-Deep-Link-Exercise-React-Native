import { View,Text,StyleSheet,Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

function PickVoiceScreen({route}) {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Pick Voice Screen</Text>
            {route.params?.sourceScreen=== 'Settings' ? null
            : ( <Button title="Dismiss" onPress={() => {navigation.reset({
                        index: 0,
                        routes: [{ name: 'Main' }], 
                    });

            }} />)}

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
