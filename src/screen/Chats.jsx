import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Layout from '../components/Layout';
import SearchInput from '../components/SearchInput';

const Chats = () => {
  return (
    <Layout>
      <SearchInput />
      <View style={styles.container}>
        <Text>Chats</Text>
      </View>
    </Layout>
  );
};

export default Chats;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
  },
});
