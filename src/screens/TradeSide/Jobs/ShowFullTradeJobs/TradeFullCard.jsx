import React from 'react'
import { styles } from './style'
import { View, Text,Pressable } from 'react-native'
import { GlobalStyle } from '../../../../constant/GlobalStyle'
import moment from 'moment'
import { Colors } from '../../../../utils/Color'

const TradeFullCard = ({data,onPress}) => {
  return (
    <Pressable
      android_ripple={{
        color: Colors.Main,
      }}
      onPress={onPress}
      style={[styles.Main]}
    >
      <View style={GlobalStyle.RowBetween}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={[styles.Heading]}>Title:&nbsp;</Text>
          <Text style={styles.DescText}>{data?.task_title}</Text>
        </View>
       
      </View>

      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text style={[styles.Heading]}>budget:&nbsp;</Text>
        <Text style={styles.DescText}>${Number(data?.costing).toFixed(2)}</Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text style={[styles.Heading]}>Start Date:&nbsp;</Text>
        <Text style={styles.DescText}>
          {moment(data?.start_date).format("MMM Do YY")}
        </Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text style={[styles.Heading]}>Dead line:&nbsp;</Text>
        <Text style={styles.DescText}>
          {moment(data?.deadline_date).format("MMM Do YY")}
        </Text>
      </View>

    </Pressable>
  )
}

export default TradeFullCard