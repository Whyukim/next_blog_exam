import { IPostSendEmail } from "./types";

export async function postSendContactEmail(email: IPostSendEmail) {
  const res = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(email),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message || "서버 요청에 실패");
  }

  return data;
}
