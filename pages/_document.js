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
                <meta name="mobile-web-app-capable" content="yes"/>
                <meta name="apple-mobile-web-app-capable" content="yes"/>
                <meta name='description' content='woolta 블로그 ver2.0 기술 개발 블로그'/>
                <meta property="og:description" content="woolta 블로그 ver2.0 기술 개발 블로그"/>
                <meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0, viewport-fit=cover'/>
                <link rel="stylesheet" href="/_next/static/style.css" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/atelier-cave-dark.min.css"/>
                <link href="https://fonts.googleapis.com/css?family=Roboto:400,700,900&amp;subset=cyrillic,cyrillic-ext,greek,greek-ext,latin-ext,vietnamese" rel="stylesheet"/>
            </Head>
            <body>
            <Main/>
            <NextScript/>
            </body>
            </html>
        )
    }
}