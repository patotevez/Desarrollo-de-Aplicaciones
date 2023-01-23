import React from "react";
import { Modal, View, Text, Button } from 'react-native'
import { styles } from "./styles";

const CustomModal = ({ isModalVisible, selectedTask, onHandleCancel, onHandleDelete }) => {
    return (
        <Modal visible={isModalVisible} animationType='slide'>
            <View style={styles.modalContainer}>
                <Text style={styles.modalTitle}>Detalle de tarea:</Text>
                <View style={styles.modalDetailContainer}>
                    <Text style={styles.modalDetailMessage}>¿Deseas borrarlo?</Text>
                    <Text style={styles.selectedTask}>{selectedTask?.value}</Text>
                </View>
                <View style={styles.modalButtonContainer}>
                    <Button
                        title='Cancelar'
                        color='#626893'
                        onPress={onHandleCancel}
                    />
                    <Button
                        title='Borrar'
                        color='red'
                        onPress={onHandleDelete}
                    />
                </View>
            </View>
        </Modal>
    )
}

export default CustomModal;