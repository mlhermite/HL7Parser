import { appendFile } from "fs";

export const logMessage = async (
  msg: { encode: () => string } | string,
  type: "request" | "response",
  id: string,
) => {
  const content = typeof msg == "string" ? msg : msg.encode();
  const data = content.replace(/\r/g, "\n");

  await new Promise((resolve, reject) =>
    appendFile(
      "log.txt",
      `${id} - ${new Date(
        Date.now(),
      ).toISOString()} - ${type}:\n${data}\n---------------------------------${
        type === "response" ? "\n---------------------------------\n" : "\n"
      }`,
      "utf-8",
      (err) => (err ? reject(err) : resolve(undefined)),
    ),
  );
};
