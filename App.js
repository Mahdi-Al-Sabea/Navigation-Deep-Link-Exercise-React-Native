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
import SettingsScreen from './screens/SettingsScreen';
import SetCompanyScreen from './screens/SetCompanyScreen';
import { useState,useRef,useEffect } from 'react';
import { Linking } from 'react-native';

const OnboardingStack = createNativeStackNavigator();

function OnboardingFlow() {
  return (
    <OnboardingStack.Navigator
      initialRouteName="Welcome"
      screenOptions={{ headerShown: true,headerTitle:"Onboarding" }}
    >
      <OnboardingStack.Screen name="Welcome" component={WelcomeScreen}  />
      <OnboardingStack.Screen name="Enter Company" component={EnterCompanyScreen}/>
      <OnboardingStack.Screen name="Pick Voice" component={PickVoiceScreen}  />

    </OnboardingStack.Navigator>
  );
}

const SettingsStack = createNativeStackNavigator();

function SettingsFlow() {
  return (
    <SettingsStack.Navigator
      initialRouteName="Settings Main"
      screenOptions={{ headerShown: true }}
    >
      <SettingsStack.Screen name="Settings Main" component={SettingsScreen} />
      <SettingsStack.Screen name="Pick Voice" component={PickVoiceScreen} />
      <SettingsStack.Screen name="Set Company" component={SetCompanyScreen} />
      <SettingsStack.Screen name="Enter Company" component={EnterCompanyScreen}/>
    </SettingsStack.Navigator>
  );
}


const MainStack = createNativeStackNavigator();

function MainFlow() {
  return (
    <MainStack.Navigator
      initialRouteName="Main"
      screenOptions={{ headerShown: false }}
    >
      <MainStack.Screen name="Main" component={MainScreen} />
      <MainStack.Screen name="Settings"  component={SettingsFlow} 
          options={{headerShown: false, presentation: 'modal', animation: 'slide_from_bottom'}}   
      />
      <MainStack.Screen name="Voice Bot" component={VoiceBotScreen} 
          options={
          { presentation: 'fullScreenModal',
          animation: 'slide_from_bottom',headerShown: true }}
      />


    </MainStack.Navigator>
  );
}




function App() {
  const RootStack = createNativeStackNavigator();



const linking = {
  prefixes: ['example://'],
  config: {
    screens: {
      // RootStack level
      Splash: 'splash',

      OnboardingFlow: {
        path: 'onboarding',
        screens: {
          Welcome: 'welcome',
          'Enter Company': 'enter-company',
          'Pick Voice': 'pick-voice',
        },
      },

      MainFlow: {
        path: 'main',
        initialRouteName: 'Main',
        screens: {
          Main: '',
          'Voice Bot': 'voice-bot',
          Settings: {
            path: 'settings',
            initialRouteName: 'Settings Main',
            screens: {
              'Settings Main': '',
              'Set Company': 'set-company',
              'Pick Voice': 'pick-voice',
              'Enter Company': 'enter-company',
            },
          },
        },
      },
    },
  },
};


  return (
    <NavigationContainer linking={linking} >
      <SafeAreaProvider>
        <RootStack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>

          <RootStack.Screen name="Splash" component={SplashScreen} />
          <RootStack.Screen name="OnboardingFlow" component={OnboardingFlow}/>
          <RootStack.Screen name="MainFlow"  component={MainFlow}  />

        </RootStack.Navigator>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

export default App;
