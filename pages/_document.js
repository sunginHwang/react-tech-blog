import Document, {Head, Main, NextScript} from 'next/document'

export default class MyDocument extends Document {

    render() {
        return <html>
        <Head>
            <meta charSet='utf-8'/>
            <link rel="icon" href="/static/woolta.ico" type="icon"/>
            <link rel="apple-touch-icon-precomposed" href="/static/woolta.ico"/>
            <link rel="icon" type="icon" href="/static/woolta.ico" sizes="196x196"/>
            <link rel="icon" type="icon" href="/static/woolta.ico" sizes="96x96"/>
            <link rel="icon" type="icon" href="/static/woolta.ico" sizes="32x32"/>
            <link rel="icon" type="icon" href="/static/woolta.ico" sizes="16x16"/>
            <link rel="icon" type="icon" href="/static/woolta.ico" sizes="128x128"/>
            <link rel="apple-touch-icon" href="/static/woolta.ico"/>
            <link rel="shortcut icon" href="/static/woolta.ico"/>
            <meta name="mobile-web-app-capable" content="yes"/>
            <meta name="theme-color" content="#fff"/>
            <meta name="apple-mobile-web-app-capable" content="yes"/>
            <meta name="apple-mobile-web-app-status-bar-style" content="white"/>
            <meta name='description' content='woolta 블로그 ver2.0 기술 개발 블로그'/>
            <meta property="og:description" content="woolta 블로그 ver2.0 기술 개발 블로그"/>
            <meta property="og:site_name" content="woolta Blog"/>
            <meta name='viewport'
                  content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0, viewport-fit=cover'/>
            <meta name="google-site-verification" content="mHu43Zp59l_qzcOGtYILaM-tIH-mPKepPuYxRwbIqbs"/>
            <link rel="stylesheet" href="/_next/static/style.css"/>
            <link rel="stylesheet"
                  href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.8/styles/atom-one-dark.min.css"/>
            <link
                href="https://fonts.googleapis.com/css?family=Roboto:400,700,900&amp;subset=cyrillic,cyrillic-ext,greek,greek-ext,latin-ext,vietnamese"
                rel="stylesheet"/>
            <link rel="manifest" href="/static/manifest.json"/>
        </Head>
        <body>
        <Main/>
        <NextScript/>
        </body>
        </html>
    }
}
