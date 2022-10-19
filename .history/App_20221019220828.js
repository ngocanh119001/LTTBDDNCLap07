import { createStackNavigator } from 'react-navigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './scr/component/Home';
import ProductItem from './scr/component/ProductItem';
import Product from './scr/component/Product';



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