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

const OnboardingStack = createNativeStackNavigator();

function OnboardingFlow() {
  return (
    <OnboardingStack.Navigator
      initialRouteName="Welcome"
      screenOptions={{ headerShown: true }}
    >
      <OnboardingStack.Screen name="Welcome" component={WelcomeScreen} />
      <OnboardingStack.Screen name="Enter Company" component={EnterCompanyScreen}/>
      <OnboardingStack.Screen name="Pick Voice" component={PickVoiceScreen}  />

    </OnboardingStack.Navigator>
  );
}

const SettingsStack = createNativeStackNavigator();

function SettingsFlow() {
  return (
    <SettingsStack.Navigator
      initialRouteName="Settings"
      screenOptions={{ headerShown: true }}
    >
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
      <SettingsStack.Screen name="Pick Voice" component={PickVoiceScreen} />
      <SettingsStack.Screen name="Set Company" component={SetCompanyScreen} />
      <SettingsStack.Screen name="Enter Company" component={EnterCompanyScreen}/>
    </SettingsStack.Navigator>
  );
}

function App() {
  const RootStack = createNativeStackNavigator();

  return (
    <NavigationContainer>
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
