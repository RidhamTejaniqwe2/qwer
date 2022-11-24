import {FlatList, StyleSheet, Text, TouchableOpacity, View,SafeAreaView,Image} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {removeData} from '../redux/Action/userAction';
import { Fragment } from 'react';
import { useState } from 'react';

const ReduxListScreen = ({navigation}) => {
  const data = useSelector(state => state.user);
  const distpatch = useDispatch();

  console.log('user list screen', data.userList);

  const deleteRecord = id => {
    distpatch(removeData(id));
  };

  const MoveScreen = item => {
   
    navigation.navigate('UpdateRecordScreen', {userData: item});
  };

  return (
    <Fragment>
    <SafeAreaView style={{flex:0,backgroundColor:'red'}}/>

    <SafeAreaView style={{flex:1}}>
    <View style={styles.container}>
      <View style={styles.imageView}>
        <TouchableOpacity
          onPress={() => navigation.navigate('AddUser')}
          style={styles.imageContainer}>
          <Image
            source={require('../assets/edit.png')}
            style={styles.image}></Image>
        </TouchableOpacity>
      </View>
      {
        data.userList.length!=0?
      <FlatList
        data={data.userList}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              onPress={() => MoveScreen(item)}
              style={styles.boxShadow}>
              <View style={{width: '80%'}}>
                <Text style={styles.text}>id:{item?.id}</Text>
                <Text style={styles.text}>name:{item.name}</Text>
                <Text style={styles.text}>address:{item.address}</Text>
                <Text style={styles.text}>Record item:{item.recordItem}</Text>
              </View>
              <View style={{justifyContent:"center"}}>
                <TouchableOpacity onPress={() => deleteRecord(item.id)}>
                <Image source={require('../assets/delete.png')}
                          style={{height:25,width:25,alignSelf:"center",left:20}}
                          />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />:
      <View style={{flex:1,justifyContent:"center"}}>
        <Text style={styles.text}>Data not Found</Text>
      </View>
      }
    </View>
    </SafeAreaView>
    </Fragment>
  );
};

export default ReduxListScreen;

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  boxShadow: {
    width: '80%',
    padding: 10,
    flexDirection: 'row',
    alignSelf:"center",
    borderWidth:1,
    marginTop:15
  },
 

  imageView: {
    height: 50,
    width: '100%',
    backgroundColor: 'red',
    justifyContent: 'center',
  },
  image: {
    height: 25,
    width: 25,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  imageContainer: {
    alignSelf: 'flex-end',
    justifyContent: 'center',
    right: 20,
  },
});
