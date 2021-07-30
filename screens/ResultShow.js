import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import yelp from '../api/yelp';

const ResultShow = ({navigation}) => {
  const [result, setResult] = useState(null);

  // const id = navigation.getParams('id');

  const getResult = async id => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResult('id');
  }, []);

  console.log(result);
  return (
    <View>
      <Text>Results Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ResultShow;
