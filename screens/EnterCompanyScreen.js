import { View,Text,TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../styles";
function EnterCompanyScreen({route}) {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Enter Company ID </Text>

            {route.params?.sourceScreen === 'Welcome' ? (<TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Pick Voice")} >
                <Text style={styles.buttonText}>Continue</Text>
            </TouchableOpacity>)
            :(<Text style={styles.subtitle}>  </Text>)}

          
            
        </View>
    );
}


export default EnterCompanyScreen;
