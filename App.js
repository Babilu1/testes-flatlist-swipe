import { StatusBar } from 'expo-status-bar';
import styled from 'styled-components';
import { Alert, FlatList, TouchableOpacity } from 'react-native';
import ListaItem from './src/ListaItem';
import Add from './src/Input';
import { useState } from 'react';
import { SwipeListView } from 'react-native-swipe-list-view';
import ListaItemSwipe from './src/ListaItemSwipe';


const Container = styled.View`
  flex: 1;
  width: 100%
  top: 70px;
  backgroundColor: #fff;
  alignItems: center;
  justifyContent: center;
`;

const Texto = styled.Text`
  fontSize: 20px;
  fontWeight: bold;
  color:#fff;
`;


const Lista = [
  {id:"1", cor: 'amarelo'},
  {id:"2", cor: 'vermelho'},
  {id:"3", cor: 'branco'},
  {id:"4", cor: 'verde'},
  {id:"5", cor: 'azul'},
  {id:"6", cor: 'preto'},
  {id:"7", cor: 'laranja'},
  {id:"8", cor: 'marrom'},
  {id:"9", cor: 'rosa'},
  {id:"10", cor: 'caramelo'},
  {id:"11", cor: 'lavanda'},
  {id:"12", cor: 'lilás'},
  {id:"13", cor: 'verde limão'},
  {id:"14", cor: 'amarelo'},
  {id:"15", cor: 'amarelo'},
  {id:"16", cor: 'amarelo'},
]

export default function App() {
  const [addItem, setAddItem] = useState(Lista) //um estado para os itens atuais e novos da lista

  // const [novo, setNovo] = useState('');

  // const Adicionar = () => {
  //   let addItem = [...props.addItem];
  //   addItem.push({
  //     id: novo,
  //     cor: novo
  //   })
     
  //   props.setAddItem(addItem);
  //   setNovo('');
  // }

  const Apagar = (index) => {
    let NewItems = [...addItem];  //"...addItem" indica que "NewItems" foi criado e é um clone de addItem
    NewItems = NewItems.filter((it, i ) => {
      if (i != index) {  //se i for diferente de index
        return true      // retorne verdadeiro
      } else {           // se não
        return false     // retorne falso
      }
    });
    setAddItem(NewItems);
    console.log(NewItems)
  } 

  return (
    <Container>
      <Texto>Testes</Texto>
      <Add addItem={addItem}
      setAddItem={setAddItem}
      />
      <SwipeListView 
        data={addItem}
        renderItem={({item,index}) => <ListaItem data={item}/>} //Pega um item data e o renderiza na lista
        renderHiddenItem={({item,index}) => <ListaItemSwipe onDelete={() => Apagar(index)}/>} //função anonima q chama a função oficial para apagar o item
        leftOpenValue={70}    //puxar para a direita uns 50px
        disableLeftSwipe={true}  //desabilitar a puxada para a esquerda
        keyExtractor={(item) => item.id} //para extrair uma chave exclusiva para um determinado item no índice especificado
      />
      <StatusBar style="auto" />
    </Container>
  );
}
// item => parâmetro inventado, o react entende a finalidade dele

