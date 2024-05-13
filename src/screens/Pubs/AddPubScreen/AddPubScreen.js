import React from 'react';
import { ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import { useFormik } from 'formik';
import { v4 as uuid} from 'uuid';
import { doc, setDoc } from 'firebase/firestore';
import { useNavigation } from '@react-navigation/native';
import { InfoForm, UploadImagesForm, ImagePub } from '../../../components/Pubs/AddPubs';
import { db } from '../../../utils';
import { initialValues, validationSchema } from './AddPubScreen.data'
import { styles } from './AddPubScreen.styles';

export function AddPubScreen() {
  const navigation = useNavigation();

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        const newData = formValue;
        newData.id = uuid();
        newData.ceratedAt = new Date(); //modificar para tener bien en la base de datos

        //Sin factorizar

        //const myDb = doc(db, 'pubs', newData.id);
        //await setDoc(myDb, newData);

        //Con factorizacion
        await setDoc(doc(db, 'pubs', newData.id), newData);

        navigation.goBack();

      } catch (error) {
        console.log(error)
      }
    },
  });

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <ImagePub formik={formik} />
      <InfoForm formik={formik} />

      <UploadImagesForm  formik={formik} />

      <Button
        title="Crear bar"
        buttonStyle={styles.addPub}
        onPress={formik.handleSubmit}
        loading={formik.isSubmitting}
      />
    </ScrollView>
  )
}