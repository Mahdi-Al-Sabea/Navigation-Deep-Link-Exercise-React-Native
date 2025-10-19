import { View,Text,TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../styles";

function PickVoiceScreen({route}) {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Pick Voice Screen</Text>
            {route.params?.sourceScreen=== 'Settings' ? null
            : ( <TouchableOpacity style={styles.button} onPress={() => {navigation.reset({
                        index: 0,
                        routes: [{ name: 'Main' }], 
                    });

            }}><Text style={styles.buttonText}>Dismiss</Text></TouchableOpacity>)}

        </View>
    );
}

/* const styles = StyleSheet.create({
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
}); */

export default PickVoiceScreen;
