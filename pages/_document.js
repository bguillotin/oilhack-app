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
            margin: "0px",
            // fontFamily: "'Zilla Slab', Helvetica, sans-serif",
            // fontFamily: "'Black And White Picture', sans-serif"
            fontFamily: "'Black And White Picture', sans-serif",
            fontFamily: "'Dokdo', cursive",
        }
    return (
      <html>
        <Head>
            {/* <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Zilla+Slab:400,700" /> */}
            {/* <link href="https://fonts.googleapis.com/css?family=Black+And+White+Picture" rel="stylesheet"></link> */}
            <link href="https://fonts.googleapis.com/css?family=Black+And+White+Picture|Dokdo" rel="stylesheet"></link>
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
