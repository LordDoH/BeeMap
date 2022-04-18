/* eslint-disable react/jsx-props-no-spreading */
import Head from 'next/head';
import Footer from '../components/Footer';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>BeeMap</title>
        <meta name="description" content="SpyBee Technical Assessment" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
      <Footer />
      <style jsx global>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Anonymous+Pro:ital,wght@0,400;0,700;1,400;1,700&family=Roboto:wght@100&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
          html,
          body {
            padding: 0;
            margin: 0;
            font-size: 14px;
          }
          a {
            color: inherit;
            text-decoration: none;
          }
          * {
            box-sizing: border-box;
            padding: 0;
            margin: 0;
          }
        `}
      </style>
    </>
  );
}

export default MyApp;
