import Head from "next/head";
import { ThemeProvider } from "@emotion/react";

import configs from "../src/configs";
import { GlobalStyles } from "../src/commons/Globals";
import theme from "../src/commons/theme";

import { Layout, Responsive } from "../src/atoms/Layout";
import Navigation from "../src/components/Navigation";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Head>
          <title>
            {Component.title
              ? `${Component.title} | ${configs.sitename}`
              : configs.sitename}
          </title>
          <meta
            name="viewport"
            content="width=device-width,minimum-scale=1,initial-scale=1"
          />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        </Head>
        {GlobalStyles}
        <Navigation routes={configs.navigations}></Navigation>
        <Responsive>
          <Component {...pageProps} />
        </Responsive>
      </Layout>
    </ThemeProvider>
  );
}
