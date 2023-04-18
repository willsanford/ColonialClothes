import { useEffect } from 'react';
import dynamic from 'next/dynamic';
const HistTimeline = dynamic(
  () => import('../components/histTimeline'),
  { ssr: false }
)

// Stuff from JS files that should probably just work
var PRECISION_YEAR = 9;

const Timeline = (props) => {
  let articles = props.items.map(el => {
    return {
      id : el.id,
      title: el.title,
      subtitle: el.fname,
      from: {
        year: el.start_date, 
        precision: PRECISION_YEAR
      },
      to: {
        year: el.end_date,
        precision: PRECISION_YEAR
      },
      isToPresent: false,
      imageUrl: "/imgs/" + el.fname + ".jpeg",
    };
  })

  function onArticleClickFunc(article) {
    props.onClick(article.id);
  }

  const options = {
    "height": 700, 
    "width": 1400,
    initialDate: {
      year: 1710,
      month: 1,
      day: 1
    },
    zoom :{
      initial: 38,
    },
    onArticleClick: onArticleClickFunc
  }
  return (
    <>
      <main className="container p-4 h-full w-full">
        {/* <Graph /> */}
          <HistTimeline articles={articles} options={options}/>
      </main>
    </>
  );
};

export default Timeline;
<h1 className="text-5xl font-extrabold text-gray-700 border">Object Name</h1>
