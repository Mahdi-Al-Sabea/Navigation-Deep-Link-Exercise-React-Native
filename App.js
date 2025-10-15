import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './screens/SplashScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import EnterCompanyScreen from './screens/EnterCompanyScreen';
import PickVoiceScreen from './screens/PickVoiceScreen';
import MainScreen from './screens/MainScreen';
import VoiceBotScreen from './screens/VoiceBotScreen';
import { useState } from 'react';
import { Button } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Color } from 'react-native/types_generated/Libraries/Animated/AnimatedExports';

const OnboardingStack = createNativeStackNavigator();

function OnboardingFlow() {
  return (
    <OnboardingStack.Navigator
      initialRouteName="Welcome"
      screenOptions={{ headerShown: true }}
    >
      <OnboardingStack.Screen name="Welcome" component={WelcomeScreen} />
      <OnboardingStack.Screen
        name="Enter Company"
        component={EnterCompanyScreen}
      />
      <OnboardingStack.Screen name="Pick Voice" component={PickVoiceScreen}  />
    </OnboardingStack.Navigator>
  );
}

function App() {
  const RootStack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <RootStack.Navigator
          initialRouteName="Splash"
          screenOptions={{ headerShown: false }}
        >
          <RootStack.Screen name="Splash" component={SplashScreen} />

            <RootStack.Screen
              name="OnboardingFlow"
              component={OnboardingFlow}
            />
            <RootStack.Screen name="Voice Bot" component={VoiceBotScreen} options={
              { presentation: 'fullScreenModal',
            animation: 'slide_from_bottom'}
            }/>


          <RootStack.Screen name="Main"  component={MainScreen} options={{headerShown: false }} />
          
        </RootStack.Navigator>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

export default App;
