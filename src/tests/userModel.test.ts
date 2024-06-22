import { PrismaClient } from "@prisma/client";
import * as userModel from "../models/userModel";

const prisma = new PrismaClient();

describe("User Model", () => {
  beforeAll(async () => {
    await prisma.user.deleteMany();
  });

  it("should hash the password before saving", async () => {
    const user = await userModel.createUser("testuser", "password123");
    expect(user.password).not.toBe("password123");
  });

  it("should compare passwords correctly", async () => {
    const user = await userModel.createUser("testuser", "password123");
    const isMatch = await userModel.comparePassword(user, "password123");
    expect(isMatch).toBe(true);
  });
});
