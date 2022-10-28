import { Request } from "zeromq";

async function runClient() {
  console.log("Connecting to hello world server…");

  //  Socket to talk to server
  const sock = new Request();
  sock.connect("tcp://127.0.0.1:7777");

  for (let i = 0; i < 10; i++) {
    console.log("Sending Hello ", i);
    await sock.send("Hello");
    const [result] = await sock.receive();
    console.log(`Client Received : [${result.toString()}]`, i);
  }
}

runClient();
