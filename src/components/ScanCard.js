import React, {useCallback, useEffect} from 'react';
import {CardIOView, CardIOUtilities}   from 'react-native-awesome-card-io';
import {View}                          from 'react-native';


const ScanCard = () => {
  useEffect(() => {
    CardIOUtilities.preload();
  }, []);
  const didScanCard= useCallback((card) => {
    console.log(card);
  },[]);

  return (
    <View>
      <CardIOView
        didScanCard={didScanCard}
        style={{flex: 1}}
      />
    </View>
  );
};

export default ScanCard;