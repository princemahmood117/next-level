import { prisma } from "../../lib/prisma";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const login = async (email:string, password:string) => {
  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  if (!user) throw new Error("No user found!")

  const matchPassword = await bcrypt.compare(
    password,
    user?.password as string,
  );

  if (!matchPassword) throw new Error("Password not matched!")

  const token = jwt.sign({ id: user?.id, role: user?.role },"this is verification secret",
    { expiresIn: "7d" },
  );

  return token;
};


export const userService = {
    login
}