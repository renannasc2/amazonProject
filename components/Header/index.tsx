import React, { useState, SetStateAction } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from "@expo/vector-icons"
import { Input } from '../Inputs';
import { Container, BoxInfo, IconInfo } from './styles';
import { ImageView } from '@/app/(tabs)/styles/home';

interface propsHeader {
    showSearch: boolean;
    setShowSearch: React.Dispatch<SetStateAction<boolean>>
}

const Header = ({ showSearch, setShowSearch }: propsHeader) => {
    const [search, setSearch] = useState("");

    const changeState = () => {
        setShowSearch(!showSearch);
    }
    return (
        <Container>
            <SafeAreaView style={{
                minHeight: "15%",
                width: "100%",
                flexDirection: "row",
                alignItems: "center",
                padding: 10,
                marginLeft: 5
            }}>
                {showSearch ?
                    <>
                        <Ionicons name="search" color="#000" size={30} onPress={changeState}/>
                        <Input
                            value={search}
                            onChangeText={setSearch}
                            colorBorder='transparent'
                            background="#fff"
                            placeholder="Pesquisar na Amazon.com.br"
                        />
                    </> :
                    <BoxInfo >
                        <ImageView
                            source={require('@/assets/images/logo.png')}
                            resizeMode='contain'
                            resizeMethod='scale'
                            style={{ height: 50 }}
                        />
                        <IconInfo>
                            <Ionicons name="notifications" color="#000" size={30} />
                            <Ionicons name="search" color="#000" size={30} style={{ marginLeft: 10 }} onPress={changeState} />
                        </IconInfo>
                    </BoxInfo>
                }
            </SafeAreaView>
        </Container>
    );
}

export default Header;