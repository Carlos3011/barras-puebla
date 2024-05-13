import React, { useState, useEffect } from "react";
import { View, ScrollView } from "react-native";
import { SearchBar, ListItem, Avatar, Icon, Text } from "react-native-elements";
import {
  collection,
  query,
  startAt,
  endAt,
  limit,
  orderBy,
  getDocs,
} from "firebase/firestore";
import { size, map } from "lodash";
import { useNavigation } from "@react-navigation/native";
import { Loading } from "../components/shared";
import { db, screen } from "../utils";

export function SearchScreen() {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      const q = query(
        collection(db, "pubs"),
        orderBy("name"),
        startAt(searchText),
        endAt(`${searchText}\u{ff}`),
        limit(20)
      );

      const snapshot = await getDocs(q);
      setSearchResults(snapshot.docs);
    })();
  }, [searchText]);

  const goToPub = (idPub) => {
    navigation.navigate(screen.pub.tab, {
      screen: screen.pub.pub,
      params: {
        id: idPub,
      },
    });
  };

  return (
    <>
      <SearchBar
        placeholder="Busca tu bar"
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
      />

      {!searchResults && <Loading show text="Cargando..." />}

      <ScrollView>
        {size(searchResults) === 0 ? (
          <View style={{ alignItems: "center", marginTop: 20 }}>
            <Text>No se han encontrado resultados</Text>
          </View>
        ) : (
          map(searchResults, (item) => {
            const data = item.data();

            return (
              <ListItem
                key={data.id}
                bottomDivider
                onPress={() => goToPub(data.id)}
              >
                <Avatar source={{ uri: data.images[0] }} rounded />
                <ListItem.Content>
                  <ListItem.Title>{data.name}</ListItem.Title>
                </ListItem.Content>
                <Icon type="material-community" name="chevron-right" />
              </ListItem>
            );
          })
        )}
      </ScrollView>
    </>
  );
}
