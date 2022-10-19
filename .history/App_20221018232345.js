import React, {useState, useEffect} from 'react';
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
import Product from './scr/component/Product';
function App(props) {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);
  const [usersData,setUsersData]=useState([])
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

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);
  };
  return (
    <SafeAreaView>
    <View style={style.headerBar}>
      <TouchableOpacity onPress={''}>
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
              <View  key={index}>
                 <View style={style.icon}>
                  <Image style={style.icon} source={{uri: item.img}}></Image>
                 </View>
                 <View style={style.itemList} >
                  <Text style={style.txtName}>Tên: {item.name}</Text>
                  <Text>Giá: {item.price}</Text>
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
export default App;
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
    borderBottomWidth:0.5
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
  },
})
