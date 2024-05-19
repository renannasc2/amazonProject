import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import Header from '@/components/Header';
import ButtonView from '@/components/Buttons';
import RadiosButton from '@/components/RadiosButton';
import {
    Container,
    FooterInfomation,
    TextFooter,
    Title
} from './styles';


const Cart = () => {
    const [showSearch, setShowSearch] = useState(false);
    const label = "Enviar como presente incluir mensagem personalizada";
    const [value, setValue] = useState([{ label, value: 0 }]);

    const changeValue = () => {
        if (value[0]?.value == 1) {
            setValue([{ label, value: 0 }]);
            return value;
        }

        setValue([{ label, value: 1 }]);
        return value;
    }
    return (
        <Container>
            <StatusBar backgroundColor={"#bcf9fa"} />
            <Header showSearch={showSearch} setShowSearch={setShowSearch} />
            <Title>Mensagem sobre produto no carrinho</Title>
            <Title style={{ marginTop: 20 }}>Subtotal : 10.999,11</Title>
            <ButtonView title="Fechar pedido(4 itens)" borderRadius='15px' color="#fff" style={{
                background: "#ffd700",
                padding: "5px"
            }} />
            <RadiosButton
                color="blue"
                size={"100%"}
                value={value}
                changeValue={changeValue}
            />
            <FooterInfomation>
                <TextFooter>
                    O App day começa em 32:42:40
                </TextFooter>
            </FooterInfomation>
        </Container>
    );
}

export default Cart;