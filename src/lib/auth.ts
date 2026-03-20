import { SignJWT, jwtVerify } from "jose";

const getSecret = () =>
  new TextEncoder().encode(process.env.ADMIN_JWT_SECRET ?? "fallback-secret");

export async function createToken(password: string): Promise<string | null> {
  if (password !== process.env.ADMIN_PASSWORD) {
    return null;
  }

  const token = await new SignJWT({ role: "admin" })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("4h")
    .sign(getSecret());

  return token;
}

export async function verifyToken(token: string): Promise<boolean> {
  try {
    await jwtVerify(token, getSecret());
    return true;
  } catch {
    return false;
  }
}
