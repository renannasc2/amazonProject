import React from 'react';
import { Ionicons } from '@expo/vector-icons';

import { Container, InformationAdress } from './styles';

interface propsAdress {
    title: string;
}
const AdressComponent = ({ title }: propsAdress) => {
    return (
        <Container>
            <Ionicons name="location" color="#000" size={20}/>
            <InformationAdress >{title} </InformationAdress>
        </Container>
    )
}

export default AdressComponent;