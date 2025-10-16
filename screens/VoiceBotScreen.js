import { View,Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../styles";

function VoiceBotScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Voice Bot Screen</Text>
    </View>
  );
}


export default VoiceBotScreen;