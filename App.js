

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './screens/SplashScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import EnterCompanyScreen from './screens/EnterCompanyScreen';
import PickVoiceScreen from './screens/PickVoiceScreen';
import { useState } from 'react';
const OnboardingStack = createNativeStackNavigator();


function OnboardingFlow() {
    return (
        <OnboardingStack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
            <OnboardingStack.Screen name="Splash" component={SplashScreen}  />
            <OnboardingStack.Screen name="Welcome" component={WelcomeScreen} />
            <OnboardingStack.Screen name="Enter Company" component={EnterCompanyScreen} />
            <OnboardingStack.Screen name="Pick Voice" component={PickVoiceScreen} />
        </OnboardingStack.Navigator>
    );
}



function App() {

  const RootStack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <RootStack.Navigator initialRouteName="OnboardingFlow" screenOptions={{ headerShown: false }}>

            <RootStack.Screen name="OnboardingFlow" component={OnboardingFlow} />
            

        </RootStack.Navigator>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}



export default App;
