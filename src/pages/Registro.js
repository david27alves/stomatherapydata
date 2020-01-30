import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, TextArea } from 'react-native-paper';


function Registro(state, setState) {
    return (
        <View style={styles.container}>
            <TextInput
                mode='outlined'
                label='Paciente'
                value={state.text}
                onChangeText={text => setState({ text })}
            />
            <TextInput
                mode='outlined'
                label='Enfermeiro'
                value={state.text}
                onChangeText={text => setState({ text })}
            />
            <TextInput
                mode='outlined'
                label='Data'
                value={state.text}
                onChangeText={text => setState({ text })}
            />

            <TextInput
                mode='outlined'
                label='Diagnostico'
                value={state.text}
                onChangeText={text => setState({ text })}
            />

            <TextInput
                mode='outlined'
                label='Indicador'
                value={state.text}
                onChangeText={text => setState({ text })}
            />



<Button mode='flat' onPress={() => console.log('Pressed')}>
    Salvar
  </Button>
            

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        paddingHorizontal: 30,
        marginTop: 30,
    }
});

export default Registro;