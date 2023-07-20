import { createServer } from "net";
import { logMessage } from "./utils/LogMessage.ts";
import { HL7MessageResponse } from "./HL7MessageResponse.ts";
import { HL7MessageRequest } from "./HL7MessageRequest.ts";

const port = 10101;

const server = createServer((c) => {
  console.log("client connected");
  c.on("close", (withError) => {
    console.log("close, err :", withError);
  });
  c.on("connect", () => {
    console.log("connect");
  });
  c.on("data", async (data) => {
    const content = data.toString("utf8");
    await logMessage(content, "request");
    const request = new HL7MessageRequest(content);
    console.log(request);
    const response = HL7MessageResponse.OkResponse(request);
    await logMessage(response, "response");
    c.write(response.encode(), "utf-8");
  });
});
server.listen(port, undefined, () => {
  console.log("TCP Server is running on port " + port + ".");
});
