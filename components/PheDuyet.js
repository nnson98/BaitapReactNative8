import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import {colors, gs} from '../styles/styles';
import {Icon} from 'native-base';
import {getDataRequest} from '../shared/DataActions';
import NoDataView from '../shared/NoDataView';
import {useDispatch, useSelector} from 'react-redux';
export default function PheDuyet() {
  const [data, setdata] = useState([]);
  const project = useSelector(state => state.getData);
  const dispatch = useDispatch();
  const getData = () => dispatch(getDataRequest());
  const renderHeader = () => {
    return (
      <View style={styles.header}>
        <Text style={[gs.txtheader, {color: colors.textheader}]}>
          Lọc theo XYZ
        </Text>
        <Icon
          type="MaterialCommunityIcons"
          name="filter-variant"
          style={[gs.icon, {color: colors.textheader}]}
        />
      </View>
    );
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      getData();
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setdata(project.data);
  }, [project]);
  return (
    <View style={styles.container}>
      {project.data ? (
        <FlatList
          data={data}
          renderItem={({item}) => (
            <View>
              <View style={styles.headerItem}>
                <Text>Dự án 1</Text>
                <Text style={[gs.txtheader, {color: colors.number}]}>
                  {item.price}
                </Text>
              </View>
              <View style={styles.viewItem}>
                <View style={gs.selectView}>
                  <Text style={[gs.txtheader, {color: colors.textname}]}>
                    {item.name}
                  </Text>
                  <Text style={[gs.txtchill, {color: colors.text}]}>
                    Thứ 4 - {item.date}
                  </Text>
                </View>
                <Text style={[gs.txtchill, {color: colors.text}]}>
                  {item.job}
                </Text>
                <View style={gs.selectView}>
                  <Text>{item.work}</Text>
                  <Text style={styles.number}>{item.evaluate}</Text>
                </View>
                <View style={gs.selectView1}>
                  <TouchableOpacity
                    style={[styles.customtou, {backgroundColor: colors.false}]}>
                    <Text style={styles.txttou}>Từ chối</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[styles.customtou, {backgroundColor: colors.true}]}>
                    <Text style={styles.txttou}>Chấp thuận</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.block} />
                <View style={gs.selectView}>
                  <Text style={[gs.txtheader, {color: colors.textname}]}>
                    {item.name}
                  </Text>
                  <Text style={[gs.txtchill, {color: colors.text}]}>
                    Thứ 4 - {item.date}
                  </Text>
                </View>
                <Text style={[gs.txtchill, {color: colors.text}]}>
                  {item.job}
                </Text>
                <View style={gs.selectView}>
                  <Text>{item.work}</Text>
                  <Text style={styles.number}>{item.evaluate1}</Text>
                </View>
                <View style={gs.selectView1}>
                  <TouchableOpacity
                    style={[styles.customtou, {backgroundColor: colors.false}]}>
                    <Text style={styles.txttou}>Từ chối</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[styles.customtou, {backgroundColor: colors.true}]}>
                    <Text style={styles.txttou}>Chấp thuận</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
          keyExtractor={item => item.id + ''}
          ListHeaderComponent={renderHeader}
        />
      ) : (
        <NoDataView onRetryPress={getData} />
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    backgroundColor: colors.header,
    ...gs.selectView,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  headerItem: {
    ...gs.selectView,
    marginTop: 15,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
  },
  txt: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.txtheader,
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
  customtou: {
    height: 50,
    width: 160,
    borderRadius: 5,
    ...gs.center,
  },
  txttou: {
    ...gs.txtheader,
    color: 'white',
  },
  block: {height: 1, backgroundColor: 'black', marginTop: 10, marginBottom: 10},
});
