import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Image, Icon, Text } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { doc, deleteDoc } from "firebase/firestore";
import { db, screen } from "../../../utils";
import { styles } from "./PubFavorites.styles";

export function PubFavorites(props) {
  const { pub } = props;
  const navigation = useNavigation();

  const goToPub = () => {
    navigation.navigate(screen.pub.tab, {
      screen: screen.pub.pub,
      params: {
        id: pub.id,
      },
    });
  };

  const onRemoveFavorite = async () => {
    try {
      await deleteDoc(doc(db, "favorites", pub.idFavorite));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TouchableOpacity onPress={goToPub}>
      <View style={styles.content}>
        <Image source={{ uri: pub.images[0] }} style={styles.image} />
        <View style={styles.infoContent}>
          <Text style={styles.name}>{pub.name}</Text>
          <Icon
            type="material-community"
            name="heart"
            color="#f00"
            size={35}
            containerStyle={styles.iconContainer}
            onPress={onRemoveFavorite}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
}
