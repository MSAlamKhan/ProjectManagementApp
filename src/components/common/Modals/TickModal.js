

import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { scale, verticalScale } from 'react-native-size-matters'
import Modal from 'react-native-modal'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { Colors } from '../../../utils/Color'
import { Font } from '../../../utils/font'

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const TickModal = ({ onBackdropPress, isVisible, text }) => {
  return (
    <Modal
      backdropOpacity={0.4}
      onBackdropPress={onBackdropPress}
      isVisible={isVisible}
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
          <AntDesign
            name='checkcircle'
            size={scale(35)}
            color={'white'}
          />
        </View>
        <View
          style={{
            flex: 3,
            justifyContent: 'center',
          }}>
          <Text
            style={styles.Text}>
            {text}
          </Text>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  ModalMain: {
    backgroundColor: Colors.Main,
    borderRadius: scale(12),
    bottom: scale(25),
    overflow: 'hidden',
    flexDirection: 'row',
    alignSelf: 'center',
    paddingVertical: verticalScale(8)
  },
  Text: {
    color: Colors.White,
    fontSize: scale(14),
    fontFamily: Font.AnekBangla500,
    top: scale(2),
  }
})
export default TickModal
