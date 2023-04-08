import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Modal, Portal, Text, Button, Provider} from 'react-native-paper';

function CustonModal({ show,onClose}) {
//       const showModal = () => setVisible(true);
//   const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', padding: 20};
  return (
       <Provider>
      <Portal>
        <Modal visible={show} onDismiss={onClose} contentContainerStyle={containerStyle}>
          <Text>Example Modal.  Click outside this area to dismiss.</Text>
        </Modal>
      </Portal>
      <Button style={{marginTop: 30}} onPress={showModal}>
        Show
      </Button>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {}
});

export default CustonModal;