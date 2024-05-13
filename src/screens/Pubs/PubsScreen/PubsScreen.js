import React, { useState, useEffect } from "react";
import {View, Text} from "react-native";
import { Icon } from "react-native-elements";
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { LoadingModal } from '../../../components/shared';
import { ListPubs } from '../../../components/Pubs';
import { screen, db } from "../../../utils";
import { styles } from './PubsScreen.styles';

export function PubsScreen(props) {
    const { navigation } = props;
    const [currentUser, setCurrentUser] = useState(null);
    const [pubs, setPubs] = useState(null);

    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
        });
    }, []);

    useEffect(() => {
        const q = query(
            collection(db, 'pubs'),
            orderBy('ceratedAt', 'desc'),
        );

        onSnapshot(q, (snapshot) => {
            setPubs(snapshot.docs);
        });
    }, []);

    const goToAddPub = () => {
        navigation.navigate(screen.pub.addPub);
    }

    return (
        <View styles={styles.content}>
            {!pubs ? (
                <LoadingModal show text='Cargando..'/>
            ) : (
                <ListPubs pubs={pubs}/>
            )}

            {currentUser && (
                <Icon
                    reverse
                    type="material-community"
                    name="plus"
                    color="#FF4D4D"
                    containerStyle={styles.btnContainer}
                    onPress={goToAddPub}
                />
            )}
            
        </View>
    );
}