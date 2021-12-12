import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Sobre({ navigation }) {
    return(

        <View style={styles.view}>
            <Text>
                
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis erat sit amet lorem vehicula varius vitae vitae sapien. Vestibulum nibh magna, consequat eu leo nec, sodales sagittis tellus. Proin eros ante, venenatis non sodales sed, lobortis et elit. Etiam convallis arcu si

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
        margin: 50
    },
});