import React from 'react';
import { View, StyleSheet,TouchableOpacity } from 'react-native';
import { Button, Text } from 'react-native-paper';
import Icon from '../../Components/Icon';

function StudentHome({navigation}) {
  return (
    <View style={{
    backgroundColor: '#90CACD',
    flex: 1,
    alignItems: 'center',
    }} >
      {/* <View style={styles.container}>
        
        <Text variant='displayMedium' >Home</Text>
        <Text variant='bodyLarge' style={{ color: 'white' }}  >RVS College of Arts & Science College </Text>
        <Text variant='titleLarge' style={{ marginTop:'10%' }} >Complaint Management System</Text>
      </View> */}
      <View style={{ 
         display: 'flex',
    justifyContent: 'center',
        alignItems: 'center',
 marginTop:'10%'
      }} >
        
        <Button mode='elevated'  style={{ width:200, marginTop:'20%'}} onPress={()=>navigation.navigate('Register')} >Create Student Account</Button>
        <Button mode='elevated'  style={{ width:200, marginTop:'20%'}}  onPress={()=>navigation.navigate('StudentDetails')} >Update Student Details</Button>
        <Button mode='elevated' style={{ width: 200, marginTop: '20%' }} onPress={()=>navigation.navigate('Publish')} >Publish Post</Button>

      </View>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
 alignItems:'center',
    marginTop:'15%'
  },

});

export default StudentHome;