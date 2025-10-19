import { View,Text,TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../styles";
    
function SetCompanyScreen() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Set Company ID </Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Enter Company",{sourceScreen:'Set Company'})}>
                <Text style={styles.buttonText}>Enter another Company ID</Text>
            </TouchableOpacity>
        </View>
    );
}



export default SetCompanyScreen;
