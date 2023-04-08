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
      <View style={styles.container}>
        
        <Text variant='displayMedium' >Home</Text>
        <Text variant='bodyLarge' style={{ color: 'white' }}  >RVS College of Arts & Science College </Text>
        <Text variant='titleLarge' style={{ marginTop:'10%' }} >Complaint Management System</Text>
      </View>
      <View style={{ 
         display: 'flex',
    justifyContent: 'center',
        alignItems: 'center',
 marginTop:'10%'
      }} >
        <Button mode='elevated' style={{ width: 200, }} onPress={() => {
          console.log("ckjbhj")
        }} >About CMS</Button>
        <Button mode='elevated'  style={{ width:200, marginTop:'10%'}}>About CMS</Button>
        <Button mode='elevated'  style={{ width:200, marginTop:'10%'}}  onPress={()=>navigation.navigate('ComplaintScreen')} >Click to file your Complaint</Button>
        <Button mode='elevated' style={{ width: 200, marginTop: '10%' }} onPress={()=>navigation.navigate('CurrentComplaint')} >Track your Complaint</Button>
        <Button mode='elevated'  style={{ width:200, marginTop:'10%'}}>Contact us</Button>

      </View>
      <View style={{
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: '50%',
      }} >
        <Icon name={'home'} size={70} />
        <TouchableOpacity onPress={()=>navigation.navigate('StudentProfile')} >

        <Icon name={'face-man-profile'}  size={70} />
        </TouchableOpacity>
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