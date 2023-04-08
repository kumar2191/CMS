import React from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from '../../Components/Icon';
import { Text } from 'react-native-paper';

function StudentProfile(props) {
  return (
      <View style={styles.container}>
          <View>
              <Icon
                  name={"human-child"}
                  size={200}
              />
              <View style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
              }} >
                  <Text  variant='bodyLarge'  style={{ marginTop:'10%' }}  >Velava.L</Text>
                      <Text  variant='bodyLarge'  style={{ marginTop:'10%' }} >MCA</Text>
                  <Text  variant='bodyLarge'  style={{ marginTop:'10%' }} >1P21MC055</Text>

              </View>
          </View>
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

export default StudentProfile;