import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import React from 'react';
import { useReducer } from "react";
import { useEffect } from "react";
import Filter from "../../components/filter";
import Timeline from "../../components/timeline";
import Map from "../../components/map";
import Browse from "../../components/browse";
import Popup from "../../components/popup";
import Link from 'next/link'
import Image from 'next/image'

import rawItems from "../../../public/data/data.json"

const View: NextPage = () => {
  const { type } = useRouter().query;

  const [open, setOpen] = React.useState(false);
  const [currentItemId, setCurrentItemId] = React.useState(0);
  const [currentGlueCount, setCurrentGlueCount] = React.useState(0);
  const [filteredItems, setFilteredItems] = React.useState(rawItems);
  const handleOpen = (itemId: number) => {
    setCurrentItemId(itemId);
    setOpen(true);
  }
  const handleClose = () => {
    console.log("Here")
    setOpen(false);
  }

  const filter = (filters: any) => {
    console.log("Using filter");
    console.log(filters);


    // In the case where this is no filter, then return all the items.
    let filtered_items = rawItems.filter(item => (filters.class.includes(item.classification))
      && (filters.locOfOrigin.includes(item.loc_origin_colony))
      && (filters.MAS.includes(item.mas))
      && (filters.creator.includes(item.creator))
      && (filters.prov.includes(item.prov))
      && (item.start_date >= filters.s_date)
      && (item.end_date <= filters.e_date))
    setFilteredItems(filtered_items);
    setCurrentItemId(currentItemId + 1);
  };

  function render_view(type: string, items: object) {
    // Run these through the filters
    switch (type) {
      case "timeline":
        return < Timeline items={items} onClick={handleOpen} key={currentItemId.toString()} />
      case "browse":
        return < Browse items={items} onClick={handleOpen} />
      case "map":
        return < Map items={items} onClick={handleOpen} />
      case undefined:
        break;
    }
  }


  let current_view = render_view(type, filteredItems);

  return (
    <>
      <Head>
        <title>Temp</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container flex flex-row justify-between p-16 h-full w-full">
        <Filter rawItems={rawItems} filterFunc={filter} numItems={filteredItems.length} className="flex-initial w-64" />
        <Popup open={open} close={setOpen} onClose={handleClose} item={rawItems.find((el) => el.id == currentItemId)} />
        {current_view}
      </main>
    </>
  );
};

export default View;
