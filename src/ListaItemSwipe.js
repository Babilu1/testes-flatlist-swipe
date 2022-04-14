import React from "react";
import { TouchableOpacityBase, StyleSheet } from "react-native";
import styled from "styled-components";
import { Feather } from '@expo/vector-icons';

const ListaItemSwipe = styled.View`
  width: 50px;
`;

const ApagarItem = styled.TouchableOpacity`
  justifyContent: center;
  alignItems: center;
  marginTop: 15px;
  marginLeft: 20px;
`;

export default (props) => {
    return(
      <ListaItemSwipe >
         <ApagarItem onPress={props.onDelete}><Feather name="trash-2" size={28} color="#000"  /></ApagarItem>
      </ListaItemSwipe>
    );
} //icone importado da própria biblioteca native
//ListaItemSwipe é a lista que comporta o botão de apagar
