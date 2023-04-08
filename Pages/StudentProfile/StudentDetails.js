import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card ,Text} from 'react-native-paper';
import Icon from '../../Components/Icon';

function StudentDetails({props}) {
  return (
      <View style={styles.container}>
          <Card style={{ marginTop: 30 ,width: '80%' }}>
              <View style={{ 
                  marginRight: -260,
                  marginTop:10
              }} >
                   <Icon name="application-edit-outline" size={30} />
             </View>
          <Text style={styles.paragraph}>
            Name:Velava 
              </Text>
               <Text style={styles.paragraph}>
         Mobile 12345678
              </Text>
               <Text style={styles.paragraph}>
   Register No 1p21mc001
              </Text>
        </Card>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
         backgroundColor: '#90CACD',
    flex: 1,
    alignItems: 'center',
    },
      paragraph: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 20
  },
});

export default StudentDetails;