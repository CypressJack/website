import Head from 'next/head'

import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { Reviews } from '@/components/Reviews'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'

export default function Home() {
  return (
    <>
      <Head>
        <title>Web Services in Delta BC</title>
        <meta name="title" content="Web Services in Delta BC" />
        <meta
          name="description"
          content="Rank at the top of local search results in Tsawwassen &amp; Ladner, BC. Expand your reach in the region you want to work in, with customers you want to connect with."
        />
        <meta
          name="keywords"
          content="delta, website, web developer, tsawwassen, bc, local, seo, web build"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta property="og:title" content="Web Services in Delta BC" />
        <meta property="og:site_name" content="Delta Web Works" />
        <meta property="og:url" content="deltaweb.works" />
        <meta
          property="og:description"
          content="Rank at the top of local search results in Tsawwassen & Ladner, BC. Expand your reach in the region you want to work in, with customers you want to connect with."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://deltaweb.works/images/deltawebworks.png"
        ></meta>
      </Head>
      <Header />
      <main>
        <Hero />
        {/* <PrimaryFeatures /> */}
        <SecondaryFeatures />
        <CallToAction />
        {/* <ContactForm/> */}
        {/* <Reviews /> */}
        {/* <Pricing /> */}
        {/* <Faqs /> */}
      </main>
      <Footer />
    </>
  )
}
