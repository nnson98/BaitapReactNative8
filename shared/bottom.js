import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Icon, Right, Body} from 'native-base';

export default function Bottom() {
  return (
    <View style={styles.container}>
      <View style={styles.weekContainer}>
        <View style={styles.weekContent}>
          <View style={styles.week}>
            <Text style={styles.txtWeek}>Tuần</Text>
            <Right>
              <Text style={styles.txtWeekNumber}>40</Text>
            </Right>
          </View>
          <Body>
            <Text style={styles.txtWeekPrice}>24.00</Text>
          </Body>
        </View>
      </View>

      <View style={styles.weekContainer}>
        <View style={styles.weekContent}>
          <View style={styles.week}>
            <Text style={styles.txtWeek}>Tháng</Text>
            <Right>
              <Text style={styles.txtWeekNumber}>184</Text>
            </Right>
          </View>
          <Body>
            <Text style={styles.txtWeekPrice}>148.00</Text>
          </Body>
        </View>
      </View>

      <View style={styles.plusContainer}>
        <Icon type="AntDesign" name="plus" style={styles.icon} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: hp('13%'),
  },

  txtWeek: {
    fontWeight: 'bold',
    fontSize: 15,
  },

  txtWeekNumber: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#F00',
  },

  txtWeekPrice: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#F00',
  },

  plusContainer: {
    backgroundColor: '#F00',
    width: wp('33.3%'),
    justifyContent: 'center',
    alignItems: 'center',
  },

  weekContainer: {
    backgroundColor: '#FFF',
    width: wp('33.3%'),
    borderWidth: 1,
    borderColor: '#e8e8e8',
  },
  week: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },

  weekContent: {
    marginTop: hp('3%'),
    marginHorizontal: wp('5%'),
  },
  icon: {
    fontSize: 30,
    color: '#FFF',
  },
});
