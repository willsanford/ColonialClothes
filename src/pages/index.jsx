import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { Libre_Caslon_Text} from "next/font/google";
const f = Libre_Caslon_Text({ weight: '700', subsets: ['latin'] } );
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
        <div className="flex flex-row h-screen w-screen justify-between bg-pink-cloth2-bg bg-cover">
            <div className="flex flex-col justify-center text-9xl space-y-2 text-center h-full w-7/12 ">
                <h1 className={f.className}>Fashioning</h1>
                <h1 className={f.className}>Colonial</h1>
                <h1 className={f.className}>New England</h1>
                <div>
                </div>
                <div className="flex flex-col text-5xl">
                    <h2 className={f.className}>A Historical Clothing Search Engine</h2>
                    <h2 className={f.className}>For New England From 1700-1776</h2>
                </div>
            </div>
            <div className="flex w-5/12">
                <div className="w-full relative">
                    <Image
                        src={"/bg/ladies_.png"}
                        layout="fill" // required
                        objectFit="contain" // change to suit your needs
                    />
                </div>
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
