import { createStackNavigator } from 'react-navigation';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Home';
import Product from './Product';

const Stack = createNativeStackNavigator();

function AppNavigator(props) {
  return (
    <NavigationContainer theme={DarkTheme}>
      <Stack.Navigator
        initialRouteName="App"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={'App'} component={App} />
        <Stack.Screen name={'LoadingActivity'} component={LoadingActivity} />
      
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default AppNavigator;