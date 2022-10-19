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
} from 'react-native';
function ProductItem(props) {
  const {id, name, price, img} = props.text;
  return (
    <View
      style={{
        padding: 20,
        flexDirection: 'row',
        height: 150,
        width: '100%',
        borderRadius: 40,
        marginVertical: 10,
        backgroundColor: '#309CE4',
      }}>
      <View
        style={{
          flexDirection: 'column',
        }}>
        <Text style={{color: 'white', fontSize: 20}}>Id: {id}</Text>
        <Text style={{color: 'white'}}>Name: {name}</Text>
         <Text style={{color: 'white'}}>Price: {price}</Text>
      </View>
      <View style={{flexDirection: 'column', paddingLeft: 10}}>
        <Image
          style={{height: 120, width: 120}}
          source={{
            uri: img,
          }}></Image>
      </View>
      <View
        style={{
          alignItems: 'flex-end',
          position: 'absolute',
          paddingLeft: 250,
          padding: 10,
        }}>
        <View
          style={{
            backgroundColor: 'red',
            height: 60,
            width: 100,
            borderRadius: 20,
            alignItems: 'flex-end',
          }}>
          <Text style={{padding: 20}}>Remove</Text>
        </View>
      </View>
    </View>
  );
}

export default ProductItem;