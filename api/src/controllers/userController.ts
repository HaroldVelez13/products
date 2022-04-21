import bcrypt from "bcrypt-nodejs";
import { NextFunction, Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import passport from "passport";
import "../auth/passportHandler";
import { User } from "../models/user";
import { JWT_SECRET } from "../util/secrets";


export class UserController {

  public async registerUser(req: Request, res: Response): Promise<void> {
    const { username, password, email, phone } = req.body
    const hashedPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));

    await User.create({
      username: username,
      email: email,
      phone: phone,
      password: hashedPassword,

    });

    const token = jwt.sign({ username: username, scope: req.body.scope }, JWT_SECRET);
    res.status(200).send({ token: token });
  }

  public authenticateUser(_req: Request, res: Response, next: NextFunction) {

    passport.authenticate("local", function (err, user, _info) {
      // no async/await because passport works only with callback ..
      if (err) return next(err);
      if (!user) {
        return res.status(401).json({ status: "error", code: "unauthorized" });
      } else {
        const token = jwt.sign({ username: user.username }, JWT_SECRET);
        res.status(200).send({ token: token });
      }
    });
  }

  public logoutUser(req: Request, res: Response, _next: NextFunction) {
    req.logout();
    res.status(200).send({ response: "logout Successfully" });
  }






}