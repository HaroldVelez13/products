import bcrypt from "bcrypt-nodejs";
import { NextFunction, Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import "../auth/passportHandler";
import { User } from "../models/user";
import { JWT_SECRET } from "../util/secrets";


export class UserController {

  public async registerUser(req: Request, res: Response): Promise<void> {
    const { username, password, email, phone } = req.body;
    const hashedPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));

    await User.create({
      username: username,
      email: email,
      phone: phone,
      password: hashedPassword,

    });
    const user = await User.findOne({ password: hashedPassword });

    const token = jwt.sign({ username: username, scope: req.body.scope }, JWT_SECRET);
    res.status(200).send({ token: token, user: user });
  }

  public async authenticateUser(req: Request, response: Response, next: NextFunction) {
    console.log("authenticateUser");
    const { username, password } = req.body;
    const user = await User.findOne({ username: username });
    const salt = bcrypt.genSaltSync(10);
    await bcrypt.compare(password, user.password, function (err: any, res: any) {
      if (err) {
        return response.status(401).json({ status: "error", code: "unauthorized" });
      }
      const token = jwt.sign({ username: user.username }, JWT_SECRET);
      return response.status(200).send({ token: token, user: user });

    });

  }

  public logoutUser(req: Request, res: Response, _next: NextFunction) {
    req.logout();
    res.status(200).send({ response: "logout Successfully" });
  }






}