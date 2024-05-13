import React, { useState, useEffect } from "react";
import { ScrollView } from "react-native";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {
  doc,
  getDoc,
  collection,
  query,
  where,
  onSnapshot,
} from "firebase/firestore";
import { size, map } from "lodash";
import {
  UserNotLogged,
  NotFoundPubs,
  PubFavorites,
} from "../components/Favorites";
import { Loading } from "../components/shared";
import { db } from "../utils";

export function FavoritesScreen() {
  const [hasLogged, setHasLogged] = useState(null);
  const [pubs, setPubs] = useState(null);
  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setHasLogged(user ? true : false);
    });
  }, []);

  useEffect(() => {
    if (hasLogged) {
      const q = query(
        collection(db, "favorites"),
        where("idUser", "==", auth.currentUser.uid)
      );

      onSnapshot(q, async (snapshot) => {
        let pubsArray = [];
        for await (const item of snapshot.docs) {
          const data = item.data();
          const docRef = doc(db, "pubs", data.idPub);
          const docSnap = await getDoc(docRef);
          const newData = docSnap.data();
          newData.idFavorite = data.id;

          pubsArray.push(newData);
        }
        setPubs(pubsArray);
      });
    }
  }, [hasLogged]);

  if (!hasLogged) return <UserNotLogged />;

  if (!pubs) return <Loading show text="Cargando..." />;

  if (size(pubs) === 0) return <NotFoundPubs />;

  return (
    <ScrollView>
      {map(pubs, (pub) => (
        <PubFavorites key={pub.id} pub={pub} />
      ))}
    </ScrollView>
  );
}
