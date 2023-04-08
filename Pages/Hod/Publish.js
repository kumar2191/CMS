import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Card, Text } from 'react-native-paper';
import Icon from '../../Components/Icon';

function Publish(props) {
  return (
      <View style={styles.container}>
          <Card style={{ padding:20,marginTop:'20%',width:'70%'}} >
              <Text  variant='bodyLarge' >Your results has been published check the document</Text>
              
          </Card>
          <View style={{ padding:20,marginTop:'5%',width:'70%',justifyContent:'space-between'}}>
              <Text variant='displaySmall'>Attach a file</Text>
              <Card>
                  <Button icon='upload' mode='outlined' >Upload</Button>
              </Card>
          </View>
          <Button mode='contained' >Publich</Button>
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

export default Publish;