import App, { Container } from "next/app";
import Head from 'next/head';
import withReduxStore from "../js/lib/with-redux-store";
import { Provider } from "react-redux";

class OilhackApp extends App {
  componentDidMount () {
    const style = document.getElementById('server-side-styles')

    if (style) {
      style.parentNode.removeChild(style)
    }
  }

  render() {
    const { Component, pageProps, reduxStore } = this.props;

    return (
        <Container>
          <Head>
            <title>Oilhack website</title>
          </Head>
          <Provider store={reduxStore}>
              <Component {...pageProps} />
          </Provider>
        </Container>
    );
  }
}

export default withReduxStore(OilhackApp);