import axios from 'axios';
export const api2 = axios
  .get('https://private-5595e-api2135.apiary-mock.com/api2')
  .then(function(response) {
    return response.data;
    //console.log(response.data);
  })
  .catch(function(err) {
    console.log(err);
  });
export const getFollower = () => {
  return api2;
};
