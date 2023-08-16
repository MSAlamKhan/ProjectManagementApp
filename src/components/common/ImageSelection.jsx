import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Background from "./Background";
import BackIcon from "./BackIcon";
import { GlobalStyle } from "../../constant/GlobalStyle";
import { Colors } from "../../utils/Color";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import { Font } from "../../utils/font";
import ImagePickerModal from "./Modals/ImagePickerModal";
import { launchImageLibrary, launchCamera } from "react-native-image-picker";
import Entypo from "react-native-vector-icons/Entypo";
import CustomButton from "./Button/CustomButton";
import CustomLotti from "./Modals/CustomLotti";
import { useNavigation } from "@react-navigation/native";

const ImageSelection = ({ route }) => {
  const navigation = useNavigation();
  const { type, title,getImages } = route.params;

  const [successModal, setSuccessModal] = useState(false);
  const handleSubmit = () => {
    setSuccessModal(true);
    setTimeout(() => {
      setSuccessModal(false);
      getImages(imageChoosen);
      navigation.goBack();
    }, 2000);
  };

  const [imageChoosen, setImageChoosen] = useState([]);

  const handlePhoto = () => {};
  //Image Functionality
  const [imageModal, openImageModal] = useState(false);
  const [saveimage, setsaveimage] = useState(false);

  const [images, setImages] = useState(Array.from({ length: 10 }, () => null));

  const [close, setClose] = useState(false);

  const handleClose = (index) => {
    console.log("index", index);
  };

  const closeImageModal = () => {
    openImageModal(false);
  };

  const photosave = (index) => {
    console.log("index", index);
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
        console.log("ez pz");
      } else if (res.error) {
        console.log("ez pz win");
      } else if (res.customButton) {
        alert(res.customButton);
      } else {
        // setsaveimage(res.assets?.[0]?.uri);
        // closeImageModal();
        const newImages = [...images];
        newImages[index] = res.assets?.[0]?.uri;
        console.log("res.assets", res.assets);
        setImages(newImages);
        setImageChoosen((prevImages) => [...prevImages, res.assets[0]?.uri]);
        closeImageModal();
      }
    });
  };

  const camerasave = async () => {
    let options = {
      storageOptions: {
        mediaType: "photo",
        path: "image",
        includeExtra: true,
      },
      selectionLimit: 1,
    };

    await launchCamera(options, (res) => {
      if (res.didCancel) {
        console.log("ez pz");
      } else if (res.error) {
        console.log("ez pz win");
      } else if (res.customButton) {
        alert(res.customButton);
      } else {
        setsaveimage(res.assets?.[0]?.uri);
        closeImageModal();
      }
    });
  };

  const repetitions = Array.from({ length: 10 });

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
            style={styles.AddBox}
            key={index}
            onPress={() => photosave(index)}
          >
            {images[index] ? (
              <>
                <Image source={{ uri: images[index] }} style={styles.Image} />
              </>
            ) : type == "camera" ? (
              <MaterialCommunityIcons
                size={scale(24)}
                color={Colors.IconColor}
                name={"camera-plus-outline"}
                style={styles.Icon}
              />
            ) : (
              <MaterialCommunityIcons
                size={scale(24)}
                color={Colors.IconColor}
                name={"movie-plus-outline"}
                style={styles.Icon}
              />
            )}
          </TouchableOpacity>
        ))}
      </View>

      <CustomButton
        title={"Save"}
        onPress={handleSubmit}
        containerRestyle={styles.Button}
      />
      {/* <ImagePickerModal
        visible={imageModal}
        OnPressCamera={() => {
          camerasave();
        }}
        OnPressPhoto={() => {
          handlePhoto(index);
        }}
        onClose={closeImageModal}
      /> */}

      <CustomLotti
        isVisible={successModal}
        source={require("../../assets/lotti/success.json")}
        Title={"Images Added!"}
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
});
