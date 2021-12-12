import React from "react";
import { Button, StyleSheet, Text, TextInput, View, Modal, Pressable } from "react-native";

export default function Cadastro({ navigation }) {

    const [nome, onChangeNome] = React.useState(null);
    const [idade, onChangeIdade] = React.useState(null);
    const [email, onChangeEmail] = React.useState(null);

    const [modalVisible, setModalVisible] = React.useState(false);

    return(
    <View style={styles.view}>

        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(!modalVisible);
            }}
        >
        <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <Text style={styles.modalText}>Nome: {nome}</Text>
                <Text style={styles.modalText}>Idade: {idade}</Text>
                <Text style={styles.modalText}>Email: {email}</Text>
                <Button
                    title= "Home"
                    onPress={() => {navigation.navigate("Home")}}
                />
                {/* <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
                >
                <Text style={styles.textStyle}>Hide Modal</Text>
                </Pressable> */}
            </View>
            </View>
        </Modal>


        <TextInput
            style={styles.input}
            onChangeText={onChangeNome}
            placeholder="Nome"
            value={nome}
        />
        <TextInput
            style={styles.input}
            onChangeText={onChangeIdade}
            value={idade}
            placeholder="Idade"
            keyboardType="numeric"
        />
        <TextInput
            style={styles.input}
            onChangeText={onChangeEmail}
            value={email}
            placeholder="Email"
        />

        <Button
            title="OK"
            onPress={() => setModalVisible(true)}
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
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      buttonOpen: {
        backgroundColor: "#F194FF",
      },
      buttonClose: {
        backgroundColor: "#2196F3",
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      }
    
});