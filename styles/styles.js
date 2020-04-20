import {StyleSheet} from 'react-native';
export const colors = {
  header: '#eff0f0',
  background: '#f5f5f5',
  backgrounditem: '#ffffff',
  number: '#fc8b85',
  false: '#f14b42',
  true: '#4b9900',
  text: '#d4d4d4',
  textname: '#516472',
  textheader: '#b1b6ba',
};

export const gs = StyleSheet.create({
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  selectView1: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  txtheader: {
    fontSize: 18,
    fontWeight: '700',
  },
  txtchill: {
    fontSize: 15,
    fontWeight: '600',
  },
  icon: {
    fontSize: 22,
  },
});
