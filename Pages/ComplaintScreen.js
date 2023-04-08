import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import CustomButton from '../Components/CustomButton';
import { TextInput, Button } from 'react-native-paper';
import { SelectList } from 'react-native-dropdown-select-list'
function ComplaintScreen({ navigation}) {
  const [val,selVal]=React.useState('')
  const data = [
      {key:'Class room facilities related', value:'Class room facilities related', },
      {key:'Laboratory related', value:'Laboratory related'},
      {key:'Libirary facilities related', value:'Libirary facilities related'},
      {key:'Hostel related', value:'Hostel related', },
      {key:'CIA related', value:'CIA related'},
      {key:'Attendance related', value:'Attendance related'},
    
  ]

  return (
      <View style={styles.container} >
          <View style={{
              marginTop: '20%',
              marginHorizontal:'15%'
          }} >
              <Text style={{
                  fontSize:20,
                  fontWeight:'bold'
              }} >Describe the your complaint</Text>
          </View>
          <View style={{
                           marginTop:'20%' 

          }} >
        
         
        <View
         
        >
               <SelectList 
        setSelected={(val) => selVal(val)} 
        data={data} 
          save="value"
      
        />
       </View>
        <View  style={{
          marginTop:'10%'
        }}>
          
              <TextInput
              
              multiline
              placeholder='Raise your Complaint'
              style={styles.textArea}
              />
              </View>
   
          </View>
          <Button
              style={{
                  width: 200,
                  marginTop:'10%'
              }}
            //   loading
              icon="plus"
              mode="contained"
              buttonColor='green'
        onPress={() => setVisible(true)} >Raise Complaint</Button>
      
        <Button
              style={{
                  width: 200,
                  marginTop:'10%'
              }}
            //   loading
              icon="plus"
              mode="contained"
              buttonColor='green'
              onPress={() => navigation.navigate('CurrentComplaint')} >Track Complaint</Button>

    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#90CACD',
        flex: 1,
        alignItems:'center'
    },
    tinyLogo: {
    width: 200,
    height: 200,
  },
  textArea: {
    width:250,
    height: 150,
    borderColor:'red'
                      
    }
});

export default ComplaintScreen;