import React, { useState } from "react";
import styled from "styled-components";

const Add = styled.TextInput`
  width: 350px;
  height: 50px;
  backgroundColor: #eee;
  marginBottom: 15px;
  padding: 15px;
  fontSize: 15px;
  borderRadius: 4px;
`;

export default (props) => {
  const [input, setInput] = useState(''); //um state para cada elemento. *troquei novo por input pois novo/setNovo já estava sendo usado em outro elemento

  const Adicionar = () => {
    let addItem = [...props.addItem]; //clone de addItem 
    addItem.push({ //push para adicionar um novo item à lista (método de array)
      id: input,  
      cor: input  //o que cada propriedade deve pegar (na lista em id e cor, por isso o novo item só virá com id e cor (se houvesse mais... viria))
    })
    props.setAddItem(addItem); //addItem pq é o estado da lista (está no arquivo App.js) props passada no estado input/setInput
    setInput(''); //quando digitar e adicionar à lista a palavra digitada no input é apagada
  }

    return(
    <Add 
    placeholder="Adicione um novo item à sua lista"
    onChangeText={e=>setInput(e)}
    value={input}
    onSubmitEditing={Adicionar} //chama a função adicionar
    >
    </Add>
    );
}