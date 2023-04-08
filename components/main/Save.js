import React, { useState } from 'react';
import { View, Image } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

import { getAuth } from "firebase/auth";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import 'firebase/storage';
import 'firebase/auth';

import { app }  from '../../database/firebaseConfig';

const auth = getAuth(app);
const storage = getStorage(app);

console.log('storage: ', storage)

const Save = ({ navigation, route }) => {
  const { image } = route.params;
  const [caption, setCaption] = useState('');

  const uploadImage = async () => {
    const childPath = `post/${auth.currentUser.uid}/${Math.random().toString(36)}`;
    const res = await fetch(image);
    const blob = await res.blob();

    const storageRef = ref(storage, childPath)

    uploadBytes(storageRef, blob).then((snapshot) => {
      console.log('Uploaded a blob or file!');
    });
  };

  return (
    <View style={{ flex: 1 }}>
      <Image source={{ uri: image }} />
      <TextInput
        placeholder='Enter a description...'
        onChangeText={(caption) => setCaption(caption)}
      />
      <Button onPress={() => uploadImage()}>Save</Button>
    </View>
  );
}


export default Save;