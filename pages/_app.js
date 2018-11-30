import App, { Container } from "next/app";
import withReduxStore from "../js/lib/with-redux-store";
import { Provider } from "react-redux";

class OilhackApp extends App {
  render() {
    const { Component, pageProps, reduxStore } = this.props;

    return (
      <Container>
        <Provider store={reduxStore}>
            <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }
}

export default withReduxStore(OilhackApp);
