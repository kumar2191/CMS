import React from 'react';
import { View, StyleSheet,Image } from 'react-native';
// import CustomInput from '../Components/CustomInput';
// import { TextInput } from 'react-native-paper';
import { TextInput, Modal, Portal, Text, Button, Provider} from 'react-native-paper';
// import CustomButton from '../Components/CustomButton';
// import CustonModal from '../Components/CustonModal';

function RegisterScreen({ navigation}) {
      const [text, setText] = React.useState("");
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', padding: 20};

  return (
      <View style={styles.container}>
{/* <TextInput
      label="Password"
      right={<TextInput.Icon icon="eye" />}
    /> */}
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
              justifyContent: 'space-evenly',
              height: '30%',
              marginTop:'10%'
          }} >
          
            <TextInput
      label="Email-Addreess"
          />
            <TextInput
   label="Password"
      secureTextEntry
      right={<TextInput.Icon icon="eye" />}
          />
          </View>
          <View>
              {/* <CustomButton text={'Create Account'} color={'#73DA77'}  /> */}
              <Button  icon="login" mode="contained" buttonColor='green'  onPress={() => {
          navigation.navigate('HodHomeScreen')
              }} >
   Hod-Login
  </Button>
          </View>
{/*        
          <CustonModal
          show={visible}
          onClose={()=>setVisible(false)}
          /> */}
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
         backgroundColor: '#90CACD',
        flex: 1,
        alignItems: 'center',
        
    },
     tinyLogo: {
    width: 200,
    height: 200,
  },
});

export default RegisterScreen;