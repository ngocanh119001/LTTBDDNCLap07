import React, {useState, useEffect} from 'react';
import { createStackNavigator } from 'react-navigation';
import {
  Text,
  View,
  Image,
  SafeAreaView,
  StyleSheet,
  ScrollView,
 
  Keyboard,
  TouchableOpacity,
} from 'react-native';

import Product from './Product';
function Home(props) {
  const [visible, setVisible] = useState(false);
  const [usersData,setUsersData]=useState([])
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [img, setImg] = useState("");
 //   const [list,setList]=useState([])

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
      setPrice("")
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
  const handleVisiable = () => {
    setVisible(!visible)
    setName(""),
    setPrice(""),
    setImg("")
  }
  return (
    <SafeAreaView>
    <View style={style.headerBar}>
      <TouchableOpacity >
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
                 </View>
                   <View >
                  <TouchableOpacity

                    onPress={() => handelDelete(item)}
                  >
                    <Text style={{ color: 'red' }}>Delete</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{ backgroundColor: 'yellow', marginTop: 30 }}
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