import { SignJWT } from "jose";
import { v4 } from "uuid";
export default async function generateSessionToken() {
  const randomUUID = v4();
  return {
    token: await new SignJWT({ id: randomUUID })
      .setProtectedHeader({ alg: "HS256" })
      .sign(new TextEncoder().encode(process.env.NEXT_JWT_SECRET)),
    id: randomUUID,
  };
}
