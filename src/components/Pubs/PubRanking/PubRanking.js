import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Image, Text, Rating, Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { screen } from "../../../utils";
import { styles } from "./PubRanking.styles";

export function PubRanking(props) {
  const { pub, index } = props;
  const navigation = useNavigation();

  const goToPub = () => {
    navigation.navigate(screen.pub.tab, {
      screen: screen.pub.pub,
      params: {
        id: pub.id,
      },
    });
  };

  const renderMedal = () => {
    if (index > 2) return null;

    let color = "";
    if (index === 0) color = "#FFD700";
    if (index === 1) color = "#C0C0C0";
    if (index === 2) color = "#CD7F32";

    return (
      <Icon
        type="material-community"
        name="medal-outline"
        color={color}
        containerStyle={styles.medal}
      />
    );
  };

  return (
    <TouchableOpacity onPress={goToPub}>
      <View style={styles.content}>
        <Image source={{ uri: pub.images[0] }} style={styles.image} />
        <View style={styles.infoContetn}>
          <View style={styles.nameContent}>
            {renderMedal()}
            <Text style={styles.name}>{pub.name}</Text>
          </View>

          <Rating imageSize={15} readonly startingValue={pub.raingMedia} />
        </View>
        <Text style={styles.description}>{pub.description}</Text>
      </View>
    </TouchableOpacity>
  );
}
