import React from "react";
import { View } from "react-native";
import { Text, ListItem, Icon } from "react-native-elements";
import { map } from "lodash";
import { Map } from "../../shared";
import { styles } from "./Info.styles";

export function Info(props) {
  const { pub } = props;

  const listInfo = [
    {
      text: pub.address,
      iconType: "material-community",
      iconName: "map-marker",
    },
  ];

  return (
    <View style={styles.content}>
      <Text style={styles.title}> Informacion sobre el bar </Text>
      <Map location={pub.location} name={pub.name} />
      {map(listInfo, (item, index) => (
        <ListItem key={index} bottomDivider>
          <Icon type={item.iconType} name={item.iconName} color="#FF4D4D" />
          <ListItem.Content>
            <ListItem.Title>{item.text}</ListItem.Title>
          </ListItem.Content>
        </ListItem>
      ))}
    </View>
  );
}
