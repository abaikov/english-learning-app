import React from 'react';
import { Modal, Text, TouchableOpacity, View } from 'react-native';
import { ConfirmPopupStyleSheet } from './ConfirmPopupStyleSheet';
import { IConfirmPopupProps } from './type/IConfirmPopupProps';

export const ConfirmPopup = (props: IConfirmPopupProps) => {
    return <Modal
        animationType='fade'
        transparent={true}
        visible={props.shown}
        onRequestClose={() => {
            props.onResult(false);
        }}
    >
        <View style={ConfirmPopupStyleSheet.root}>
            <View style={ConfirmPopupStyleSheet.popup}>
                <View style={ConfirmPopupStyleSheet.textWrap}>
                    <Text style={ConfirmPopupStyleSheet.text}>
                        {props.text}
                    </Text>
                </View>
                <View style={ConfirmPopupStyleSheet.buttonsWrap}>
                    <TouchableOpacity 
                        style={ConfirmPopupStyleSheet.button}
                        onPress={() => {
                            props.onResult(true);
                        }}
                    >
                        <Text style={ConfirmPopupStyleSheet.buttonText}>
                            {props.acceptButtonText || 'OK'}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={ConfirmPopupStyleSheet.button}
                        onPress={() => {
                            props.onResult(false);
                        }}
                    >
                        <Text style={ConfirmPopupStyleSheet.buttonText}>
                            {props.acceptButtonText || 'CANCEL'}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </Modal>
}
