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
import AppNavigator from './scr/component/AppNavigator';
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
  
  return (
    <AppNavigator></AppNavigator>
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