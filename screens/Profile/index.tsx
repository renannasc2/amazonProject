import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import Header from '@/components/Header';
import AdressComponent from '@/components/AdressComponent';
import Card from '../Card';
import { Container, ItemsProduct, ScrollViewItems } from './styles';

const Profile = () => {
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
        </Container>
    );
}

export default Profile;