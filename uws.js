// import uWs from "uWebSockets.js";
// import zmq, { Reply, Socket } from "zeromq";

// const sock = new zmq.Reply();

import { Reply, Request, Socket } from "zeromq";

async function runServer() {
  const sock = new Reply();
  // sock.bind("tcp://*:7777").then(() => {
  //   // sock.receive().then((result) => {

  //   //   for (const msg of result) {
  //   //     console.log('Received ' + ': [' + msg.toString() + ']');
  //   //     sock.send('World');
  //   //     // Do some 'work'
  //   //   }
  //   // });
  //   sock.receive().then((result) => {
  //     console.log(`Received [${result[0]}]`);
  //     sock.send("World!");
  //   });
  // });
  await sock.bind("tcp://*:7777");
  for await (const [msg] of sock) {
    console.log(msg);
    console.log("Server Received " + ": [" + msg.toString() + "]");
    console.log(msg);
    await sock.send("World");
    // Do some 'work'
  }
}

runServer();

// const host = process.env.HOST || "localhost";
// const port = process.env.PORT || 3000;

// uWs
//   .App({})
//   .ws("/*", {
//     compression: uWs.SHARED_COMPRESSOR,
//     maxPayloadLength: 16 * 1024 * 1024,
//     idleTimeout: 10,
//     /* Handlers */
//     open: (ws) => {
//       console.log("A WebSocket connected!");
//     },
//     message: (ws, message, isBinary) => {
//       /* Ok is false if backpressure was built up, wait for drain */
//       sock
//         .send(new TextDecoder().decode(message))
//         .then((test) => {
//           console.log(test);
//           sock.receive().then(([result]) => {
//             console.log(result);
//             sock.send({ length: Number(Buffer.from(result)) });
//           });
//         })
//         .catch((e) => console.log(e));

//       let ok = ws.send(message, isBinary);
//     },
//     drain: (ws) => {
//       console.log("WebSocket backpressure: " + ws.getBufferedAmount());
//     },
//     close: (ws, code, message) => {
//       console.log("WebSocket closed");
//     },
//   })
//   .get("/", (res, req) => {
//     res.end("test");
//   })
//   .listen(port, (token) => {
//     if (token) {
//       if (token) {
//         sock.connect("tcp://localhost:5555");
//         console.log("Listening to port " + port + " host is " + host);
//       } else {
//         console.log("Failed to listen to port " + port + " host is " + host);
//       }
//     }
//   });
