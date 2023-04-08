import React from 'react';
import { View, StyleSheet } from 'react-native';
// import { TextInput } from 'react-native-paper';
import { TextInput, Modal, Portal, Text, Button, Provider} from 'react-native-paper';

function RegisterScreen(props) {
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
              justifyContent: 'space-evenly',
              height:'70%'
          }} >
               <TextInput
      label="Name"
          />
              <TextInput
                  keyboardType='number-pad'
      label="Mobiel Number"

              style={{
                  width: 300,
                  }}
                  
          />
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
              <Button icon="plus" mode="contained" buttonColor='green' onPress={() => setVisible(true)} >
   Create Acccount
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
        
  }
});

export default RegisterScreen;