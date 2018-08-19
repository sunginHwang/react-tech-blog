const routes = require('next-routes');

module.exports = routes()
    .add('/test','/test','main')
    .add('postEdit','/edit','postEdit')
    .add('postDetail', '/categories/:categoryNo/posts/:postNo','postDetail')
    .add('postList', '/categories/:categoryNo','postList')
    .add('custom', '/custom/routes/:name','routeCustom');