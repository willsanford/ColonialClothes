import Head from "next/head";

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

      <main className="flex flex-col items-center justify-center w-screen p-4 rounded border-4">
        <div className="flex flex-row h-screen w-screen justify-around bg-pink-300">
            <div className="flex flex-col justify-center text-center h-full w-7/12 border-8">
                <h1 className="text-9xl">Fashioning</h1>
                <h1 className="text-9xl">Colonial</h1>
                <h1 className="text-9xl">New England</h1>
                <h2 className="text-7xl">A Historical Clothing Search Engine</h2>
                <h2 className="text-7xl">For New England From 1700-1776</h2>
            </div>
                <div className="flex h-full border-8">
            </div>
        </div>
          <div className="flex flex-row h-screen w-screen text-center justify-around bg-pink-200">
              <div className="w-40 h-40 rounded-full flex justify-center items-center bg-black">
                  <p>404</p>
              </div>

              <div className="w-40 h-40 rounded-full flex justify-center items-center bg-black">
                  <p>404</p>
              </div>
              <div className="w-40 h-40 rounded-full flex justify-center items-center bg-black">
                  <p>404</p>
              </div>
              <div className="w-40 h-40 rounded-full flex justify-center items-center bg-black">
                  <p>404</p>
              </div>
          </div>
      </main>
    </>
  );
};

export default Home;