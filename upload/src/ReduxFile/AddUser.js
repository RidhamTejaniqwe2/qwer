import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React from 'react'
import UserInput from '../component/UserInput';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addData, updateData } from '../redux/Action/userAction';

const AddUser = ({navigation}) => {
    const [name ,setName]=useState('')
    const [address ,setAddress]=useState('')
    const data=useSelector(state=>state.user)
    const dispatch=useDispatch()


    const submitData=()=>{
      if(data.userList.some((item)=>item.name==name)){
        const newArray=data.userList.filter((item)=>item.name==name)
        console.log("new array details 88888",newArray.length)
        const record={
          id:newArray[0].id,
          name:name,
          address:address,
          recordItem:newArray[0].recordItem+1
        }
        dispatch(updateData(record))
        navigation.navigate("ReduxListScreen")
      }else{
        const record={
          id:data.userList.length+1,
          name:name,
          address:address,
          recordItem:1
        }
        dispatch(addData(record))
        navigation.navigate("ReduxListScreen")
      }
    }


    return (
        <View style={styles.container}>
          <UserInput
            placeholder="Enter Name"
            Width="80%"
            value={name}
            onChangeText={name => setName(name)}
          />
          <View style={{marginTop: 10}}>
            <UserInput
             value={address}
              placeholder="Enter Address"
              Width="80%"
             onChangeText={address => setAddress(address)}
            />
          </View>
          <View style={{marginTop: 15}}>
            <TouchableOpacity
              style={styles.buttonView}
            onPress={() => submitData()}
              >
              <Text style={styles.text}>Press</Text>
            </TouchableOpacity>
          </View>
          {/* <Text style={styles.text}>Login</Text> */}
        </View>
      );
    };
    
    export default AddUser;
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
      },
      text: {
        fontSize: 18,
        color: '#000',
        fontWeight: 'bold',
        alignSelf: 'center',
      },
      buttonView: {
        height: 50,
        width: '80%',
        borderWidth: 1,
        borderColor: '#000',
        justifyContent: 'center',
        alignSelf: 'center',
      },
    });
    