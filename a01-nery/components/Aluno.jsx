import { Text, View } from "react-native"
import React from 'react';

export default function Aluno () {

    let aluno = {
        nome: "Supimpa da Silva",
        idade: 22,
        cidade: "Quixadá",
        curso: "Design Digital"
    }

    return(
        
        <View style={{alignItems:"center"}}>

            <Text style={{fontWeight:"bold", color:"#222", fontSize:"24px"}}>{aluno.nome}</Text>
            <Text>{aluno.idade} anos</Text>
            <Text>{aluno.cidade}</Text>
            <Text>{aluno.curso}</Text>
            
        </View>

    );
}