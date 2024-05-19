import React from 'react';
import RadioForm from 'react-native-simple-radio-button';

import { Container } from './styles';

interface propsRadios {
    color: string;
    size: number;
    value: [{ label: string, value: number }];
    changeValue: () => void
}

const RadiosButton = ({ color, size, value, changeValue }: propsRadios) => {

    return (
        <Container>
            <RadioForm
                style={{ width: size }}
                buttonColor={color}
                initial={0}
                animation={false}
                radio_props={value}
                onPress={changeValue}
                labelColor='#f2f2f2'
            />
        </Container>
    )
}

export default RadiosButton;