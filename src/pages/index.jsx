import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <Head>
        <title>Colonial Clothes</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
        />
      </Head>

      <main className="flex flex-col items-center justify-center w-screen">
        <div className="flex flex-row h-screen w-screen justify-start bg-pink-cloth3-bg bg-cover">
            <div className="flex flex-col justify-center text-center h-full w-6/12">
                <h1 className="text-9xl">Fashioning</h1>
                <h1 className="text-9xl">Colonial</h1>
                <h1 className="text-9xl">New England</h1>
                <div></div>
                <h2 className="text-5xl">A Historical Clothing Search Engine</h2>
                <h2 className="text-5xl">For New England From 1700-1776</h2>
            </div>
            <div className="flex">
            </div>
        </div>
          <div className="flex flex-row h-screen w-screen text-center items-center justify-around bg-pink-cloth2-bg bg-cover bg-center">
              {["ABOUT", "MAP", "TIMELINE", "BROWSE"].map((name, i) => <LinkCircle name={name}/>)}
          </div>
      </main>
    </>
  );
};

const LinkCircle= ({
        name,
    }) => {
    return (
        <Link href={"/view/" + name.toLowerCase()}>
            <div className="w-80 h-80 rounded-full flex justify-center items-center bg-white/50 hover:bg-white/75 text-5xl">
                <p>{name}</p>
            </div>
        </Link>
    );
};
export default Home;
