import { StyleSheet } from "react-native";

export const colors = {
    background: "#f0f0f0",
    textPrimary: "#2D3748",
    primary: "#3182CE",
    textSecondary: "#FFFFFF"
};


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.background
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: colors.textPrimary,
         marginBottom: 5
    },
    subtitle:{
        fontSize: 15,
        color: colors.textPrimary,
        marginBottom: 5
    },
    settings: {
      position: 'absolute',
      top: '5%',
      left: '5%',
      elevation: 5, 
    },
    button: {
      padding: 10,
      borderRadius: 5,
      backgroundColor: colors.primary,
      alignItems: 'center',
      marginVertical: 5
    },
    buttonText: {
      color: colors.textSecondary,
      fontSize: 16,
      fontWeight: 'bold',
    }
});

