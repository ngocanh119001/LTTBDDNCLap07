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
import ProductItem from './ProductItem';
function Product(navigation) {
  const [id, setId] = useState();
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [img, setImg] = useState();
  const [productItems, setProductItems] = useState([]);

  const handleAddTask = () => {

    const url = 'https://63477c49db76843976ac27cc.mockapi.io/api/demo/products';
    const method = 'POST';
    fetch(url, {
      method,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: id,
        name: name,
        price: price,
        img: img,
      }),
    })
      .then(res => res.json())
      .then(resJson => {
        const currentUser = resJson.data;
        console.log(resJson.data);
        setProductItems([...productItems, {id, name, price, img}]);
        alert(resJson.data.img);
        // AsyncStorage.setItem('avatar', currentUser.avatar);
        // AsyncStorage.setItem('phone', currentUser.phone);
        // AsyncStorage.setItem('user_name', currentUser.user_name);
        // setAccount(resJson.data);
        // navigate('UITag');
      });
    setId('');
    setName('');
    setPrice('');
    setImg('');
  };
  const completeTask = index => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };
  return (
    <View style={{}}>
      <ScrollView>
        <Text
          style={{
            fontSize: 20,
            color: 'black',
            fontWeight: 'bold',
            padding: 20,
          }}>
          List Product
        </Text>
        
        <TextInput
          style={{
            paddingVertical: 15,
            paddingHorizontal: 15,
            backgroundColor: '#FFF',
            borderRadius: 60,
            borderColor: '#C0C0C0',
            borderWidth: 1,
            width: 250,
          }}
          placeholder={'Write a movie_id'}
          value={id}
          onChangeText={text => setId(text)}
        />
        <TextInput
          style={{
            paddingVertical: 15,
            paddingHorizontal: 15,
            backgroundColor: '#FFF',
            borderRadius: 60,
            borderColor: '#C0C0C0',
            borderWidth: 1,
            width: 250,
          }}
          placeholder={'Write a image movie'}
          value={img}
          onChangeText={text => setImg(text)}
        />
        <TextInput
          style={{
            paddingVertical: 15,
            paddingHorizontal: 15,
            backgroundColor: '#FFF',
            borderRadius: 60,
            borderColor: '#C0C0C0',
            borderWidth: 1,
            width: 250,
          }}
          placeholder={'Write a title movie'}
          value={name}
          onChangeText={text => setName(text)}
        />
         <TextInput
          style={{
            paddingVertical: 15,
            paddingHorizontal: 15,
            backgroundColor: '#FFF',
            borderRadius: 60,
            borderColor: '#C0C0C0',
            borderWidth: 1,
            width: 250,
          }}
          placeholder={'Write a title movie'}
          value={price}
          onChangeText={text => setPrice(text)}
        />
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
            
      </ScrollView>
      
    </View>
  );
}
export default Product;