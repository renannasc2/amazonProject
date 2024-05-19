import styled from "styled-components/native";


export const Container = styled.View`
   height:100%;
   width:100%;
   background-color:#f2f2f2;
`

export const ItemsProduct = styled.View`
   flex-direction:row;
   flex-wrap:wrap;
   width:100%;
`

export const ScrollViewItems = styled.ScrollView`
  max-height:auto;
`

export const FooterInfomation = styled.View`
  position:absolute;
  bottom:0;
  background-color:#e36f08;
  width:100%;
  min-height:5%;
  padding:10px;
`

export const TextFooter = styled.Text`
  color:#000;
  font-size:15px;
  text-align:center;
`