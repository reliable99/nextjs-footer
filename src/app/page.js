import Footer from "./Components/Footer"
import Hero from "./Components/Hero"
import Head from "next/head"
export default function Home() {
  return (
    <div>
      <Head>
          <title></title>
          <meta name="Description" content="Generated by the next app"/>
          <link rel="icon" href="/pro.co"/>
      </Head>
      <Hero/>
      <Footer/>
    </div>
  )
}