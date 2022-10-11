import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { EProjectColor } from '../../palette/EProjectColor';
import { TouchableStyled } from '../../touchable-styled/TouchableStyled';
import { CardButtonStyleSheet } from '../card-button/CardButtonStyleSheet';
import { ECardStatus } from '../type/ECardStatus';
import { ICardProps } from '../type/ICardProps';
import { CardBottomButtonsStyleSheet } from './CardBottomButtonsStyleSheet';
import { ICardBottomButtonsProps } from './type/ICardBottomButtonsProps';


export const CardBottomButtons = (props: ICardProps) => {
    let buttons: JSX.Element[] = [];

    if (props.status == ECardStatus.UNDEFINED) {
        buttons = [
            <TouchableStyled 
                key={'aki'}
                style={[
                    CardButtonStyleSheet.root,
                    CardBottomButtonsStyleSheet.button,
                ]}
                onPress={props.onIAlreadyKnowItButtonClick}
                underlayColor={EProjectColor.GREEN}
            >
                {(isActive) => <Text 
                    style={[
                        CardBottomButtonsStyleSheet.buttonText,
                        CardBottomButtonsStyleSheet.buttonGreenText,
                        isActive
                            ? CardBottomButtonsStyleSheet.buttonTextActive
                            : undefined
                    ]}
                >
                    DO NOT{'\n'}REPEAT IT
                </Text>}
            </TouchableStyled>,
            <View key={'dev1'} style={CardButtonStyleSheet.devider}></View>,
            <TouchableStyled
                key={'ris'}
                style={[
                    CardButtonStyleSheet.root,
                    CardBottomButtonsStyleSheet.button
                ]}
                onPress={props.onRepeatItSometimesButtonClick}
                underlayColor={EProjectColor.YELLOW}
            >
                {(isActive) => <Text
                    style={[
                        CardBottomButtonsStyleSheet.buttonText,
                        CardBottomButtonsStyleSheet.buttonYellowText,
                        isActive
                            ? CardBottomButtonsStyleSheet.buttonTextActive
                            : undefined
                    ]}
                >
                    REPEAT IT{'\n'}SOMETIMES
                </Text>}
            </TouchableStyled>,
            <View key={'dev2'} style={CardButtonStyleSheet.devider}></View>,
            <TouchableStyled
                key={'stli'}
                style={[
                    CardButtonStyleSheet.root,
                    CardBottomButtonsStyleSheet.button,
                ]}
                onPress={props.onWantToLearnItButtonClick}
                underlayColor={EProjectColor.PINK}
            >
                {(isActive) => <Text
                    style={[
                        CardBottomButtonsStyleSheet.buttonText,
                        CardBottomButtonsStyleSheet.buttonPinkText,
                        isActive
                            ? CardBottomButtonsStyleSheet.buttonTextActive
                            : undefined
                    ]}
                >
                    REPEAT IT{'\n'}OFTEN
                </Text>}
            </TouchableStyled>,

        ]
    } else {
        buttons = [
            <TouchableStyled
                key={'mi'}
                style={[
                    CardButtonStyleSheet.root,
                    CardBottomButtonsStyleSheet.button,
                ]}
                onPress={props.onNotOkButtonClick}
                underlayColor={EProjectColor.RED}
            >
                {(isActive) => <Text
                    style={[
                        CardBottomButtonsStyleSheet.buttonText,
                        CardBottomButtonsStyleSheet.buttonRedText,
                        isActive
                            ? CardBottomButtonsStyleSheet.buttonTextActive
                            : null
                    ]}
                >
                    FAIL
                </Text>}
            </TouchableStyled>,
            <View key={'dev1'} style={CardButtonStyleSheet.devider}></View>,
            <TouchableStyled
                key={'rial'}
                style={[
                    CardButtonStyleSheet.root,
                    CardBottomButtonsStyleSheet.button,
                ]}
                onPress={props.onRepeatItAgainLaterButtonClick}
                underlayColor={EProjectColor.YELLOW}
            >
                {(isActive) => <Text
                    style={[
                        CardBottomButtonsStyleSheet.buttonText,
                        CardBottomButtonsStyleSheet.buttonYellowText,
                        isActive
                            ? CardBottomButtonsStyleSheet.buttonTextActive
                            : null
                    ]}
                >
                    RETRY{'\n'}LATER
                </Text>}
            </TouchableStyled>,
            <View key={'dev2'} style={CardButtonStyleSheet.devider}></View>,
            <TouchableStyled
                key={'gi'}
                style={[
                    CardButtonStyleSheet.root,
                    CardBottomButtonsStyleSheet.button,
                ]}
                onPress={props.onOkButtonClick}
                underlayColor={EProjectColor.GREEN}
            >
                {(isActive) => <Text
                    style={[
                        CardBottomButtonsStyleSheet.buttonText,
                        CardBottomButtonsStyleSheet.buttonGreenText,
                        isActive
                            ? CardBottomButtonsStyleSheet.buttonTextActive
                            : null
                    ]}
                >
                    SUCCESS
                </Text>}
            </TouchableStyled>,

        ]
    }

    return <View style={CardBottomButtonsStyleSheet.root}>
        {buttons}
    </View>
}
