import { appendFile } from "fs";

export const logMessage = async (
  msg: { encode: () => string } | string,
  type: "request" | "response",
) => {
  const content = typeof msg == "string" ? msg : msg.encode();
  const data = content.replace(/\r/g, "\n");

  await new Promise((resolve, reject) =>
    appendFile(
      "log.txt",
      `${type}:\n${data}\n---------------------------------${
        type === "response" ? "\n---------------------------------" : ""
      }`,
      "utf-8",
      (err) => (err ? reject(err) : resolve(undefined)),
    ),
  );
};
