// import React, { useEffect, useState } from 'react';
// import { StyleSheet, View } from 'react-native';
// import MapboxGL from '@react-native-mapbox-gl/maps';
// import Geolocation from '@react-native-community/geolocation';
// MapboxGL.setAccessToken('pk.eyJ1IjoibWFkaGF2aWJlbGxhbSIsImEiOiJjbHloNDF3NzkwMDBnMmtwYWxkbWhtM2ZiIn0.oL3Y8s_yHgIQ1Fbpdnwndw');

// const MapScreen = () => {
//   const [location, setLocation] = useState(null);

//   useEffect(() => {
//     Geolocation.getCurrentPosition(
//       position => {
//         const { latitude, longitude } = position.coords;
//         setLocation([longitude, latitude]);
//       },
//       error => console.error(error),
//       { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
//     );
//   }, []);

//   return (
//     <View style={styles.container}>
//       <MapboxGL.MapView style={styles.map}>
//         {location && (
//           <MapboxGL.Camera
//             zoomLevel={14}
//             centerCoordinate={location}
//           />
//         )}
//         {location && (
//           <MapboxGL.PointAnnotation
//             id="currentLocation"
//             coordinate={location}
//           />
//         )}
//       </MapboxGL.MapView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   map: {
//     flex: 1,
//   },
// });

// export default MapScreen;


import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const MapScreen = () => {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
          title="My Marker"
          description="Some description"
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default MapScreen;
