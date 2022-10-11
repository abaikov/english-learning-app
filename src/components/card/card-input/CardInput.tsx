import React from 'react';
import { Platform, TextInput } from 'react-native';
import { EProjectColor } from '../../palette/EProjectColor';
import { CardInputStyleSheet } from './CardInputStyleSheet';
import { ICardInputProps } from './type/ICardInputProps';

export const CardInput = React.memo((props: ICardInputProps) => {
    return <TextInput
            style={CardInputStyleSheet.input}

            value={props.value}
            onChangeText={props.onChange}
            placeholder={props.placeholder}
            onSubmitEditing={props.onSubmitEditing}
            
            blurOnSubmit={false}
            autoFocus
            autoCapitalize='none'
            autoComplete='off'
            textContentType={'none'}
        
            autoCorrect={false}
            contextMenuHidden
            keyboardAppearance='dark'
            enablesReturnKeyAutomatically
            selectionColor={EProjectColor.PINK}
            spellCheck={false}
            placeholderTextColor={EProjectColor.BORDER_GRAY}
            underlineColorAndroid={'transparent'}
            keyboardType={Platform.OS == 'ios' ? 'ascii-capable' : 'visible-password'}
            returnKeyType='go'
            importantForAutofill='no'
            textAlign={'center'}
            
        />
})
