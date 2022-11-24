import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { useEffect } from 'react';
import UserInput from '../component/UserInput';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { updateData } from '../redux/Action/userAction';

const UpdateRecordScreen = (props) => {
  const {userData}=props.route.params;
  const [name ,setName]=useState(userData.name)
    const [address ,setAddress]=useState(userData.address)
    const data=useSelector(state=>state.user)
    const dispatch=useDispatch()


    const submitData=()=>{
      const record={
        id:userData.id,
        name:name,
        address:address,
        recordItem:userData.recordItem
      }
      dispatch(updateData(record))
       props.navigation.navigate("ReduxListScreen",)
      //   console.log("submit data details",name ,address ,"redux value ",data)
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
    
    export default UpdateRecordScreen;
    
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
    