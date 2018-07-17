const routes = require('next-routes');

module.exports = routes()
    .add('/test','/test','main')
    .add('custom', '/custom/routes/:name','routeCustom');