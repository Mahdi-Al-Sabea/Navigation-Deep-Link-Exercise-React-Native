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


const linking = {
  prefixes: ['example://'],
  config: {
    screens: {
      Main: 'main',
      Settings: {
        screens: {
          'Settings Main': 'settings',
          'Set Company': 'settings/set-company',
          'Pick Voice': 'settings/pick-voice',
          'Enter Company': 'settings/enter-company',
        },
      },
    },
  },
};



function App() {
  const RootStack = createNativeStackNavigator();




  const [initialState, setInitialState] = useState();
  const navigationRef = useRef();

  useEffect(() => {
    const restoreState = async () => {
      try {
        const url = await Linking.getInitialURL();
        
        if (url) {

          const state = buildInitialStateFromDeepLink(url);
          setInitialState(state);
        }
      } catch (error) {
        console.error('Error restoring state:', error);
      }
    };

    restoreState();
  }, []);

  const buildInitialStateFromDeepLink = (url) => {
    if (url.startsWith('example://settings/set-company')) {
  
      return {
        routes: [
          { 
            name: 'Main',
            state: {
              routes: [
                { name: 'MainScreen' } 
              ]
            }
          },
          { 
            name: 'Settings',
            state: {
              routes: [
                { name: 'Settings Main' },
                { name: 'Set Company' },
              ]
            }
          }
        ]
      };
    }
    return undefined;
  };

  return (
    <NavigationContainer linking={linking} initialState={initialState} ref={navigationRef}>
      <SafeAreaProvider>
        <RootStack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>

          <RootStack.Screen name="Splash" component={SplashScreen} />
          <RootStack.Screen name="OnboardingFlow" component={OnboardingFlow}/>
          <RootStack.Screen name="Main"  component={MainScreen}  />
          <RootStack.Screen name="Settings"  component={SettingsFlow} 
              options={{headerShown: false, presentation: 'modal', animation: 'slide_from_bottom'}}   
          />
          <RootStack.Screen name="Voice Bot" component={VoiceBotScreen} 
              options={
              { presentation: 'fullScreenModal',
              animation: 'slide_from_bottom',headerShown: true }}
          />

        </RootStack.Navigator>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

export default App;
