// components/layout.js

import Header from './header'
import Footer from './footer'

export default function Layout({ children }) {
  return (
    <>
      <main className="flex flex-col w-screen">
        {/*<Header />*/}
        {children}
        <Footer />
      </main>
    </>
  )
}