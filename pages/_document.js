import Document, { Main, Head, NextScript } from 'next/document';

class OwnDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return {...initialProps}
    }

    render() {
        return (
            <html>

                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}

export default OwnDocument;