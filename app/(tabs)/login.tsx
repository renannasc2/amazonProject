import { useState } from 'react';
import { Input } from '@/components/Inputs';
import ButtonView from '@/components/Buttons';
import { Container, ImageView, FooterInfomation, TextFooter } from './styles/login';


export default function Login() {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    return (
        <Container>
            <ImageView source={require('@/assets/images/logo.png')} resizeMode='contain' resizeMethod='scale' />

            <Input value={login} onChangeText={setLogin} placeholder="Digite seu login" />
            <Input value={password} onChangeText={setPassword} secureTextEntry={true} placeholder="Digite sua senha" />
            <ButtonView borderRadius="5px" title="Logar" color="#fff" />
            <FooterInfomation>
                <TextFooter>Todos os Direitos reservados - Renan, 2024.</TextFooter>
            </FooterInfomation>
        </Container>
    )
}

