import React, { useState, useEffect } from "react";
import { ScrollView, Dimensions } from "react-native";
import { doc, onSnapshot } from "firebase/firestore";
import { Carousel, Loading } from "../../../components/shared";
import {
  Header,
  Info,
  BtnReviewForm,
  Reviews,
  BtnFavorite,
} from "../../../components/Pub";
import { db } from "../../../utils";
import { styles } from "./PubScreen.styles";

const { width } = Dimensions.get("window");

export function PubScreen(props) {
  const { route } = props;
  const [pub, setPub] = useState(null);

  useEffect(() => {
    setPub(null);
    onSnapshot(doc(db, "pubs", route.params.id), (doc) => {
      setPub(doc.data());
    });
  }, [route.params.id]);

  if (!pub) return <Loading show text="Cargando bares..." />;
  return (
    <ScrollView style={styles.content}>
      <Carousel arrayImages={pub.images} height={250} width={width} />
      <Header pub={pub} />
      <Info pub={pub} />
      <BtnReviewForm idPub={route.params.id} />
      <Reviews idPub={route.params.id} />
      <BtnFavorite idPub={route.params.id} />
    </ScrollView>
  );
}
