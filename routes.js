const routes = require('next-routes');

module.exports = routes()
    .add('/test','/test','main')
    .add('board', '/categories/:categoryNo/boards/:boardNo','detailView')
    .add('custom', '/custom/routes/:name','routeCustom');