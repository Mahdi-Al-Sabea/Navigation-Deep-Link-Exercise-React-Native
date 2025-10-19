import { View,Text,TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../styles";
function EnterCompanyScreen({route}) {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Enter Company ID </Text>

            {route.params?.sourceScreen === 'Set Company' ? <Text style={styles.subtitle}>  </Text> 
            :<TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Pick Voice")} >
                <Text style={styles.buttonText}>Continue</Text>
            </TouchableOpacity>}
            
        </View>
    );
}


export default EnterCompanyScreen;
