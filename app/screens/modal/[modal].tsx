import React from 'react';
import { Modal, TouchableOpacity } from 'react-native';

import { Text } from '../../Theme/theme';

//* create static params to be accessed by other files in the app tree*//

interface ModalProps {
  isVisible: boolean;
  closeModal: () => void;
  modalContent: React.ReactNode;
  index: string;
}

const ModalComponent = ({
  isVisible,
  closeModal,
  modalContent,
  index,
}: ModalProps) => {
  return (
    <Modal visible={isVisible} animationType="slide" key={index}>
      {modalContent}
      <TouchableOpacity onPress={closeModal}>
        <Text>Close Modal</Text>
      </TouchableOpacity>
    </Modal>
  );
};

export default ModalComponent;
