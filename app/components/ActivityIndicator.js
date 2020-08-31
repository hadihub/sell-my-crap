import LottieView from 'lottie-react-native';
import React from 'react';

function ActivityIndicator({ visible = false }) {
  if (!visible) return null;
  return (
    <LottieView
      source={require('../assets/animations/loader.json')}
      autoPlay
      loop
    />
  );
}

export default ActivityIndicator;
