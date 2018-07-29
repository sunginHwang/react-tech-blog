import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {

    render() {
        return (
            <html>
            <Head>
                <meta charSet='utf-8' />
                <link rel="icon" href="/static/mrhFa.ico" type="icon" />
                <link rel="stylesheet" href="/_next/static/style.css" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/atelier-cave-dark.min.css"/>
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