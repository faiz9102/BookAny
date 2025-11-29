import generateSessionToken from "./generateSessionToken";

export default async function createSession(res) {
  const { token, id } = await generateSessionToken();
  res.cookies.set({
    name: "_session_pad",
    value: token,
    httpOnly: true,
    sameSite: "lax",
    secure: true,
  });
  return id;
}
