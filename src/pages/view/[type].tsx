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
    console.log(itemId.toString());
    setOpen(true);
  }
  const handleClose = () => {
    console.log("Here!");
    setOpen(false);
  }
  const [filters, setFilters] = React.useState<any>({});

  function render_view(type: string, items: object) {
    // Run these through the filters
    switch (type) {
      case "timeline":
        return < Timeline items={items} onClick={handleOpen} />
      case "map":
        return < Map items={items} />
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
      <main className="container flex flex-row justify-between p-16 h-full w-full">
        <Filter rawItems={rawItems} setFunction={setFilters} className="flex-initial w-64" />
        <Popup open={open} close={setOpen} onClose={handleClose} item={rawItems[currentItemId]} />
        {render_view(type, rawItems)}
      </main>
    </>
  );
};

export default View;