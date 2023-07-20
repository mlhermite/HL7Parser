import { createServer } from "net";
import { logMessage } from "./utils/LogMessage.ts";
import { HL7MessageResponse } from "./HL7MessageResponse.ts";
import { HL7MessageRequest } from "./HL7MessageRequest.ts";
import { REQUESTS_REGEX } from "./utils/DecoderUtils.ts";

const port = 10101;

const server = createServer((c) => {
  console.log("client connected");

  c.on("close", (withError) => {
    console.log("close, err :", withError);
  });
  c.on("data", async (data) => {
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
      console.log([response.encode()]);
      c.write(response.encode(), "utf-8");
    });
  });
});

server.listen(port, undefined, () => {
  console.log("TCP Server is running on port " + port + ".");
});
