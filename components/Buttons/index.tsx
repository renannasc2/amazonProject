import React from 'react';
import { Text } from 'react-native';
import { IStyledComponent } from 'styled-components';
import { Container, ButtonStyled } from './styles';


interface propsButton {
    title: string;
    color?: string;
    borderRadius?: string;
}

const ButtonView = ({ title, color, borderRadius, ...props }: propsButton & IStyledComponent<"native">) => {
    return (
        <Container>
            <ButtonStyled borderRadius={borderRadius} {...props} >
                <Text style={{ color, textAlign: 'center' }}>{title}</Text>
            </ButtonStyled>
        </Container>
    );
}

export default ButtonView;