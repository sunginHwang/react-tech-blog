import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    render() {
        return (
            <html>
            <Head>
                <meta charSet='utf-8' />
                <link rel="icon" href="/static/mrhFa.ico" type="icon" />
                <link rel="stylesheet" href="/_next/static/style.css" />
                <meta name='viewport' content='initial-scale=1.0, width=device-width' />
            </Head>
            <body>
            <Main/>
            <NextScript/>
            </body>
            </html>
        )
    }
}