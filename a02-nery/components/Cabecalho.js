import React from "react";
import { Text, View } from "react-native";



export default function Cabecalho (props) {
    return(
        <View>
            
            <Text>{props.nome}</Text>
            <Text>{props.curso}</Text>

        </View>  
        

    );
}