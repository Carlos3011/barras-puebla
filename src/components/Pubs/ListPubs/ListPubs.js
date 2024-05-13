import React from "react";
import { View, FlatList, TouchableOpacity } from "react-native";
import { Text, Image } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { screen } from "../../../utils";
import { styles } from "./ListPubs.styles";

export function ListPubs(props) {
  const { pubs } = props;
  const navigation = useNavigation();

  const goToPub = (pub) => {
    navigation.navigate(screen.pub.pub, { id: pub.id });
  };

  return (
    <FlatList
      data={pubs}
      renderItem={(doc) => {
        const pub = doc.item.data();

        return (
          <TouchableOpacity onPress={() => goToPub(pub)}>
            <View style={styles.pub}>
              <Image source={{ uri: pub.images[0] }} style={styles.image} />

              <View>
                <Text style={styles.name}>{pub.name}</Text>
                <Text style={styles.info}>{pub.address}</Text>
                <Text style={styles.info}>{pub.description}</Text>
              </View>
            </View>
          </TouchableOpacity>
        );
      }}
    />
  );
}
