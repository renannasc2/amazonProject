import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import Header from '@/components/Header';
import AdressComponent from '@/components/AdressComponent';
import Card from '../Card';
import { Container, ItemsProduct, ScrollViewItems, FooterInfomation, TextFooter } from './styles';

const Home = () => {
    const [showSearch, setShowSearch] = useState(false);
    return (
        <Container>
            <StatusBar backgroundColor={"#bcf9fa"} />
            <Header showSearch={showSearch} setShowSearch={setShowSearch} />
            <AdressComponent title={"Enviar para Renan - Bauru, Parque Jaraguá - CEP 17066 640"} />
            <ScrollViewItems centerContent>
                <ItemsProduct >
                    <Card titleProduct='Continue comprando' />
                    <Card titleProduct='Continue comprando' />
                    <Card titleProduct='Continue comprando' />
                    <Card titleProduct='Continue comprando' />
                    <Card titleProduct='Continue comprando' />
                    <Card titleProduct='Continue comprando' />
                    <Card titleProduct='Continue comprando' />
                </ItemsProduct>
            </ScrollViewItems>
            <FooterInfomation>
                <TextFooter>
                    O App day começa em 40:41:42
                </TextFooter>
            </FooterInfomation>
        </Container>
    );
}

export default Home;