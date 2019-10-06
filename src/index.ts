import mongoose from 'mongoose';
import express from 'express';
import bodyParser from 'body-parser';

import createRoutes from './core/routes';

const app = express();

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/documents', { useNewUrlParser: true });

mongoose.set('useCreateIndex', true)

createRoutes(app);

app.listen(3003, function () {
  console.log('Server working! Port 3003');
});