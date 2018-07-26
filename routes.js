const routes = require('next-routes');

module.exports = routes()
    .add('/test','/test','main')
    .add('board', '/category/:categoryNo/board/:boardNo','detailView')
    .add('custom', '/custom/routes/:name','routeCustom');