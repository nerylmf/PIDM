import React from "react";
import { Image } from "react-native";


export default function Corpo () {
    
    const imgURL = "https://m.leiaja.com/sites/default/files/field/image/politica/2020/05/WhatsApp%20Image%202020-05-15%20at%2016.25.33.jpeg";
    
    return (

        <Image source={{uri:imgURL}} style={{width:100, height:100}}></Image>
        
    );
}