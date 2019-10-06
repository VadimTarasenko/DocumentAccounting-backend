import express from 'express';

import { UserModel } from '../schemas';

class UserController {

  create = (req: express.Request, res: express.Response) => {
    const postData = {
      email: req.body.email,
      fullname: req.body.fullname,
      password: req.body.password
    };

    const user = new UserModel(postData);

    user.save()
      .then((obj: any) => {
        res.json(obj);
      })
      .catch((reason) => {
        res.status(500).json({
          status: 'error',
          message: reason
        });
      });
  }
}

export default UserController;