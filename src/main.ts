import { createConnection, createServer } from "net";
import { logMessage } from "./utils/LogMessage.ts";
import { HL7MessageResponse } from "./HL7MessageResponse.ts";
import { HL7MessageRequest } from "./HL7MessageRequest.ts";
import { REQUESTS_REGEX } from "./utils/DecoderUtils.ts";

const port = 10101;

const sender = createConnection(10011, "62.240.227.134");
sender.on("error", (...data) => console.log("error", ...data));
sender.on("close", (e) => console.log("close, err :", e));
sender.on("data", (data) => console.log("data", [data.toString()]));
sender.write("hello");

const server = createServer((socket) => {
  console.log("client connected");

  socket.on("close", (withError) => {
    console.log("close, err :", withError);
  });
  socket.on("data", async (data) => {
    console.log(socket.remoteAddress, socket.remotePort, socket.remoteFamily);
    console.log([data.toString()]);

    // Get list of requests
    const requests = data.toString().match(REQUESTS_REGEX);

    if (!requests) {
      throw new Error("NO PROPER REQUEST");
    }

    requests.map(async (request) => {
      const hl7Request = new HL7MessageRequest(request);
      await logMessage(request, "request", hl7Request.MSH.MSH.messageControl);
      const response = HL7MessageResponse.OkResponse(hl7Request);
      await logMessage(response, "response", hl7Request.MSH.MSH.messageControl);
      await new Promise((resolve) =>
        setTimeout(() => resolve(undefined), 10000),
      );
      console.log([response.encode()]);
      socket.write(response.encode(), "utf-8");
    });
  });
});

server.listen(port, undefined, () => {
  console.log("TCP Server is running on port " + port + ".");
});
