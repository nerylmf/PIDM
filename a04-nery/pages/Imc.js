import React from "react";
import { View, TextInput, StyleSheet, Button } from "react-native";

export default function Imc ({ navigation }){

    const [peso, onChangePeso] = React.useState(null);
    const [altura, onChangeAltura] = React.useState(null);

    return(

        <View style={styles.view}>
        <TextInput
            style={styles.input}
            onChangeText={onChangePeso}
            placeholder="Peso (kg)"
            keyboardType="numeric"
            value={peso}
        />
        <TextInput
            style={styles.input}
            onChangeText={onChangeAltura}
            value={altura}
            placeholder="Altura (cm)"
            keyboardType="numeric"
        />

        <Button
            title="OK"
            onPress={() => {

                let imc = peso / (altura * altura) * 10000;
                
                let resultado;
                if(imc < 17){resultado = "Muito abaixo do peso"}
                else if(imc < 18.49){resultado = "Abaixo do peso"}
                else if(imc < 24.99){resultado = "Peso normal"}
                else if(imc < 29.99){resultado = "Acima do peso"}
                else if(imc < 34.99){resultado = "Obesidade I"}
                else if(imc < 39.99){resultado = "Obesidade II"}
                else {resultado = "Obesidade III"}


                navigation.navigate('Resultado', {    
                    peso: peso,
                    altura: altura,                
                    imc: imc,  
                    resultado: resultado                  
                });
            }}
        />
    </View>

    );
}



const styles = StyleSheet.create({
    view: { 
        flex:1,
        alignItems: 'center', 
        justifyContent: 'center',
    },
    input: { 
        width: 300,     
        height: 40,
        margin: 5,
        borderWidth: 1,
        padding: 10,
    }
    
});