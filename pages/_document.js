import Document, { Head, Main, NextScript } from 'next/document'
import Helmet from 'react-helmet';
export default class MyDocument extends Document {

    render() {
        return (
            <html>
            <Head>
                <link rel="stylesheet" href="/_next/static/style.css" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/atelier-cave-dark.min.css"/>
                <link href="https://fonts.googleapis.com/css?family=Roboto:400,700,900&amp;subset=cyrillic,cyrillic-ext,greek,greek-ext,latin-ext,vietnamese" rel="stylesheet"/>
            </Head>
            <Helmet>
                <title>woolta</title>
                <meta charSet='utf-8' />
                <meta name="mobile-web-app-capable" content="yes"/>
                <meta name="theme-color" content="#6e827f"/>
                <meta name="apple-mobile-web-app-capable" content="yes"/>
                <meta property="og:image" content="https://images.velog.io/velog.png" />
                <meta name='description' content='woolta 블로그 ver2.0 기술 개발 블로그'/>
                <meta property="og:description" content="woolta 블로그 ver2.0 기술 개발 블로그"/>
                <meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0, viewport-fit=cover'/>
                <link rel="icon" href="/static/woolta.ico" type="icon" />
                <link rel="apple-touch-icon-precomposed" href="/static/woolta.ico"/>
                <link rel="icon" type="icon" href="/static/woolta.ico" sizes="196x196" />
                <link rel="icon" type="icon" href="/static/woolta.ico"sizes="96x96" />
                <link rel="icon" type="icon" href="/static/woolta.ico" sizes="32x32" />
                <link rel="icon" type="icon" href="/static/woolta.ico" sizes="16x16" />
                <link rel="icon" type="icon" href="/static/woolta.ico" sizes="128x128" />
                <link rel="apple-touch-icon" href="/static/woolta.ico"/>
                <link rel="shortcut icon" href="/static/woolta.ico"/>
            </Helmet>

          {/*  <Head>
                <meta charSet='utf-8' />
                <link rel="icon" href="/static/woolta.ico" type="icon" />
                <link rel="apple-touch-icon-precomposed" href="/static/woolta.ico"/>
                <link rel="icon" type="icon" href="/static/woolta.ico" sizes="196x196" />
                <link rel="icon" type="icon" href="/static/woolta.ico"sizes="96x96" />
                <link rel="icon" type="icon" href="/static/woolta.ico" sizes="32x32" />
                <link rel="icon" type="icon" href="/static/woolta.ico" sizes="16x16" />
                <link rel="icon" type="icon" href="/static/woolta.ico" sizes="128x128" />
                <link rel="apple-touch-icon" href="/static/woolta.ico"/>
                <link rel="shortcut icon" href="/static/woolta.ico"/>
                <meta name="mobile-web-app-capable" content="yes"/>
                <meta name="theme-color" content="#6e827f"/>
                <meta name="apple-mobile-web-app-capable" content="yes"/>
                <meta name='description' content='woolta 블로그 ver2.0 기술 개발 블로그'/>
                <meta property="og:description" content="woolta 블로그 ver2.0 기술 개발 블로그"/>
                <meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0, viewport-fit=cover'/>
                <link rel="stylesheet" href="/_next/static/style.css" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/atelier-cave-dark.min.css"/>
                <link href="https://fonts.googleapis.com/css?family=Roboto:400,700,900&amp;subset=cyrillic,cyrillic-ext,greek,greek-ext,latin-ext,vietnamese" rel="stylesheet"/>
            </Head>*/}
            <body>
            <Main/>
            <NextScript/>
            </body>
            </html>
        )
    }
}
