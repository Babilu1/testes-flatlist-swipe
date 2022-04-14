import React from "react";
import styled from "styled-components";

const Item = styled.TouchableOpacity`
  backgroundColor: #eee;
  padding: 10px;
  width: 350px;
  height: 50px;
  alignItems: center;
  justifyContent: center;
`; //touchable para o item da lista poder ser clicado/apagado

const ItemText = styled.Text`
  fontSize: 25px;
`;

export default (props) => {
    return(
      <Item>
         <ItemText>{props.data.cor}</ItemText>
      </Item>
    );
} //a props passada para pegar a propriedade cor e exibir na lista