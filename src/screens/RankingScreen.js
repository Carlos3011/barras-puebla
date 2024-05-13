import React, { useState, useEffect } from "react";
import { ScrollView } from "react-native";
import {
  collection,
  query,
  orderBy,
  limit,
  onSnapshot,
} from "firebase/firestore";
import { map } from "lodash";
import { PubRanking } from "../components/Pubs";
import { db } from "../utils";

export function RankingScreen() {
  const [pubs, setPubs] = useState(null);

  useEffect(() => {
    const q = query(
      collection(db, "pubs"),
      orderBy("raingMedia", "desc"),
      limit(10)
    );

    onSnapshot(q, (snapshot) => {
      setPubs(snapshot.docs);
    });
  }, []);

  return (
    <ScrollView>
      {map(pubs, (pub, index) => (
        <PubRanking key={index} index={index} pub={pub.data()} />
      ))}
    </ScrollView>
  );
}
