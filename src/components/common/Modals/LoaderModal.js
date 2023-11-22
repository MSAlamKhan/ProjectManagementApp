import React from 'react'
import Modal from 'react-native-modal'
import { Colors } from '../../../utils/Color'
import { ActivityIndicator,  View } from 'react-native'

const Loader = ({onBackdropPress,isVisible}) => {
  return (
    <Modal
      onBackdropPress={onBackdropPress}
      isVisible={isVisible}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <ActivityIndicator
          size="large"
          color={Colors.Main}
        />
      </View>
    </Modal>
  )
}

export default Loader
