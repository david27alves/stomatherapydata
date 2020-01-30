import React from 'react';
import { View, FlatList, Text, Button  } from 'react-native';

function Main({navigation}) {

    var state = {
        data: [
            { 
                id: '0', 
                paciente: 'José da Silva', 
                enfermeiro: 'Wellington Mota',
            },
            { 
                id: '1', 
                paciente: 'Maria Oliveira',
                enfermeiro: 'Wellington Mota',
            },
            {
                id: '2', 
                paciente: 'Vânia do Carmo',
                enfermeiro: 'Wellington Mota',
            },
            { 
                id: '3', 
                paciente: 'Patrícia Moreira',
                enfermeiro: 'Wellington Mota',
            },
            { 
                id: '4', 
                paciente: 'Patrícia Moreira',
                enfermeiro: 'Wellington Mota',
            },
            { 
                id: '5', 
                paciente: 'Patrícia Moreira',
                enfermeiro: 'Wellington Mota',
            },
            { 
                id: '6', 
                paciente: 'Patrícia Moreira',
                enfermeiro: 'Wellington Mota',
            },
            { 
                id: '7', 
                paciente: 'Patrícia Moreira',
                enfermeiro: 'Wellington Mota',
            },
        ],
    };

    var renderItem = ({ item }) => (
        <View style={{ 
            backgroundColor: 'transparent', 
            marginTop: 5,
            marginHorizontal: 5,
            paddingVertical: 30,
            paddingLeft: 10,
            borderRadius: 5,
            borderLeftWidth: 10,
            borderTopWidth: 1,
            borderBottomWidth: 1,
            borderRightWidth: 1,
            borderLeftColor: '#dbb81f',
            borderColor: '#3490dc',

        }}>
          <Text style={{
              color: '#393a34',
              fontWeight: 'bold',
              fontSize: 20,
          }}>
              {item.paciente}</Text>
              <Text style={{
              color: '#393a34',
          }}>
              {item.enfermeiro}</Text>
        </View>
      )
    

    return (
        <>
        
        <FlatList
            //inverted
            //style={{ marginBottom: 300 }}
            style={{ marginTop: 10 }}
            data={state.data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
    
        />
        <Button
            style={{ marginVertical: 100 }}
            onPress={() => navigation.navigate('Registro')}
            title="Cadastrar"
        />
        </>
    );
    
}



export default Main;