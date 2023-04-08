import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import CustomButton from '../Components/CustomButton';
function HomeScreen({ navigation}) {
  return (
      <View style={styles.container} >
          <View style={{
             marginTop:'20%' 
          }} >
              <Text style={{
                  fontSize: 30,
                  fontWeight:'bold'
              }} >CMS</Text>
          </View>
          <View style={{
                           marginTop:'20%' 

          }} >
        <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://img.collegedekhocdn.com/media/img/institute/logo/RVSIMSR_LOGO.png',
        }}
      />
          </View>
          <View style={{
              marginTop: '30%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent:'space-between'
          }} >
        <CustomButton text={'Register'} color={'#E88D8D'} onPress={() => {
          navigation.navigate('Register')
              }} ></CustomButton>
            <CustomButton text={'Login'} color={'#73DA77'} onPress={() => {
          navigation.navigate('Login')
              }}></CustomButton>
      <CustomButton text={'Hod-Login'} color={'red'} onPress={() => {
          navigation.navigate('HodeLogin')
              }}></CustomButton>

          </View>
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
});

export default HomeScreen;