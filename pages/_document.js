import { Head } from 'next/document';

class MyDocument extends React.PureComponent {
    render() {
        return (
            <html>
                <Head>
                    <title>Oilhack website</title>
                    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700,800" rel="stylesheet" />
                    <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
                    <style jsx global>{`
                        body { 
                            background: #000;
                            margin: 0;
                            font-family: monospace;
                        }
                    `}</style>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}

export default MyDocument;