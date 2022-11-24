import { Platform, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const UserInput = ({placeholder,onChangeText,Width,secureTextEntry,value}) => {
  return (
   
     <TextInput
     value={value}
     placeholderTextColor="#444"
     placeholder={placeholder}
     onChangeText={onChangeText}
     secureTextEntry={secureTextEntry}
     style={[styles.textInput,{width:Width,}]}
     />
   
  )
}

export default UserInput

const styles = StyleSheet.create({
container:{
    flex:1,
    justifyContent:"center",

},
text:{
    alignSelf:"center",
    fontSize:18,
    fontWeight:"bold"
},
textInput:{
    borderWidth:1,
    borderColor:"#000",
    alignSelf:"center",
    padding:Platform.OS=="ios"?10:10
}
})