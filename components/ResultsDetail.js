import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const ResultsDetail = ({result}) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: result.image_url}} style={styles.image} />
      <Text style={styles.name}>{result.name}</Text>
      <Text>
        {result.rating} Stars, {result.review_count} Reveiews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 5,
    marginBottom: 5,
  },
  name: {
    fontWeight: 'bold',
  },
});

export default ResultsDetail;