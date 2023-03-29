import type { NextPage } from "next";
import Head from "next/head";

import React from 'react'
import GoogleMapReact from 'google-map-react'

const location = {
  address: '1600 Amphitheatre Parkway, Mountain View, california.',
  lat: 37.42216,
  lng: -122.08427,
}

const LocationPin = ({ text }) => (
  <div className="pin">
    <p className="pin-text">{text}</p>
  </div>
)
const defaultProps = {
  center: { lat: 40.73, lng: -73.93 },
  zoom: 12
}
const Map: NextPage = () => {
  return (
    <>
      <Head>
        <title>Map</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container flex flex-row justify-start p-4 h-full w-full">
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBpRh-tqG93M_ntCZodwl6PwPtKTY72Q2Q' }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <LocationPin
            lat={location.lat}
            lng={location.lng}
            text={location.address}
          />
        </GoogleMapReact>
      </main>
    </>
  );
};

export default Map;
