import { jwtVerify } from "jose";

export async function CookieVerifier(jwt) {
  try {
    const res = await jwtVerify(
      jwt,
      new TextEncoder().encode(process.env.NEXT_JWT_SECRET)
    );

    return res.payload.id;
  } catch (error) {
    console.log("in error");
    return false;
  }
}
