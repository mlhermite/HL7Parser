import { createConnection, createServer } from 'net';
import { logMessage } from './LogMessage.ts';
import { decodeHL7Message } from './hl7/Decode/decode.ts';
import { encodeHL7Message } from './hl7/Encode/encode.ts';
import { DefaultOkResponse } from './hl7/Encode/DefaultOkResponse.ts';
const port = 10101;

const sender = createConnection(10011, '62.240.227.134');
sender.on('error', (...data) => console.log('error', ...data));
sender.on('close', e => console.log('close, err :', e));
sender.on('data', data => console.log('data', [data.toString()]));

const server = createServer(socket => {
  console.log('client connected');

  socket.on('close', withError => {
    console.log('close, err :', withError);
  });
  socket.on('data', async data => {
    console.log(socket.remoteAddress, socket.remotePort, socket.remoteFamily);
    console.log([data.toString()]);

    const requests = decodeHL7Message(data.toString());

    requests.map(async request => {
      await logMessage(JSON.stringify(request), 'request', request.MSH.messageControl);
      const response = DefaultOkResponse(request);
      await logMessage(JSON.stringify(response), 'response', request.MSH.messageControl);
      console.log([encodeHL7Message(response)]);
      await new Promise(resolve => setTimeout(() => resolve(undefined), 1000));
      socket.write(encodeHL7Message(response), 'utf-8');
    });
  });
});

server.listen(port, undefined, () => {
  console.log('TCP Server is running on port ' + port + '.');
});
