import { appendFile } from "fs";
import { DateTime } from "luxon";

export const logMessage = async (
  msg: { encode: () => string } | string,
  type: "request" | "response",
  id: string,
) => {
  const content = typeof msg == "string" ? msg : msg.encode();
  const data = content.replace(/\r/g, "\n");

  const text = `${id} - ${DateTime.now().toFormat(
    "YYYY-MM-DD HH:MM:SS.SSSS",
  )} - ${type}:\n${data}\n---------------------------------${
    type === "response" ? "\n---------------------------------\n" : "\n"
  }`;

  await new Promise((resolve, reject) =>
    appendFile("log.txt", text, "utf-8", (err) =>
      err ? reject(err) : resolve(undefined),
    ),
  );
  console.log(text);
};
