import type { NextPage } from "next";
import { useRouter } from 'next/router'
import Head from "next/head";

import React from 'react';

import Filter from "../../components/filter";
import Timeline from "../../components/timeline";
import Map from "../../components/map";
import Popup from "../../components/popup";

import rawItems from "../../../public/data/test.json"


const View: NextPage = () => {
  const { type } = useRouter().query;

  const [open, setOpen] = React.useState(false);
  const [currentItemId, setCurrentItemId] = React.useState(0);
  const handleOpen = (itemId: number) => {
    setCurrentItemId(itemId);
    setOpen(true);
  }
  const handleClose = () => setOpen(false);

  const [filteredItems, setFilteredItems] = React.useState<any>(rawItems);

  function render_view(type:string, items:object){
    switch(type){
      case "timeline":
        return < Timeline items={items} onClick={handleOpen}/>
        break;
      case "map":
        return < Map items={items}/>
        break;
      case undefined:
        break;
    }
  }
  return (
    <>
      <Head>
        <title>Temp</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container flex flex-row justify-between p-8 h-full w-full">
        <Filter rawItems={rawItems} setFunction={setFilteredItems}/>
        <Popup open={open} onClose={handleClose} item={rawItems[currentItemId]} />
        {render_view(type, filteredItems)}
      </main>
    </>
  );
};

export default View;