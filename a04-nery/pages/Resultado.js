import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default function Resultado({ route, navigation }) {

    const { imc, peso, altura, resultado } = route.params;

    return(

        <View style={styles.view}>
            <Text>
                peso: {peso}
            </Text>
            <Text>
                altura: {altura}
            </Text>
            <Text>
                imc: {imc}
            </Text>
            <Text>
                resultado: {resultado}
            </Text>    
            <Button
                title= "Home"
                onPress={() => {navigation.navigate("Home")}}
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
});