import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { db } from "../utils/db.server";

const authenticateToken = async (req: Request, res: Response, next: NextFunction) => {
  let token: string | undefined;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded: any = jwt.verify(token, (process.env.JWT_SECRET_KEY as any));
      const id = decoded.id;
      (req as any).user = await db.user.findUnique({
        where: { id },
      });
      (req as any).user.password = undefined;
      (req as any).userId= id;
      next();
    } catch (err) {
      res.status(401);
      throw new Error("Not authorized,Invalid Credentials");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("Not authorized,Please login");
  }
};

export default authenticateToken;
