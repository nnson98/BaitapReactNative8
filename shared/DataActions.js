export const GET_DATA_REQUEST = 'GET_DATA_REQUEST';
export const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS';
export const GET_DATA_AIL = 'GET_DATA_AIL';

export const getDataRequest = () => {
  return {type: GET_DATA_REQUEST};
};
export const getDataSuccess = data => {
  return {type: GET_DATA_SUCCESS, payload: {data}};
};
export const getDataFail = err => {
  return {type: GET_DATA_AIL, payload: {err}};
};
