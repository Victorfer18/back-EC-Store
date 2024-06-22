import { Request, Response } from "express";
import * as authService from "../services/authService";

export const register = async (req: Request, res: Response): Promise<void> => {
  try {
    const { username, password } = req.body;
    const user = await authService.register(username, password);
    res.status(201).json(user);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const { username, password } = req.body;
    const { user, token } = await authService.login(username, password);
    res.status(200).json({ user, token });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};
