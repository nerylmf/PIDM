import React from "react";
import { Button, Text, View } from "react-native";


import Cadastro from "./Cadastro";
import Imc from "./Imc";
import Sobre from "./Sobre";



export default function Home({ navigation }){
    return(               
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button
                title="Cadastro"
                onPress={() => navigation.navigate('Cadastro')}
            />
            <Button
                title="Imc"
                onPress={() => navigation.navigate('Imc')}
            />
            <Button
                title="Sobre"
                onPress={() => navigation.navigate('Sobre')}
            />
        </View>
        
    );
}