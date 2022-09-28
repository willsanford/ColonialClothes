import type { NextPage } from "next";
import Head from "next/head";
import Filter from "../components/filter";
import Graph from "../components/graph";
import dynamic from 'next/dynamic'
import { Suspense } from "react";
const HistTimeline = dynamic(
  () => import('../components/histTimeline'),
  { ssr: false }
)

const Timeline: NextPage = () => {
  var newArticle = {
    id: 1,
    title: "Alfred Hitchcock",
    subtitle: "Film director (1899 – 1980)",
    from: {
        year: 1899,
        month: 8,
        day: 13,
    },
    to: {
        year: 1980,
        month: 4,
        day: 29,
    },
    isToPresent: false,  
    imageUrl: "https://example.com/image.jpg",
    rank: 100,
    starred: false,
    hiddenByFilter: false,
    hidePeriodLine: false
  }

  return (
    <>
      <Head>
        <title>Timeline</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container flex flex-row justify-start p-4 h-full w-full">
        <Filter />
        {/* <Graph /> */}
        <Suspense fallback={`Loading...`}>
        
        <HistTimeline articles={[newArticle]}/>
      </Suspense>
      </main>
    </>
  );
};

export default Timeline;
<h1 className="text-5xl font-extrabold text-gray-700 border">Object Name</h1>