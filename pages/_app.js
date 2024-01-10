import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@/styles/style.css';
import '@/styles/globals.css';
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
