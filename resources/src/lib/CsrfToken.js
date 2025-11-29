async function CsrfTokenGenerator(sessionID, response) {
  const encoder = new TextEncoder();
  const randomValue = crypto.randomUUID(16);
  const message = sessionID + "!" + randomValue;
  const messageBytes = encoder.encode(message);
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(process.env.NEXT_CSRF_SECRET),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const hmacSignature = await crypto.subtle.sign("HMAC", key, messageBytes);
  const hmacHex = Array.from(new Uint8Array(hmacSignature))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
  const csrfToken = `${hmacHex}.${message}`;
  response.cookies.set({
    httpOnly: false,
    secure: true,
    sameSite: "lax",
    name: "_crsf_token",
    value: csrfToken,
  });
}

async function VerifyCsrfToken(csrfToken, sessionID) {
  const encoder = new TextEncoder();
  const [receivedHmac, message] = csrfToken.split(".");

  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(process.env.NEXT_CSRF_SECRET),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );

  const hmacSignature = await crypto.subtle.sign(
    "Hmac",
    key,
    encoder.encode(message)
  );

  const expectedHmac = Array.from(new Uint8Array(hmacSignature))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");

  return receivedHmac === expectedHmac && message.startsWith(`${sessionID}!`);
}

export { CsrfTokenGenerator, VerifyCsrfToken };
