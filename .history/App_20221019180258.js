import { createStackNavigator } from 'react-navigation';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/stack';
import Home from './scr/component/Home';
import Product from './scr/component/ProductItem';
import ProductItem from './scr/component/ProductItem';



function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={'Home'} component={Home} />
        <Stack.Screen name={'ProductItem'} component={ProductItem} />
      
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;