import Link from "next/link";
import Head from "next/head";

const Home = () => {
  console.log(process)
  return (
    <>
      <Head>
        <title>Colonial Clothes</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
        />
      </Head>

      <main className="container mx-auto flex flex-col items-center justify-center h-full p-4 rounded">
        <div className="flex flex-col bg-slate-200 h-5/6 w-full border-4 p-4 rounded">
          <div className="flex bg-slate-400 w-full h-12 p-4 border-2 rounded">
            <h1>
              Latest Garmet added: FLORAL MASONS'S RABBIT FUR COAT - NATIONAL
              MUSEUM OF AUSTRALIA
            </h1>
          </div>
          <div className="flex bg-white w-full h-1/3  ">
            <div className="flex flex-row w-full">
              <div className="flex  w-1/2 bg-slate-400 border-2 rounded">
                <div className="flex flex-col">
                  <h1>Box 1</h1>
                  <h1>What is the Australian Dress Registrar</h1>
                  <p>The Australian Dress Registrar is a collaborative</p>
                </div>
              </div>
              <div className="flex w-1/2 bg-slate-400 border-2 rounded">
                <div className="flex flex-col">
                  <h1>Box 2</h1>
                  <h1>What is the Australian Dress Registrar</h1>
                  <p>The Australian Dress Registrar is a collaborative</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex bg-white w-full h-1/3  ">
            <div className="flex flex-row w-full">
              <div className="flex  w-1/2 bg-slate-400 border-2 rounded">
                <div className="flex flex-col">
                  <h1>Box 1</h1>
                  <h1>What is the Australian Dress Registrar</h1>
                  <p>The Australian Dress Registrar is a collaborative</p>
                </div>
              </div>
              <div className="flex w-1/2 bg-slate-400 border-2 rounded">
                <div className="flex flex-col">
                  <h1>Box 2</h1>
                  <h1>What is the Australian Dress Registrar</h1>
                  <p>The Australian Dress Registrar is a collaborative</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="text-2xl text-gray-700"> Browse by:</p>
            <div className="grid gap-3 pt-3 mt-3 text-center md:grid-cols-3 lg:w-2/3">
              <TechnologyCard
                name="Location"
                description="Map stuff"
                documentation="/view/map"
              />
              <TechnologyCard
                name="Timeline"
                description="Timeline stuff"
                documentation="/view/timeline"
              />
              <TechnologyCard
                name="Image"
                description="Browse stuff"
                documentation="/view/browse"
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;

const TechnologyCard = ({
  name,
  description,
  documentation,
}) => {
  return (
    <Link href={documentation}>
      <section className="flex flex-col justify-center p-6 duration-500 border-2 border-gray-500 rounded shadow-xl motion-safe:hover:scale-105">
        <h2 className="text-lg text-gray-700">{name}</h2>
        <p className="text-sm text-gray-600">{description}</p>
      </section>
    </Link>
  );
};
