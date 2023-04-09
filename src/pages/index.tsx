import type { NextPage } from "next";
import Link from "next/link"
import Head from "next/head";
import Image from "next/image";
import rawItems from "../../public/data/data.json"

const Home: NextPage = () => {
    function preloadImage(srcFname) { 
  const src = "/imgs/" + srcFname + ".jpg";  
  console.log(src);
  const image = new Image(src);
  // image.src = src;
  return function PreloadedImage(props) {
    return <img {...props} src={src} />;
  };
  }

  return (
    <>
      <Head>
        <title>Colonial Clothes</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v1.10.1/mapbox-gl.css"
          rel="stylesheet"
        />
	{rawItems.map((el) => {preloadImage(el.fname)})}
      </Head>

      <main className="container mx-auto flex flex-col items-center justify-center min-h-screen p-4">
        <h1 className="text-5xl md:text-[5rem] leading-normal font-extrabold text-gray-700">
          Livy's <span className="text-purple-300">Colonial Clothes</span> Project
        </h1>
        <p className="text-2xl text-gray-700">Check out:</p>
        <div className="grid gap-3 pt-3 mt-3 text-center md:grid-cols-2 lg:w-2/3">
          <TechnologyCard
            name="Map"
            description="Map stuff"
            documentation="/view/map"
          />
          <TechnologyCard
            name="Timeline"
            description="Timeline stuff"
            documentation="/view/timeline"
          />
          <TechnologyCard
            name="Browse"
            description="Browse stuff"
            documentation="/view/browse"
          />
        </div>
      </main>
    </>
  );
};

export default Home;

type TechnologyCardProps = {
  name: string;
  description: string;
  documentation: string;
};

const TechnologyCard = ({
  name,
  description,
  documentation,
}: TechnologyCardProps) => {
  return (
    <Link href={documentation}>
      <section className="flex flex-col justify-center p-6 duration-500 border-2 border-gray-500 rounded shadow-xl motion-safe:hover:scale-105">
        <h2 className="text-lg text-gray-700">{name}</h2>
        <p className="text-sm text-gray-600">{description}</p>
        <a
          className="mt-3 text-sm underline text-violet-500 decoration-dotted underline-offset-2"
          href={documentation}
          target="_blank"
          rel="noreferrer"
        >
          Link
        </a>
      </section>
    </Link>
  );
};
