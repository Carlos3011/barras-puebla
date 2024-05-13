import React from "react";
import {  ScrollView } from "react-native";
import { Text, Button, Image } from "react-native-elements";
import { useNavigation } from "@react-navigation/native"
import { screen } from "../../../utils";
import { styles } from "./UserGuestScreen.styles";

export  function UserGuestScreen() {

  const navigation = useNavigation();
  
  const goToLogin = () => {
    navigation.navigate(screen.account.login);
  }

  return (
    <ScrollView centerContent={true} style={styles.viewBody}>
      <Image
        source={require("../../../../assets/img/user-guest.png")}
        style={styles.image}
      />
      <Text style={styles.title}>Consulta tu perfil de Barras Puebla</Text>
      <Text style={styles.description}>
        Como describirias tu lugar seguro, tu lugar favorito? Busca y visualiza los mejores
        bar o antro de Puebla de una forma sencilla, vota cual te ha gustado mas y
        comenta como ha sido tu experiencia.
      </Text>

      
      <Button 
        title="Ver tu perfil" 
        onPress={ goToLogin }
        buttonStyle={styles.btnStyle}
      />
      
    </ScrollView>
  )
}