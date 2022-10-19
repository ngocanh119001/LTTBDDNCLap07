import React, {useState, useEffect} from 'react';
import { createStackNavigator } from 'react-navigation';
import {
  Text,
  View,
  Image,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Modal,
  TextInput,
  Button,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';

import Product from './Product';
function Home({navigation}) {
  const [visible, setVisible] = useState(false);
  const [usersData,setUsersData]=useState([])
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [id, setId] = useState("")
  const [img, setImg] = useState("");
   const [visible1, setVisible1] = useState(false);
 //   const [list,setList]=useState([])
   const [count, setCount] = useState(0);
   

 useEffect(()=>{
    getData();
  },[])
  const getData=()=>{
    fetch('https://63477c49db76843976ac27cc.mockapi.io/api/demo/products',{
       method: "GET",
       headers: {
        "Content-Type":"application/json"
       }
    })
    .then(response=>response.json())
    .then(data=>setUsersData(data));
  }
  const getPost = () => {
    fetch('https://63477c49db76843976ac27cc.mockapi.io/api/demo/products')
      .then((res) => res.json())
      .then(result => {
        console.log(result);
        setUsersData(result);
      }).catch(e => console.log(e))
  }
  const handelDelete = (item) => {
    axios({
      url: "https://63477c49db76843976ac27cc.mockapi.io/api/demo/products/" + item.id,
      method: "delete"
    }).then((res) => {
      getPost();
    })

  }
  const handleUpdate = () => {
    axios.put("https://63477c49db76843976ac27cc.mockapi.io/api/demo/products/" + id, {
      name: name,
      price: price,
      img: img,
    }).then((res) => {
      console.log(id)
      setVisible(!visible)
      setName(""),
      setPrice(""),
      setImg("")
      getPost();
    })
  }
  const handleModelUpdate = (item) => {
    setVisible(true)
    setName(item.name)
    setPrice(item.price)
    setImg(item.img)
    setId(item.id)
  }
 
  const handleVisible = () => {
    setVisible(!visible)
    setName(""),
    setPrice(""),
    setImg("")
  }

  return (
    <SafeAreaView style={{ marginTop: 5, flex: 1 }}>
    <View style={style.headerBar}>
      <TouchableOpacity onPress={()=> navigation.navigate('Product')}>
          <Text style={style.txtBar}>Add</Text>
        </TouchableOpacity>
    </View>
    <View style={{}}>
      <ScrollView contentContainerStyle={{
        padding:10
      }}>
        <Text
          style={{
            fontSize: 20,
            color: 'black',
            fontWeight: 'bold',
          }}>
          List Product
        </Text>
        <View >
          {usersData.map((item,index)=>{
            return (
              <View style={{flexDirection:'row', padding:15}} key={index}>
                 <View>
                  <Image style={style.icon} source={{uri: item.img}}></Image>
                 </View>
                 <View style={style.itemList}>
                  <Text style={style.txtName}>Tên: {item.name}</Text>
                  <Text>Giá: {item.price}$</Text>
                  <View style={{flexDirection:'row'}} >
                   <Button title='-' onPress={()=>setCount(count-1)}></Button>
                   {}
                    <Text>{count}</Text>
                    {}
                   <Button title='+' onPress={()=>setCount(count+1)}></Button>
                  </View>
                  
                 </View>
                   <View style={{padding:20}}>
                  <TouchableOpacity

                    onPress={() => handelDelete(item)}
                  >
                    <Text style={{ color: 'red' }}>Delete</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{marginTop: 30 }}
                    onPress={() => handleModelUpdate(item)}
                  >
                    <Text style={{ color: 'blue' }}>Update</Text>
                  </TouchableOpacity>

                </View>
              </View>
            )
          })}
        </View>
      </ScrollView>
      
      </View>
       <Modal
        visible={visible} style={{padding:20}}
      >
        <TextInput
          label="Title"
          value={name}
          onChangeText={(text) => setName(text)}
          mode="outlined"
          style={{ borderWidth:1, marginTop:20, }}
        />
        <TextInput
          label="Title"
          value={price}
          onChangeText={(text) => setPrice(text)}
          mode="outlined"
          style={{ borderWidth: 1, marginTop:20 }}
        />
        <TextInput
          label="Title"
          value={img}
          onChangeText={(text) => setImg(text)}
          mode="outlined"
          style={{ borderWidth: 1, marginTop:20 }}
        />
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <TouchableOpacity
          
          onPress={() => handleUpdate()}
        >
          <Text style={{fontSize:20, height: 50 ,width:100, fontWeight:'bold', color:'red', marginTop:20}}>save</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{height: 50,width:100 }}
          onPress={() => handleVisible()}
        >
          <Text style={{fontSize:20, height: 50 ,width:100, fontWeight:'bold', color:'blue', marginTop:20}}>cancle</Text>
        </TouchableOpacity>
        </View>
      </Modal> 
      
       
    </SafeAreaView>
  );
}
export default Home;
const style =StyleSheet.create({
  container:{

  },
  headerBar:{
    backgroundColor:"#e2e2e2",
    padding:20
  },
  itemList:{
    paddingVertical:15,
    borderBottomColor:"#e2e2e2",
    borderBottomWidth:0.5,
    paddingLeft:15,
  },
  txtName:{
    fontSize:20,
    fontWeight:"bold"
  },
  txtBar:{
    fontSize:20,
    fontWeight:"bold"
  },
  icon:{
    width:100,
    height:100,
    borderRadius:100,
    padding:20,
  },
})