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
                        routes: [{ name: 'MainFlow' }], 
                    });

            }}><Text style={styles.buttonText}>Dismiss</Text></TouchableOpacity>)}

        </View>
    );
}



export default PickVoiceScreen;
