import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { scale, verticalScale } from 'react-native-size-matters'
import Modal from 'react-native-modal'
import LottieView from 'lottie-react-native'
import { useSelector } from 'react-redux'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { Font } from '../../../utils/font'
import { Colors } from '../../../utils/Color'

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const IncorrectModal = (props) => {
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
            size={scale(33)}
            color={'white'}
          />
        </View>
        <View
          style={{
            flex: 3,
            justifyContent: 'center',
            // alignItems: 'center',
            // backgroundColor: 'red',
            // alignItems: 'center',
          }}>
          <Text
            style={{
              color: Colors.White,
              fontSize: w >= 768 && h >= 1024 ? scale(18) : scale(14),
              fontFamily: Font.AnekBangla500,
              // top: scale(2)
              // fontSize: w >= 768 && h >= 1024 ? scale(18) : scale(14),
              // color: 'black',
              // textTransform: 'capitalize',
              // fontFamily: Font.Poppins600
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
                height: verticalScale(25),
              }}
              source={require('../Lottie/close.json')}
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
    // height: verticalScale(48),
    width: '95%',
    backgroundColor: Colors.Main,
    borderRadius: scale(12),
    bottom: scale(30),
    overflow: 'hidden',
    flexDirection: 'row',
    alignSelf: 'center',
    padding: scale(10)
    // height: verticalScale(60),
    // backgroundColor: '#435CA8',
    // backgroundColor: '#fff',
    // borderRadius: 10,
    // marginTop: scale(20),
    // flexDirection: 'row',
  },
})
export default IncorrectModal
