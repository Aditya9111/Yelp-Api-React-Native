import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer BrfdGHC5Jn_VyZLRirIXO2au73yaESK3Kmn6m1V4j9spIePRnMZHF2giuoNCMBvK2cHshVCruwhwc0WFYt388bn6rLf88FjKNJ3wpcQ3aQgv7mSDf63upkV2sqz8XnYx',
  },
});
