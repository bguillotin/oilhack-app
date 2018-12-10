import Document, { Head, Main, NextScript } from "next/document";
import { SheetsRegistry, JssProvider } from "react-jss";

export default class JssDocument extends Document {
  static getInitialProps(ctx) {
    const registry = new SheetsRegistry();
    const page = ctx.renderPage(App => props => (
      <JssProvider registry={registry}>
        <App {...props} />
      </JssProvider>
    ));

    return {
      ...page,
      registry
    };
  }

  render() {
      const style = {
          margin: '0px 0px',
      }
    return (
      <html>
        <Head>
            <style id="server-side-styles">
                {this.props.registry.toString()}
            </style>
        </Head>
        <body style={style}>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
