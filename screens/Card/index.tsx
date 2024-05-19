import React, { memo } from 'react';
import { Container, TitleProduct, ImageProduct } from './styles';

interface propsCard {
    titleProduct: string;
    pathProduct?: string;
}
const Card = ({ titleProduct, pathProduct = '' }: propsCard) => {
    return (
        <Container>
            <TitleProduct>{titleProduct}</TitleProduct>
            <ImageProduct resizeMethod='auto' resizeMode='contain' source={pathProduct ? { uri: pathProduct } : require('@/assets/images/produto.png')} />
        </Container>
    );
}

export default memo(Card);