import React, { useEffect } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import useApi from '../../hooks/useApi';
import listingsApi from '../api/listings';
import ActivityIndicator from '../components/ActivityIndicator';
import AppButton from '../components/AppButton';
import AppScreen from '../components/AppScreen';
import AppText from '../components/AppText';
import Card from '../components/Card';
import colors from '../config/colors';
import routes from '../navigation/routes';

export default function ListingsScreen({ navigation }) {
  const { data: listings, error, loading, request: loadListings } = useApi(
    listingsApi.getListings
  );

  useEffect(() => {
    loadListings();
  }, []);

  return (
    <AppScreen style={styles.screen}>
      {error && (
        <>
          <AppText>Couln't retreive the listings</AppText>
          <AppButton title="retry" onPress={loadListings} />
        </>
      )}
      <ActivityIndicator visible={loading} />
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={`$ ${item.price}`}
            imageUrl={item.images[0].url}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
          />
        )}
      />
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 10,
    backgroundColor: colors.light,
  },
});
