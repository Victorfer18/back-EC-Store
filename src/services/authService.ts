import jwt from "jsonwebtoken";
import { User } from "@prisma/client";
import * as userModel from "../models/userModel";
import { config } from "../config/config";

interface AuthServiceResponse {
  user: User;
  token: string;
}

export const register = async (
  username: string,
  password: string
): Promise<User> => {
  const existingUser = await userModel.findUserByEmail(username);
  if (existingUser) {
    throw new Error("User already exists");
  }
  const user = await userModel.createUser(username, password);
  return user;
};

export const login = async (
  username: string,
  password: string
): Promise<AuthServiceResponse> => {
  const user = await userModel.findUserByEmail(username);
  if (!user || !(await userModel.comparePassword(user, password))) {
    throw new Error("Invalid username or password");
  }
  const token = jwt.sign({ id: user.id }, config.jwtSecret, {
    expiresIn: "1h",
  });
  return { user, token };
};
