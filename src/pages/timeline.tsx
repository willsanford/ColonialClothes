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





import items from "./items.json"

// Stuff from JS files that should probably just work
var PRECISION_YEAR = 9;


const Timeline: NextPage = () => {
  // Convert static articles to a good form
  const articles = items.items.map(el => {
    return {
      title: el.title,
      subtitle: "Can put sibtitles here",
      from: {
        year: el.start_date, 
        precision: PRECISION_YEAR
      },
      to: {
        year: el.end_date,
        precision: PRECISION_YEAR
      },
      isToPresent: false,
      imageUrl: el.cover_image
    };
  })
  console.log(articles);

  function onArticleClickFunc(article: any) {
    console.log("in" + article.title);
  }
  const options = {
    "height": 800, 
    "width": 1400,
    initialDate: {
      year: 1750,
      month: 1,
      day: 1
    },
    onArticleClick: onArticleClickFunc
  }




  // var newArticle = {
  //   id: 1,
  //   title: "Alfred Hitchcock",
  //   subtitle: "Film director (1899 – 1980)",
  //   from: {
  //       year: 1899,
  //       month: 8,
  //       day: 13,
  //   },
  //   to: {
  //       year: 1980,
  //       month: 4,
  //       day: 29,
  //   },
  //   isToPresent: false,  
  //   imageUrl: "https://example.com/image.jpg",
  //   rank: 100,
  //   starred: false,
  //   hiddenByFilter: false,
  //   hidePeriodLine: false
  // }

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
        
        <HistTimeline articles={articles} options={options}/>
      </Suspense>
      </main>
    </>
  );
};

export default Timeline;
<h1 className="text-5xl font-extrabold text-gray-700 border">Object Name</h1>