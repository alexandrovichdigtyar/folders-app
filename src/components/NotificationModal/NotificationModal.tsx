import React from 'react';
import { Modal, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { setNotificationMessage } from '../../redux/slices/layout';
import { AppDispatch } from '../../redux/store';
import { styles } from './styles';

const NotificationModal = () => {
  const dispatch: AppDispatch = useDispatch();

  const handleClose = () => {
    dispatch(setNotificationMessage(null));
  }

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={true}
      onRequestClose={handleClose}
    >
      <TouchableOpacity
        style={styles.modalOverlay}
        activeOpacity={1}
        onPressOut={handleClose}
      >
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Not implemented</Text>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={handleClose}
          >
            <Text style={styles.closeButtonTitle}>Close</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

export default NotificationModal;
