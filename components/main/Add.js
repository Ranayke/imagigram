import React, { useState, useEffect } from "react";
import { Camera, CameraType } from "expo-camera";
import { Text, Button, View } from "react-native";
import * as ImagePicker from "expo-image-picker";

export default function Add() {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [hasGalleryPermission, setHasGalleryPermission] = useState(null);
  const [camera, setCamera] = useState(null);
  const [image, setImage] = useState();
  const [type, setType] = useState(CameraType.back);

  useEffect(() => {
    (async () => {
      const cameraRequest = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraRequest.status === "granted");
      const galleryRequest =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      setHasGalleryPermission(galleryRequest.status === "granted");
    })();
  }, []);

  const takePicture = async () => {
    if (camera) {
      const data = await camera.takePictureAsync(null);
      setImage(data.uri);
    }
  };

  if (hasCameraPermission === null || hasGalleryPermission === null) {
    return <View />;
  }
  if (hasCameraPermission === false || hasGalleryPermission === null) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <Camera ref={(ref) => setCamera(ref)} style={{ flex: 1, aspectRatio: 1 }} type={type} ratio={"1:1"} />
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "flex-end",
          marginBottom: "1rem",
        }}
      >
        <Button
          title="Flip Camera"
          onPress={() => {
            setType(
              type === Camera.Constants.Type.back
                ? Camera.Constants.Type.front
                : Camera.Constants.Type.back
            );
          }}
        />
        <Button
          title="Take Picture"
          icon="camera-plus-outline"
          onPress={() => takePicture()}
        />
      </View>
    </View>
  );
}
