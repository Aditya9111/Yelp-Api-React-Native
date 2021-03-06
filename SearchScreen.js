import React, {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import SearchBar from './components/SearchBar';
import useResults from './hooks/useResults';
import ResultsList from './components/ResultsList';

const SearchScreen = ({navigation}) => {
  const [term, setTerm] = useState('');

  const [searchApi, errorMessage, results] = useResults();

  const filterResultsByPrice = price => {
    return results.filter(result => {
      return result.price === price;
    });
  };

  return (
    <>
      <SearchBar
        term={term}
        onChangeTerm={newTerm => setTerm(newTerm)}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}

      <ScrollView>
        <ResultsList
          results={filterResultsByPrice('$')}
          title="Cost Effective"
          navigation={navigation}
        />
        <ResultsList
          results={filterResultsByPrice('$$')}
          title="Bit Pricier"
          navigation={navigation}
        />
        <ResultsList
          results={filterResultsByPrice('$$$')}
          title="Big Spender"
          navigation={navigation}
        />
        <ResultsList
          results={filterResultsByPrice('$$$$')}
          title="Biggest Spender"
          navigation={navigation}
        />
      </ScrollView>
    </>
  );
};

export default SearchScreen;
