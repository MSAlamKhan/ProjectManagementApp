

import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { scale, verticalScale } from 'react-native-size-matters'
import Modal from 'react-native-modal'
import { useSelector } from 'react-redux'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { Colors } from '../../../utils/Color'
import { Font } from '../../../utils/font'

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const TickModal = (props) => {
  const Theme = useSelector(state => state.mode)
  return (
    <Modal
      backdropOpacity={0.4}
      onBackdropPress={props.onBackdropPress}
      isVisible={props.isVisible}
      animationIn="lightSpeedIn"
      animationInTiming={400}
      animationOut="lightSpeedOut"
      animationOutTiming={400}
      style={{
        flex: 1,
        justifyContent: 'flex-end',
      }}>
      <View style={styles.ModalMain}>
        <View style={{
          flex: 0.6,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <MaterialIcons
            name='info-outline'
            size={scale(35)}
            color={'white'}
          />
        </View>
        <View
          style={{
            flex: 3,
            justifyContent: 'center',
            // alignItems: 'center',
          }}>
          <Text
            style={{
              // fontSize: w >= 768 && h >= 1024 ? scale(18) : scale(15),
              // //   fontFamily: Font.Poppins600,
              // color: 'black',
              // textTransform: 'capitalize',
              color: Colors.White,
              fontSize: w >= 768 && h >= 1024 ? scale(18) : scale(14),
              fontFamily: Font.AnekBangla500,
              top: scale(2),
              // paddingRight: scale(5)
            }}>
            {props.text}
          </Text>
        </View>
        {/* <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity
            onPress={props.onPress}
            style={{
              height: '50%',
              width: '50%',
              backgroundColor: 'white',
              borderRadius: 100,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <LottieView
              style={{
                height: verticalScale(70),
              }}
              source={require('../Lottie/tick.json')}
              autoPlay
              loop
              speed={0.7}
            />
          </TouchableOpacity>
        </View> */}
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  ModalMain: {
    // height: verticalScale(70),
    // width: '95%',
    backgroundColor: Colors.Main,
    borderRadius: scale(12),
    bottom: scale(25),
    overflow: 'hidden',
    flexDirection: 'row',
    alignSelf: 'center',
    paddingVertical: verticalScale(8)
    // height: verticalScale(70),
    // backgroundColor: '#435CA8',
    // backgroundColor: '#fff',
    // borderRadius: 10,
    // marginTop: scale(20),
    // flexDirection: 'row',
  },
})
export default TickModal
