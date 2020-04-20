import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Icon, Right, Left} from 'native-base';
import moment from 'moment';

export default function DatePicker() {
  useEffect(() => {
    toggleDay();
  }, []);

  const [today, setDay] = useState({
    day: '',
    titleDate: '',
    firstDay: '',
    lastDay: '',
    homnay: '',
    alltitle: '',
  });

  const toggleDay = () => {
    const now = new Date();
    const days = [
      'Thứ 2',
      'Thứ 3',
      'Thứ 4',
      'Thứ 5',
      'Thứ 6',
      'Thứ 7',
      'Chủ Nhật',
    ];
    const homnay = days[now.getDay() - 1];
    const date = now.getDate();
    const month = now.getMonth() + 1;
    const year = now.getFullYear();
    const firstday =
      moment()
        .startOf('week')
        .get('date') + 1;
    const firstmonth =
      moment()
        .startOf('week')
        .get('month') + 1;

    const lastday =
      moment()
        .endOf('week')
        .get('date') + 1;
    const lastmonth =
      moment()
        .endOf('week')
        .get('month') + 1;

    setDay({
      homnay: homnay,
      day: homnay + ' - ' + date + '/' + month,
      titleDate: 'Tháng ' + month + ' / ' + year,
      firstDay: firstday + '/' + firstmonth,
      lastDay: lastday + '/' + lastmonth,
      alltitle: homnay + ' Ngày ' + date + ' Tháng ' + month + ' Năm ' + year,
    });
  };

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.today}>
          <Text style={styles.txttoday}>Hôm nay</Text>
          <Text style={styles.txtdate}>{today.day}</Text>
        </View>

        <View style={styles.date}>
          <Left>
            <Icon
              type="AntDesign"
              name="left"
              style={{fontSize: 20, color: '#f14b42'}}
            />
          </Left>

          <View style={styles.monthContainer}>
            <Text style={styles.titleDate}>{today.titleDate}</Text>
            <Text style={styles.firstlast}>
              {today.firstDay} - {today.lastDay}
            </Text>
          </View>

          <Right>
            <Icon
              type="AntDesign"
              name="right"
              style={{fontSize: 20, color: '#f14b42'}}
            />
          </Right>
        </View>
      </View>
      <View style={styles.setDay}>
        <View style={styles.setDayContainer}>
          <View style={styles.setDayItem}>
            <Text
              style={
                today.homnay === 'Thứ 2'
                  ? styles.txtsetDayItemChoice
                  : styles.txtsetDayItem
              }>
              T2
            </Text>
            <Text
              style={
                today.homnay === 'Thứ 2'
                  ? styles.txtsetDayPriceChoice
                  : styles.txtsetDayPrice
              }>
              0.00
            </Text>
          </View>
          <View style={styles.setDayItem}>
            <Text
              style={
                today.homnay === 'Thứ 3'
                  ? styles.txtsetDayItemChoice
                  : styles.txtsetDayItem
              }>
              T3
            </Text>
            <Text
              style={
                today.homnay === 'Thứ 3'
                  ? styles.txtsetDayPriceChoice
                  : styles.txtsetDayPrice
              }>
              0.00
            </Text>
          </View>
          <View style={styles.setDayItem}>
            <Text
              style={
                today.homnay === 'Thứ 4'
                  ? styles.txtsetDayItemChoice
                  : styles.txtsetDayItem
              }>
              T4
            </Text>
            <Text
              style={
                today.homnay === 'Thứ 4'
                  ? styles.txtsetDayPriceChoice
                  : styles.txtsetDayPrice
              }>
              0.00
            </Text>
          </View>
          <View style={styles.setDayItem}>
            <Text
              style={
                today.homnay === 'Thứ 5'
                  ? styles.txtsetDayItemChoice
                  : styles.txtsetDayItem
              }>
              T5
            </Text>
            <Text
              style={
                today.homnay === 'Thứ 5'
                  ? styles.txtsetDayPriceChoice
                  : styles.txtsetDayPrice
              }>
              0.00
            </Text>
          </View>
          <View style={styles.setDayItem}>
            <Text
              style={
                today.homnay === 'Thứ 6'
                  ? styles.txtsetDayItemChoice
                  : styles.txtsetDayItem
              }>
              T6
            </Text>
            <Text
              style={
                today.homnay === 'Thứ 6'
                  ? styles.txtsetDayPriceChoice
                  : styles.txtsetDayPrice
              }>
              0.00
            </Text>
          </View>
          <View style={styles.setDayItem}>
            <Text
              style={
                today.homnay === 'Thứ 7'
                  ? styles.txtsetDayItemChoice
                  : styles.txtsetDayItem
              }>
              T7
            </Text>
            <Text
              style={
                today.homnay === 'Thứ 7'
                  ? styles.txtsetDayPriceChoice
                  : styles.txtsetDayPrice
              }>
              0.00
            </Text>
          </View>
          <View style={styles.setDayItem}>
            <Text
              style={
                today.homnay === 'Chủ Nhật'
                  ? styles.txtsetDayItemChoice
                  : styles.txtsetDayItem
              }>
              CN
            </Text>
            <Text
              style={
                today.homnay === 'Chủ Nhật'
                  ? styles.txtsetDayPriceChoice
                  : styles.txtsetDayPrice
              }>
              0.00
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: hp('10%'),
    backgroundColor: '#000',
  },

  txtsetDayItem: {
    fontWeight: 'bold',
    color: '#6a777e',
  },

  txtsetDayPrice: {
    color: '#9ea8ae',
  },

  txtsetDayItemChoice: {
    fontWeight: 'bold',
    color: '#F00',
  },

  txtsetDayPriceChoice: {
    color: '#F00',
  },

  setDay: {
    borderWidth: 1,
    borderColor: '#e8e8e8',
    height: hp('8%'),
    backgroundColor: '#FF0',
    flexDirection: 'row',
  },

  setDayContainer: {
    flex: 1,
    flexDirection: 'row',
  },

  setDayItem: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#e8e8e8',
  },

  firstlast: {
    color: '#80919c',
  },

  monthContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  titleDate: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#475f6f',
  },

  txtdate: {
    fontSize: 14,
    color: '#f6817b',
  },

  txttoday: {
    fontSize: 16,
    color: '#f14b42',
    fontWeight: 'bold',
  },

  today: {
    backgroundColor: '#ffdcda',
    width: wp('33.3%'),
    alignItems: 'center',
    justifyContent: 'center',
  },

  date: {
    backgroundColor: '#FFF',
    flexDirection: 'row',
    width: wp('66.7%'),
  },

  txtPrice: {
    fontSize: 18,
    color: '#F00',
    fontWeight: 'bold',
    position: 'absolute',
    left: wp('80%'),
  },

  txtProject: {
    color: '#b5b5b5',
    fontSize: 14,
    fontWeight: 'bold',
  },

  content: {
    flexDirection: 'row',
    marginTop: hp('2%'),
    marginLeft: wp('2%'),
    marginBottom: hp('2%'),
  },
});
