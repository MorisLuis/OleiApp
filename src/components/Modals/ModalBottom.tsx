import React from 'react';
import { Modal, StyleSheet, View, TouchableOpacity } from 'react-native';
import { BlurView } from '@react-native-community/blur';
import Icon from 'react-native-vector-icons/Ionicons';

interface ModalBottomInterface {
    visible: boolean;
    onClose: () => void;
    children: any
}

const ModalBottom = ({
    visible,
    onClose,
    children
}: ModalBottomInterface) => {

    return (

        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <BlurView
                style={StyleSheet.absoluteFill}
                blurType="light"
                blurAmount={5}
            >
                <View style={styles.modalBottom}>
                    <View style={styles.modalContent}>
                        <TouchableOpacity style={styles.header} onPress={onClose}>
                            <Icon name="close-circle-outline" size={30} color="gray" />
                        </TouchableOpacity>

                        {children}

                    </View>
                </View>
            </BlurView>
        </Modal>

    );
};

export default ModalBottom;

const styles = StyleSheet.create({
    modalBottom: {
        flex: 1,
        justifyContent: "flex-end"
    },
    modalContent: {
        backgroundColor: 'white',
        paddingTop: 10,
        paddingRight: 20,
        paddingBottom: 15,
        paddingLeft: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        width: "100%",
        height: "30%"
    },
    header: {
        width: "100%",
        top: 0,
        right: 0,
        paddingRight: 0,
        paddingBottom: 10,
        paddingLeft: 0,
        display: "flex",
        alignItems: "flex-end",
    }
});

