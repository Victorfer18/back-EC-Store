import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { config } from "../config/config";
import { User } from "@prisma/client";

interface AuthenticatedRequest extends Request {
  user: User;
}

export const authenticateToken = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): void => {
  const token = req.header("Authorization")?.split(" ")[1];
  if (!token) {
    res.sendStatus(401).json({ error: "Unauthorized" });
  }

  jwt.verify(token || "", config.jwtSecret, (err: any, user: any) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};
