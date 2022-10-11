import React from 'react';
import { StyleProp, TouchableHighlight, TouchableHighlightProps, View, ViewProps, ViewStyle } from 'react-native';

interface Props extends Omit<TouchableHighlightProps, 'children'> {
    activeStyle?: StyleProp<ViewStyle>
    children: (isActive: boolean) => (JSX.Element | JSX.Element[])
}

export const TouchableStyled = (props: Props) => {
    const [isActive, setIsActive] = React.useState(false);
    const style = isActive
        ? ([] as any).concat(props.style).concat(props.activeStyle)
        : props.style;

    return <TouchableHighlight 
        {...props}
        style={style}
        onPressIn={(e) => {
            setIsActive(true);
            props.onPressIn && props.onPressIn(e);
        }}
        onPressOut={(e) => {
            setIsActive(false);
            props.onPressOut && props.onPressOut(e);
        }}
    >
        {props.children(isActive)}
    </TouchableHighlight>;
}
