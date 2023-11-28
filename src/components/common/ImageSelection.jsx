import BackIcon from "./BackIcon";
import Background from "./Background";
import { Font } from "../../utils/font";
import React, { useState } from "react";
import { Colors } from "../../utils/Color";
import CustomLotti from "./Modals/CustomLotti";
import CustomButton from "./Button/CustomButton";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import ImagePickerModal from "./Modals/ImagePickerModal";
import AntDesign from "react-native-vector-icons/AntDesign";
import { SELECT_IMAGE, SELECT_VIDEO } from "../../redux/reducer";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const ImageSelection = ({ route }) => {
  const { type, title, getImages, getVideos } = route.params;
  const isImage = type == "image";
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const getSaveImage = useSelector((state) => state.select_image) || [];
  const getSaveVideo = useSelector((state) => state.select_video) || [];

  const [imageChosen, setImageChosen] = useState([]);
  const [videoChosen, setVideoChosen] = useState([]);
  const [successModal, setSuccessModal] = useState(false);
  const [showModal, setShowModal] = useState({ isOpen: false, index: null });

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

  const handleImageSelection = (index, selectedImage) => {
    const newImages = [...getSaveImage]; // Create a copy of the existing selected images

    if (newImages[index]) {
      // If an image already exists at this index, replace it
      newImages[index] = selectedImage;
    } else {
      // If no image exists at this index, add the new selected image
      newImages.push(selectedImage);
    }

    // Dispatch action to update selected images in Redux state
    dispatch({ type: SELECT_IMAGE, payload: newImages });
  };

  const handleVideoSelection = (index, selectedVideo) => {
    const newVideo = [...getSaveVideo]; // Create a copy of the existing selected images

    if (newVideo[index]) {
      // If an image already exists at this index, replace it
      newVideo[index] = selectedVideo;
    } else {
      // If no image exists at this index, add the new selected image
      newVideo.push(selectedVideo);
    }

    // Dispatch action to update selected images in Redux state
    dispatch({ type: SELECT_VIDEO, payload: newVideo });
  };
  const CameraImageSave = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: "images",
      },
    };

    launchCamera(options, (res) => {
      if (res.didCancel) {
        console.log("didCancel");
      } else if (res.error) {
        console.log("error");
      } else {
        const newImages = [...images];
        const ele = res.assets[0];
        newImages[showModal.index] = ele.uri;
        setImages(newImages);
        dispatch({ type: SELECT_IMAGE, payload: newImages });
        handleImageSelection(showModal.index, {
          name: ele.fileName,
          uri: ele.uri,
          type: ele.type,
        });
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
  const photoSave = () => {
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
        newImages[showModal.index] = ele.uri;
        setImages(newImages);
        dispatch({ type: SELECT_IMAGE, payload: newImages });
        handleImageSelection(showModal.index, {
          name: ele.fileName,
          uri: ele.uri,
          type: ele.type,
        });
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

  const VideoSave = () => {
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
        newVideo[showModal.index] = ele.uri;
        setVideos(newVideo);
        dispatch({ type: SELECT_VIDEO, payload: newVideo });
        handleVideoSelection(showModal.index, {
          name: ele.fileName,
          uri: ele.uri,
          type: ele.type,
        });
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

  const CameraVideoSave = () => {
    let options = {
      title: "Video Picker",
      mediaType: "video",
      storageOptions: {
        skipBackup: true,
        path: "images",
      },
    };

    launchCamera(options, (res) => {
      if (res.didCancel) {
        console.log("didCancel");
      } else if (res.error) {
        console.log("error");
      } else { const newVideo = [...videos];
      const ele = res.assets[0];
      newVideo[showModal.index] = ele.uri;
      setVideos(newVideo);
      dispatch({ type: SELECT_VIDEO, payload: newVideo });
      handleVideoSelection(showModal.index, {
        name: ele.fileName,
        uri: ele.uri,
        type: ele.type,
      });
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

    const filteredImages = getSaveImage.filter((_, i) => i !== index);
    // setImageChosen(filteredImages);
    dispatch({ type: SELECT_IMAGE, payload: filteredImages });
  };

  const removeVideo = (index) => {
    const newVideos = [...videos];
    newVideos[index] = null;
    setVideos(newVideos);

    const filteredVideos = getSaveVideo.filter((_, i) => i !== index);
    // setVideoChosen(filteredVideos);
    dispatch({ type: SELECT_VIDEO, payload: filteredVideos });
  };

  const handleSubmit = (index) => {
    setShowModal({ isOpen: true, index });
  };
  const closeCamera = () => {
    setShowModal((prev) => ({ prev, isOpen: false }));
  };

  return (
    <Background>
      <BackIcon />
      <Text style={styles.Heading}>{title}</Text>
      {isImage ? (
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
            onPress={() => handleSubmit(index)}
          >
            {isImage ? (
              <>
                {getSaveImage[index] ? (
                  <>
                    <Image
                      source={{ uri: getSaveImage[index].uri }}
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
                {getSaveVideo[index] ? (
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
        Title={isImage ? "Images Added!" : "Videos Added!"}
      />
      <ImagePickerModal
        visible={showModal.isOpen}
        photoText={isImage ? "Take a picture" : "Take a picture"}
        cameraText={isImage ? "Upload picture" : "Upload Video"}
        cameraName={isImage ? "camera" : "video-camera"}
        photoName={isImage ? "photo" : "video-library"}
        OnPressCamera={() => {
          isImage ? CameraImageSave() : CameraVideoSave();
          closeCamera();
        }}
        OnPressPhoto={() => {
          isImage ? photoSave() : VideoSave();
          closeCamera();
        }}
        onClose={closeCamera}
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
