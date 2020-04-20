import axios from 'axios';
export const api = axios
  .get('https://private-60d0c-nnson98.apiary-mock.com/project')
  .then(function(response) {
    return response.data;
    //console.log(response.data);
  })
  .catch(function(err) {
    console.log(err);
  });
export const getData = () => {
  return api;
};
