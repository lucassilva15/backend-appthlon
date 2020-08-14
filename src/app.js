import express from 'express';
import xmlparser from 'express-xml-bodyparser';

import routes from './routes';

class App {

    constructor(){
        this.server = express();

        this.middlewares();
        this.routes();
    }

    routes(){
        this.server.use(routes);
    }

    middlewares(){
        this.server.use(express.json());
        this.server.use(xmlparser());
    }

}

export default new App().server;