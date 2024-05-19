import Navbar from './navbar'
// import Footer from './footer'
import Head from "next/head"
 
export default function Layout({ children }) {
  return (
    <div className=''>
     <Head>
        <title></title>
        <meta name="description" content="" />
      </Head>
      <Navbar />
      <main>{children}</main>
      {/* <Footer /> */}
    </div>
  )
}