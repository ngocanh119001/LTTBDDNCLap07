import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  ScrollView,
  FlatList,
  BackHandler,
  Dimensions,
  Modal,
  KeyboardAvoidingView,
  Keyboard,
} from 'react-native';
import Product from './scr/component/Product';
function App(props) {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);
  const [usersData,setUsersData]=useState([])
  const getData=()=>{
    fetch('https://63477c49db76843976ac27cc.mockapi.io/api/demo/products')
    .then(response=>response.json())
    .then(data=>setUsersData(data));
  }
  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);
  };
  const completeTask = index => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };
  return (
    <View>
      <ScrollView>
        <Text
          style={{
            fontSize: 20,
            color: 'black',
            fontWeight: 'bold',
            padding: 20,
          }}>
          Ánh nè
        </Text>
        <View >
          {usersData.map(_product=>
          <View style={{flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center'}}>
          <Text key={_product.id}>{_product.name}</Text>
          <Text>{_product.price}</Text>
          </View>
          )}
        </View>
      </ScrollView>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{
          position: 'absolute',
          top: 550,
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}>
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View
            style={{
              width: 60,
              height: 60,
              backgroundColor: '#FFF',
              borderRadius: 60,
              justifyContent: 'center',
              alignItems: 'center',
              borderColor: '#C0C0C0',
              borderWidth: 1,
            }}>
            <Text style={{}}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}
export default App;
