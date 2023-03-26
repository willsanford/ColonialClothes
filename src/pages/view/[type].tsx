import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import React from 'react';
import { useReducer } from "react";
import { useEffect } from "react";
import Filter from "../../components/filter";
import Timeline from "../../components/timeline";
import Map from "../../components/map";
import Popup from "../../components/popup";

import rawItems from "../../../public/data/test.json"

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
  const handleClose = () => setOpen(false);

  const filter = (filters:any) => {
    // In the case where this is no filter, then return all the items.
    let filtered_items = rawItems.filter(item => (filters.class.includes(item.classification)) && (filters.locOfOrigin.includes(item.loc_origin)))
    setFilteredItems(filtered_items);
    if (type == "timeline"){
        // TODO : Figure out the force update here
    }
    setCurrentItemId(currentItemId + 1);
  };

  function render_view(type: string, items: object) {
    // Run these through the filters
    switch (type) {
      case "timeline":
        return < Timeline items={items} onClick={handleOpen} key={currentItemId.toString()}/>
      case "map":
        return < Map items={items} />
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
        <Filter rawItems={rawItems} filterFunc={filter} className="flex-initial w-64" />
        <Popup open={open} close={setOpen} onClose={handleClose} item={rawItems[currentItemId]} />
        {current_view}
      </main>
    </>
  );
};

export default View;
