import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {colors, gs} from '../styles/styles';
import Bottom from '../shared/bottom';
import DatePicker from '../shared/DatePicker';
import NoDataView from '../ChamCong/NoDataView';
import {useDispatch, useSelector} from 'react-redux';
import {getFollowerRequest} from '../ChamCong/FollowerActions';
export default function ChamCong() {
  const [data1, setdata1] = useState([]);
  const listFollower = useSelector(state => state.getFollower);
  const dispatch = useDispatch();
  const getFollower = () => dispatch(getFollowerRequest());
  useEffect(() => {
    const timer = setTimeout(() => {
      getFollower();
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setdata1(listFollower.data);
  }, [listFollower]);
  const renderHeader = () => {
    return (
      <View>
        <DatePicker />
        <View style={styles.headerItem}>
          <Text style={[gs.txtheader, {color: colors.text}]}>
            THỨ 4 NGÀY 9 THÁNG 10 NĂM 2019
          </Text>
          <Text style={[gs.txtheader, {color: colors.number}]}>17.50</Text>
        </View>
      </View>
    );
  };
  const renderFooter = () => {
    return (
      <View>
        <Bottom />
      </View>
    );
  };
  return (
    <View style={styles.container}>
      {listFollower.data ? (
        <FlatList
          data={data1}
          renderItem={({item}) => (
            <View style={styles.viewItem}>
              <View style={gs.selectView}>
                <Text style={[gs.txtheader, {color: colors.textname}]}>
                  {item.name}
                </Text>
                <View style={styles.bodertrue}>
                  <Text style={[gs.txtchill, {color: colors.number}]}>
                    {item.pending}
                  </Text>
                </View>
              </View>
              <Text style={[gs.txtchill, {color: colors.text}]}>
                {item.job}
              </Text>
              <View style={gs.selectView}>
                <Text style={gs.txtheader}>{item.work}</Text>
                <Text style={styles.number}>{item.number}</Text>
              </View>
            </View>
          )}
          keyExtractor={item => item.name}
          ListHeaderComponent={renderHeader}
          ListFooterComponent={renderFooter}
        />
      ) : (
        <NoDataView onRetryPress={getFollower} />
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  headerItem: {
    ...gs.selectView,
    marginTop: 15,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
  },
  viewItem: {
    backgroundColor: colors.backgrounditem,
    marginTop: 5,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 5,
    paddingVertical: 8,
    paddingHorizontal: 8,
  },
  number: {
    fontSize: 40,
    fontWeight: '900',
    color: colors.textname,
  },
  bodertrue: {
    borderRadius: 6,
    backgroundColor: '#ffefe3',
    paddingHorizontal: 8,
    paddingVertical: 5,
  },
});
