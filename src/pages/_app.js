import Layout from "../components/layout";


import '@/styles/globals.css'
import "../styles/map.css"

export default function App({ Component, pageProps }) {
  return (
      <>
      <Layout>
          <Component {...pageProps} />
      </Layout>
      </>
  );
}