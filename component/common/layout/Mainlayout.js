import Head from 'next/head';
import Router from 'next/router'

Router.onRouteChangeStart = (url) => {
    console.log(`route: ${url}`)
}

export default ({ children, title = '기본페이지' }) => (
    <div>
        <Head>
            <title>{ title }</title>
            <meta charSet='utf-8' />
            <link rel="icon" href="/static/mrhFa.ico" type="icon" />
            <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        </Head>

        { children }

    </div>
)