import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

const SearchBar = ({term, onChangeTerm, onTermSubmit}) => {
  return (
    <View style={styles.background}>
      <Feather style={styles.icon} name="search" size={30} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.inputBox}
        placeholder="Search"
        value={term}
        onChangeText={newTerm => onChangeTerm(newTerm)}
        onEndEditing={() => {
          onTermSubmit();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#ccc',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 10,
    flexDirection: 'row',
    marginTop: 15,
    marginBottom: 10,
  },
  inputBox: {
    flex: 1,
    fontSize: 18,
  },
  icon: {
    fontSize: 30,
    alignSelf: 'center',
    marginHorizontal: 10,
  },
});

export default SearchBar;
