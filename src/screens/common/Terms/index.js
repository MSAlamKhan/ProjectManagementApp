import React, { useCallback, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';

import RenderHtml from 'react-native-render-html';
import { BASE_URL } from '../../../utils/Base_urls';
import CustomButton from '../../../components/common/Button/CustomButton';
import { Colors } from '../../../utils/Color';
import { Font } from '../../../utils/font';
import { GlobalStyle } from '../../../constant/GlobalStyle';
import Loader from '../../../components/common/Modals/LoaderModal';
import BackIcon from '../../../components/common/BackIcon';
import { useFocusEffect } from '@react-navigation/native';

const Index = ({ navigation, route }) => {
  const { type } = route.params;
  const WhatToShow = type == 'term' ? 'Terms & Condition' : 'Help';
  const [getData, setData] = useState('');
  const [loading, setLoading] = useState(false);
  const { width } = Dimensions.get('window');
  const onSubmit = () => {
    navigation.goBack();
  };

  const getHtml = async () => {
    setLoading(true);
    try {
      let base_url = `${BASE_URL}setting`;
      let myData = new FormData();

      myData.append('type', WhatToShow);

      const response = await fetch(base_url, {
        body: myData,
        method: 'post',
      });
      const responseData = await response.json();
      if (responseData.success.status === 200) {
        setData(responseData.success?.data?.message);
        setLoading(false);
      }
    } catch (error) {
      console.log('error', error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      getHtml();
    }, []),
  );

  console.log('getData', getData)


  let result = getData?.replace(
    /<div(.*?)>/gi,
    `<div style='color: ${'#000'};font-family: ${Font.AnekBangla500
    }; font-size: ${'15px'};'>`,
  );

  const source = {
    html: result,
  };

  return (
    <SafeAreaView style={GlobalStyle.safeAreaStyle}>
      <View>
      <BackIcon />
      </View>
      <View style={styles.MainView}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={styles.ImageBox}>
            <Image
              resizeMode="contain"
              source={require('../../../assets/images/applogo.png')}
              style={GlobalStyle.Image}
            />
          </View>
          <RenderHtml contentWidth={width} source={source} />

          <CustomButton
            onPress={onSubmit}
            title="Accept and Continue"
            containerRestyle={styles.btn}
          />
          <Loader isVisible={loading} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  MainView: {
    width: '90%',
    height: '90%',
    alignSelf: 'center',
    borderRadius: scale(20),
    backgroundColor: "#97C1F2",
    paddingHorizontal: moderateScale(15),
  },
  btn:{
    marginVertical: verticalScale(20),
  },
  ImageBox:{
    height: scale(150),
    width: scale(250),
    alignSelf: 'center',
  }
});
export default Index;
