import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {

    render() {
        return (
            <html>
            <Head>
                <meta charSet='utf-8' />
                <link rel="icon" href="/static/woolta.ico" type="icon" />
                <link rel="apple-touch-icon" href="/static/woolta.ico"/>
                <link rel="shortcut icon" href="/static/woolta.ico"/>
                <link rel="stylesheet" href="/_next/static/style.css" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/atelier-cave-dark.min.css"/>
                <meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0, viewport-fit=cover'/>
                <meta name='description' content='woolta 블로그 ver2.0 기술 개발 목적인 블로그 입니다.'/>

            </Head>
            <body>
            <Main/>
            <NextScript/>
            </body>
            </html>
        )
    }
}