import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import listingsApi from '../api/listings';
import ActivityIndicator from '../components/ActivityIndicator';
import AppButton from '../components/AppButton';
import AppScreen from '../components/AppScreen';
import AppText from '../components/AppText';
import Card from '../components/Card';
import colors from '../config/colors';
import routes from '../navigation/routes';

export default function ListingsScreen({ navigation }) {
  const [listings, setListings] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadListings();
  }, []);

  const loadListings = async () => {
    // Fetching data
    setLoading(true);
    const response = await listingsApi.getListings();
    setLoading(false);

    if (!response.ok) return setError(true);

    setError(false);
    setListings(response.data);
  };

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
