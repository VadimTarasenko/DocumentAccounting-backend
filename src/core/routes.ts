import express from 'express';
import bodyParser from 'body-parser';

import { UserController } from '../controllers';


const createRoutes = (app: express.Express) => {

  const UserControl = new UserController();

  app.use(bodyParser.json());

  app.post('/user/signup', UserControl.create);

}

export default createRoutes;