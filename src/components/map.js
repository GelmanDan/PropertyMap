import React, { Component } from 'react';
import logo from './../logo.svg';
import './../App.css';
import calcute from './../calculate';
//import placemarks from './../json/homes.json';
import { YMaps, Map, Placemark, GeoObject } from 'react-yandex-maps';

class MapComponent extends Component {

  render(one) {
    const mapState = { center: [60.087076, 29.966314],zoom: 12 };
    console.log(one);
    return (
      <YMaps>
    <Map state={mapState}>

      <Placemark
        geometry={{
          coordinates: [60.087076, 29.966314]
        }}
        properties={{
          balloonContent: 'Это красивая метка'
        }}
      />

      <Placemark
        geometry={{
          coordinates: [60.187074, 29.966314]
        }}
        properties={{
          balloonContent: 'Это красивая метка'
        }}
      />

      <Placemark
        geometry={{
          coordinates: [60.287073, 29.966314]
        }}
        properties={{
          balloonContent: 'Это красивая метка'
        }}
      />

      <Placemark
        geometry={{
          coordinates: [60.387072, 29.966314]
        }}
        properties={{
          balloonContent: 'Это красивая метка'
        }}
      />

      <Placemark
        geometry={{
          coordinates: [61.487071, 29.966314]
        }}
        properties={{
          balloonContent: 'Это красивая метка'
        }}
      />
      
    </Map>
  </YMaps>
    );
  }
}

export default MapComponent;
