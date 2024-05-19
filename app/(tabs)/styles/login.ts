import styled from "styled-components/native";

export const Container = styled.View`
 width:100%;
 align-items:center;  
 justify-content:center;
 flex:1;
 background-color:#f2f2f2;
 position:relative;
`

export const ImageView = styled.Image`
   max-width:200px;
   max-height:200px;  
`

export const FooterInfomation = styled.View`
  position:absolute;
  bottom:0;
  margin-bottom:5%;
`

export const TextFooter = styled.Text`
  color:#000;
  font-size:15px;
  text-align:center;
`