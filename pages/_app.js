import App, { Container } from "next/app";
import withReduxStore from "../js/lib/with-redux-store";
import { Provider } from "react-redux";
import { JssProvider, SheetsRegistry } from 'react-jss';

class OilhackApp extends App {
  render() {
    const { Component, pageProps, reduxStore } = this.props;
    const sheets = new SheetsRegistry();

    return (
      <JssProvider registry={sheets}>
        <Container>
          <Provider store={reduxStore}>
              <Component {...pageProps} />
          </Provider>
        </Container>
      </JssProvider>
    );
  }
}

export default withReduxStore(OilhackApp);
