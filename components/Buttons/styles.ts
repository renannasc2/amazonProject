import styled from "styled-components/native";


export const Container = styled.View`
   width:100%;
   padding:5%;
   padding-left:20%;
   padding-right:20%;
`

export const ButtonStyled = styled.TouchableOpacity<{ borderRadius: string | undefined }>`
   padding:10px;
   border-with:1px;
   background-color:#f8c973;
   border-color:#f8c973;
   border-radius:${({ borderRadius = '5px' }) => borderRadius};
`