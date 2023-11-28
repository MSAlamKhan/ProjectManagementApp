import React, {forwardRef} from 'react';
import {StyleSheet, View} from 'react-native';
import { scale} from 'react-native-size-matters';

import Entypo from 'react-native-vector-icons/Entypo';
import {SelectList} from 'react-native-dropdown-select-list';
import { Colors } from '../../../utils/Color';
import { Font } from '../../../utils/font';

const DropDown = forwardRef((props, ref) => {
  return (
    <View style={props.style}>
      <SelectList
        defaultOption={props.defaultOption}
        placeholder={props.placeholder}
        arrowicon={
          <Entypo name="chevron-down" size={scale(18)} color={Colors.Black} />
        }
        dropdownStyles={styles.dropdownStyles}
        dropdownItemStyles={styles.dropdownItemStyles}
        boxStyles={styles.boxStyles}
        dropdownTextStyles={styles.dropdownTextStyles}
        inputStyles={styles.inputStyles}
        search={false}
        data={props.items}
        setSelected={props.setValue}
        save={props.save}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  InputStyles: {
    width: '100%',
    height: '100%',
    color: Colors.Black,
    fontFamily: Font.Inter500,
    fontSize: 14,
  },
  smallbox: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 5,
    width: '100%',
    paddingHorizontal: 15,
    height: 42,
    backgroundColor: Colors.White,
  },
  boxStyles: {
    height: 60,
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 10,
    borderColor: Colors.Non,
    backgroundColor: Colors.White,
  },
  inputStyles: {
    color: Colors.Black,
    fontSize: 14,
    fontFamily: Font.Inter500,
  },
  dropdownTextStyles: {
    color: Colors.Black,
  },
  dropdownItemStyles: {
    backgroundColor: Colors.Non,
  },
  dropdownStyles:{
    backgroundColor:Colors.White
    ,borderColor:Colors.Non
  }
});
export default DropDown;
