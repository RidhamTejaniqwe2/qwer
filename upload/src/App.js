import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import AddUser from './ReduxFile/AddUser';

import {Provider} from 'react-redux';
//import { PersistGate } from 'redux-persist/lib/integration/react';
import Store from './redux/store';
import {PersistGate} from 'redux-persist/lib/integration/react';
import ReduxListScreen from './ReduxFile/ReduxListScreen';
import UpdateRecordScreen from './ReduxFile/UpdateRecordScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={Store.store}>
      <PersistGate persistor={Store.persiststore}>
        <NavigationContainer>
          <Stack.Navigator>
          {/* <Stack.Screen name='LoginScreen' component={LoginScreen}
          options={{headerShown:false}}
          />
   
            <Stack.Screen
              name="ReduxListScreenclass"
              component={ReduxListScreenclass}
              options={{headerShown: false}}
            />
            <Stack.Screen name="AdduserClass" component={AddUserClass} />
            <Stack.Screen
              name="UpdateClassScreen"
              component={UpdateClassScreen}
            />
          */}
            <Stack.Screen name="AddUser" component={AddUser} />
            <Stack.Screen
              name="ReduxListScreen"
              component={ReduxListScreen}
              options={{headerShown: false}}
            /> 
            <Stack.Screen
              name="UpdateRecordScreen"
              component={UpdateRecordScreen}
            />
            
           
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
