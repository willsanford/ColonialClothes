import Head from "next/head";
import { useRouter } from "next/router";
import Image from "next/image";
import React from 'react';
import Timeline from "../../components/timeline";
import Map from "../../components/map";
import Browse from "../../components/browse";
import Popup from "../../components/popup";
import Filter from "../../components/filter"

import rawItems from "../../../public/data/data.json"

const View = () => {
  const { type } = useRouter().query;

  rawItems.forEach((el) => {
    el.add_files.forEach((fname) => {
      let src = "/imgs/" + fname + ".jpeg"
      const img = new Image(src=src);
    })
  });

  const [open, setOpen] = React.useState(false);
  let d = rawItems[0].id;

  const [currentItemId, setCurrentItemId] = React.useState(d);
  const [currentGlueCount, setCurrentGlueCount] = React.useState(0);
  const [filteredItems, setFilteredItems] = React.useState(rawItems);
  const handleOpen = (itemId) => {
    setCurrentItemId(itemId);
    setOpen(true);
  }
  const handleClose = () => {
    setOpen(false);
  }

  const filter = (filters) => {
    console.log("Using filter");
    console.log(filters);
    // In the case where this is no filter, then return all the items.
    let filtered_items = rawItems.filter(item => (filters.class.includes(item.classification))
      && (filters.locOfOrigin.includes(item.origin_colony))
      && (filters.MAS.includes(item.mas))
      && (filters.creator.includes(item.creator))
      && (filters.prov.includes(item.prov))
      && (item.start_date >= filters.s_date)
      && (item.end_date <= filters.e_date))
    setFilteredItems(filtered_items);
    setCurrentItemId(currentItemId != d ? d : rawItems[1].id);
  };

  function render_view(type, items) {
    // Run these through the filters
    switch (type) {
      case "timeline":
        return < Timeline items={items} onClick={handleOpen} key={currentItemId.toString()} className="w-full"/>
      case "browse":
        return < Browse items={items} onClick={handleOpen} className="flex w-screen"/>
      case "map":
        return < Map items={items} onClick={handleOpen} className="w-full" />
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
      <main className="container flex flex-row justify-between p-16 h-full w-max">
        <Filter rawItems={rawItems} filterFunc={filter} numItems={filteredItems.length} className="flex-initial w-64" />
        <Popup open={open} close={setOpen} onClose={handleClose} item={rawItems.find((el) => el.id == currentItemId)} />
        {current_view}
      </main>
    </>
  );
};

export default View;
