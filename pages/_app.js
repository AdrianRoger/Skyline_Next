import '@/styles/style.css'
import '@/styles/globals.css'
import Navbar from '@/components/Navbar';
import KeyFrame from '@/components/KeyFrame';
import Footer from "@/components/Footer";
import Head from "next/head";
import {useRouter} from "next/router";

export default function App({ Component, pageProps }) {

  const router = useRouter();
  let title = router.pathname;
  title = title.slice(1);

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

        <title>Skyline - {title === "" ? "Usuários" : title + "s"}</title>
      </Head>
      <Navbar />
      <main>
      <KeyFrame />
      <Component {...pageProps} />
      </main>
      <Footer />
    </>
    )
}
