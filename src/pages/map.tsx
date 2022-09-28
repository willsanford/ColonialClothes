import type { NextPage } from "next";
import Head from "next/head";
import { trpc } from "../utils/trpc";

import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import React, { useRef, useEffect, useState } from 'react';

mapboxgl.accessToken = 'pk.eyJ1Ijoid2lsbHNhbmZvcmQiLCJhIjoiY2w4aGtibGVrMDMxNzN2b2JhcHMweG51MSJ9.CjvHiSProShAUhICycS0AA';

import Filter from "../components/filter";

const Map: NextPage = () => {
//   const hello = trpc.useQuery(["example.hello", { text: "from tRPC" }]);

  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(30.5);
  const [lat, setLat] = useState(50.5);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
    container: mapContainer.current,
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [lng, lat],
    zoom: zoom
    });
  });


  // useEffect(() => {
  //   if (!map.current) return; // wait for map to initialize
  //   map.current.on('move', () => {
  //   setLng(map.current!.getCenter().lng.toFixed(4));
  //   setLat(map.current!.getCenter().lat.toFixed(4));
  //   setZoom(map.current!.getZoom().toFixed(2));
  //   const marker1 = new mapboxgl.Marker()
  //   .setLngLat([map.current!.getCenter().lng.toFixed(4), map.current!.getCenter().lat.toFixed(4)])
  //   .addTo(map);  
  //   });

    
  // });


  return (
    <>
      <Head>
        <title>Map</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container flex flex-row justify-start p-4 h-full w-full">
        <Filter />
        <div ref={mapContainer} className="w-screen" />
      </main>
    </>
  );
};

export default Map;
