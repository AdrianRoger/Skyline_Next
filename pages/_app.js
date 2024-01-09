import '@/styles/style.css'
import '@/styles/globals.css'
import Navbar from '@/components/Navbar';
import Footer from "@/components/Footer";
import KeyFrame from "@/components/KeyFrame";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charset="UTF-8"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9"
          crossOrigin="anonymous"></link>

        <link rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"></link>

        <link rel="stylesheet" href="@/assets/css/style.css"></link>

        <title>Skyline - Cidades</title>
      </Head>
      <Navbar />
      <main>
      <KeyFrame />
      <section>
        <Component {...pageProps} />
      </section>
      </main>

      <Footer />
    </>
    )
}
