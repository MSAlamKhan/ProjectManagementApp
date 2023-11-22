import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Background from "./Background";
import BackIcon from "./BackIcon";
import { Colors } from "../../utils/Color";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import { Font } from "../../utils/font";
import { launchImageLibrary } from "react-native-image-picker";
import CustomButton from "./Button/CustomButton";
import CustomLotti from "./Modals/CustomLotti";
import { useNavigation } from "@react-navigation/native";

const ImageSelection = ({ route }) => {
  const navigation = useNavigation();
  const { type, title, getImages, getVideos } = route.params;
  const [imageChosen, setImageChosen] = useState([]);
  const [videoChosen, setVideoChosen] = useState([]);
  const [successModal, setSuccessModal] = useState(false);

  const onSubmit = () => {
    setSuccessModal(true);
    setTimeout(() => {
      setSuccessModal(false);
      getImages((prev) => [...prev, ...imageChosen]);
      getVideos((prev) => [...prev, ...videoChosen]);
      navigation.goBack();
    }, 2000);
  };

  const repetitions = Array.from({ length: 10 });
  const [images, setImages] = useState(Array.from({ length: 10 }, () => null));
  const [videos, setVideos] = useState(Array.from({ length: 10 }, () => null));

  const photoSave = (index) => {
    let options = {
      storageOptions: {
        mediaType: "photo",
        path: "image",
        includeExtra: true,
      },
      selectionLimit: 1,
    };

    launchImageLibrary(options, (res) => {
      if (res.didCancel) {
        console.log("didCancel");
      } else if (res.error) {
        console.log("error");
      } else {
        const newImages = [...images];
        const ele = res.assets[0];
        newImages[index] = ele.uri;
        setImages(newImages);
        setImageChosen((prevImages) => [
          ...prevImages,
          {
            name: ele.fileName,
            uri: ele.uri,
            type: ele.type,
          },
        ]);
      }
    });
  };

  const VideoSave = (index) => {
    const options = {
      title: "Select video",
      mediaType: "video",
      path: "video",
      quality: 1,
    };

    launchImageLibrary(options, (res) => {
      if (res.didCancel) {
        console.log("didCancel");
      } else if (res.error) {
        console.log("error");
      } else {
        const newVideo = [...videos];
        const ele = res.assets[0];
        newVideo[index] = ele.uri;
        setVideos(newVideo);
        setVideoChosen((prevVid) => [
          ...prevVid,
          {
            name: ele.fileName,
            uri: ele.uri,
            type: ele.type,
          },
        ]);
      }
    });
  };

  const removeImage = (index) => {
    const newImages = [...images];
    newImages[index] = null;
    setImages(newImages);

    const filteredImages = imageChosen.filter((_, i) => i !== index);
    setImageChosen(filteredImages);
  };

  const removeVideo = (index) => {
    const newVideos = [...videos];
    newVideos[index] = null;
    setVideos(newVideos);

    const filteredVideos = videoChosen.filter((_, i) => i !== index);
    setVideoChosen(filteredVideos);
  };

  return (
    <Background>
      <BackIcon />
      <Text style={styles.Heading}>{title}</Text>
      {type == "image" ? (
        <MaterialCommunityIcons
          size={scale(120)}
          color={Colors.IconColor}
          name={"camera-plus-outline"}
          style={styles.Icon}
        />
      ) : (
        <MaterialCommunityIcons
          size={scale(120)}
          color={Colors.IconColor}
          name={"movie-plus"}
          style={styles.Icon}
        />
      )}

      <View
        style={{
          flexWrap: "wrap",
          flexDirection: "row",
          justifyContent: "center",
          paddingHorizontal: moderateScale(10),
        }}
      >
        {repetitions.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.AddBox}
            onPress={() => {
              type == "image" ? photoSave(index) : VideoSave(index);
            }}
          >
            {type == "image" ? (
              <>
                {images[index] ? (
                  <>
                    <Image
                      source={{ uri: images[index] }}
                      style={styles.Image}
                    />
                    <TouchableOpacity
                      style={styles.RemoveButton}
                      onPress={() => removeImage(index)}
                    >
                      <AntDesign
                        name="closecircle"
                        size={scale(15)}
                        color={Colors.White}
                      />
                    </TouchableOpacity>
                  </>
                ) : (
                  <MaterialCommunityIcons
                    size={scale(24)}
                    color={Colors.IconColor}
                    name={"movie-plus-outline"}
                    style={styles.Icon}
                  />
                )}
              </>
            ) : (
              <>
                {videos[index] ? (
                  <>
                    <AntDesign
                      size={scale(24)}
                      color={Colors.White}
                      name={"checkcircle"}
                      style={styles.Icon}
                    />
                    <TouchableOpacity
                      style={styles.RemoveButton}
                      onPress={() => removeVideo(index)}
                    >
                      <AntDesign
                        name="closecircle"
                        size={scale(15)}
                        color={Colors.White}
                      />
                    </TouchableOpacity>
                  </>
                ) : (
                  <MaterialCommunityIcons
                    size={scale(24)}
                    color={Colors.IconColor}
                    name={"movie-plus-outline"}
                    style={styles.Icon}
                  />
                )}
              </>
            )}
          </TouchableOpacity>
        ))}
      </View>

      <CustomButton
        title={"Save"}
        onPress={onSubmit}
        containerRestyle={styles.Button}
      />

      <CustomLotti
        isVisible={successModal}
        source={require("../../assets/lotti/success.json")}
        Title={type == "image" ? "Images Added!" : "Videos Added!"}
      />
    </Background>
  );
};

export default ImageSelection;

const styles = StyleSheet.create({
  Heading: {
    color: Colors.Black,
    textAlign: "center",
    fontSize: scale(24),
    fontFamily: Font.AnekBangla500,
  },
  Icon: {
    alignSelf: "center",
  },

  AddBox: {
    backgroundColor: Colors.Black,
    height: verticalScale(60),
    width: scale(60),
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: verticalScale(5),
    marginVertical: verticalScale(10),
  },
  Image: {
    width: scale(60),
    height: scale(60),
  },

  Button: {
    width: "80%",
    alignSelf: "center",
    marginVertical: verticalScale(20),
  },
  RemoveButton: {
    position: "absolute",
    top: -7,
    right: -7,
  },
});
