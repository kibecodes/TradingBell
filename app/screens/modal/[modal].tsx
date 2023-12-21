import React from "react";
import { Modal, TouchableOpacity } from "react-native";

import { Text } from '../../Theme/theme';

//* create static params to be accessed by other files in the app tree*//

interface ModalProps {
    isVisible: boolean;
    closeModal: () => void;
    modalContent: React.ReactNode;
}

const ModalComponent = ({ isVisible, closeModal, modalContent }: ModalProps) => {
    return (
        <Modal visible={isVisible} animationType="slide" >
            {modalContent}
            <TouchableOpacity onPress={closeModal}>
                <Text>Close Modal</Text>    
            </TouchableOpacity>
        </Modal>
    )
}

export default ModalComponent;