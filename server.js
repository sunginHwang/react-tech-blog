const { makeCategoriesSiteMap, makePostsSiteMap} = require('./sitemapGenerator');

const { createServer } = require('http')
const express = require('express')
const next = require('next')
const routes = require('./routes')

const port = parseInt(process.env.PORT, 10) || 8091
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handler = routes.getRequestHandler(app);

const path = require('path');
const options = {
    root: path.join(__dirname, '/'),
    headers: {
        'Content-Type': 'text/plain;charset=UTF-8',
    }
};

app.prepare().then(() => {
    const server = express()

    server.get('/robots.txt', (req, res) => (
        res.status(200).sendFile('robots.txt', options)
    ));

    server.get('/site-map/posts.xml', (req, res)  => {
        makePostsSiteMap().then(postsXml => {
            res.set('Content-Type', 'text/xml');
            res.send(postsXml);
        });
    });

    server.get('/site-map/categories.xml', (req, res) => {

        makeCategoriesSiteMap().then(categoriesXml => {
            res.set('Content-Type', 'text/xml');
            res.send(categoriesXml);
        });
    });

    server.get('*', (req, res) => {
        return handler(req, res)
    })

    server.listen(port, err => {
        if (err) throw err
        console.log(`> Ready on http://localhost:${port}`)
    })
})
