import styled from "styled-components/native";

export const Container = styled.View`
 width:100%;
 padding:2%;
 padding-left:10%;
 padding-right:10%;
`

export const InputType = styled.TextInput<{ colorBorder: string | undefined, background: string | undefined }>`
   padding:15px;
   border-width:1px;
   border-color:${({ colorBorder = "#f8c973" }) => colorBorder};
   border-radius:5px;
   background-color:${({ background = "transparent" }) => background};
`