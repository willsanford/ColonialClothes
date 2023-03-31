import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import React from 'react'
import GoogleMapReact from 'google-map-react'

const location = {
  address: '1600 Amphitheatre Parkway, Mountain View, california.',
  lat: 37.42216,
  lng: -122.08427,
}

const LocationPin = ({ text }) => (
  <div className="pin">
    <Image
      src="/location-pin.png"
      alt="Pin"
      width={10}
      height={10}
    />
  </div>
)
const defaultProps = {
  center: { lat: 42.361145, lng: -71.057083 },
  zoom: 7
}
const Map: NextPage = (props) => {
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
          {props.items.map((item) => {
            return <div
              onClick={() => props.onClick(item.id)}
              lat={item.lat}
              lng={item.lon}
              style={{
                position: 'absolute',
                height: '50px',
                width: '50px',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -100%)'
              }}
            >
              <Image
                src="/location-pin.png"
                alt="Pin"
                layout="fill"
                objectFit="contain"
              />
            </div>
          })}

        </GoogleMapReact>
      </main>
    </>
  );
};

export default Map;
