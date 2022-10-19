import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Image,
  SafeAreaView,
  StyleSheet,
  ScrollView,
 
  Keyboard,
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
    <View>
      <Text style={style.txtBar}>HOME</Text>
    </View>
    <View>
    
      <ScrollView contentContainerStyle={{
        padding:20
      }}>
        <Text
          style={{
            fontSize: 20,
            color: 'black',
            fontWeight: 'bold',
            padding: 20,
          }}>
          List Product
        </Text>
        <View >
          {usersData.map((item,index)=>{
            return (
              <View key={index}>
                 <View/>
                 <View style={style.itemList}>
                  <Text>Tên: {item.name}</Text>
                  <Text>Giá: {item.price}</Text>
                  <Image source={item.img}></Image>
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
    backgroundColor:"#070707",
    padding:20
  },
  itemList:{
    paddingVertical:15,
    borderBottomColor:"#e2e2e2",
    borderBottomWidth:0.5
  },
  txtName:{},
  txtBar:{
    fontSize:20,
    fontWeight:"bold"
  },
})
