import React, {useCallback, useEffect} from 'react';
import {View, TouchableOpacity, Text, Platform, Alert} from 'react-native';
import {CardIOModule, CardIOUtilities} from 'react-native-awesome-card-io';

const ScanCard = () => {
  useEffect(() => {
    if (Platform.OS === 'ios') {
      CardIOUtilities.preload();
    }
  }, []);

  const scanCard = useCallback(() => {
    Alert.alert('card', 'render');
    CardIOModule.scanCard()
      .then(cardInfo => {
        Alert.alert('card', cardInfo);
        // the scanned card
      })
      .catch(() => {
        Alert.alert('card', 'error');
        // the user cancelled
      });
  }, []);

  return (
    <View>
      <TouchableOpacity onPress={scanCard}>
        <Text>Scan card!</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ScanCard;
