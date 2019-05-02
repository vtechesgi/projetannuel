'use strict';

class RouterBuilder {
    build(app) {  
        //app.use('/user',require('./user.route'));  
        app.use('/auth',require('./auth.route'));
        app.use('/api',require('./datahtpp.route'));
        app.use('/foot',require('./foot.route'));
    }
}

module.exports = new RouterBuilder();