const { createServer } = require('http')
const next = require('next')
const routes = require('./routes')

const port = parseInt(process.env.PORT, 10) || 8081
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handler = routes.getRequestHandler(app)

console.log('serverJs start');
console.log(handler);
console.log('serverJs end');

app.prepare()
    .then(() => {
        createServer(handler)
            .listen(port, (err) => {
                if (err) throw err
                console.log(`> Ready on http://localhost:${port}`);
            })
    });
