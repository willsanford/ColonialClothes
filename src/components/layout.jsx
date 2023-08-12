// components/layout.js

import Header from './header'
import Footer from './footer'
import { useRouter } from 'next/router'

export default function Layout({ children }) {
    const router = useRouter();
    const show_header = router.pathname === "/";
    console.log(router.pathname);
  return (
    <>
      <main className="flex flex-col w-screen">
          { !show_header && <Header/> }
          {children}
          <Footer />
      </main>
    </>
  )
}
