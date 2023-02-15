const IPFS = require("ipfs");
const OrbitDB = require("orbit-db");

async function main() {
  // Create an IPFS instance
  const ipfs = await IPFS.create();

  // Create an OrbitDB instance
  const orbitdb = await OrbitDB.createInstance(ipfs);

  // Create a new database called 'my-database'
  const db = await orbitdb.docs("my-database");

  // Open the database
  await db.load();

  // Add some JSON data to the database
  await db.put({ _id: 1, name: "Alice", age: 30 });
  await db.put({ _id: 2, name: "Bob", age: 25 });

  // Get all the JSON data from the database
  const allData = db.all;

  // Log the JSON data to the console
  console.log(allData);

  // Close the database and disconnect from IPFS
  await db.close();
  await orbitdb.disconnect();
}

main();

// OUTPUT
// Swarm listening on /ip4/172.16.109.144/tcp/4002/p2p/QmUYAgBU6gShNXabCdr2KCBM9jFWm2aefd6daEjAQtRbEH
// Swarm listening on /ip4/192.168.137.1/tcp/4002/p2p/QmUYAgBU6gShNXabCdr2KCBM9jFWm2aefd6daEjAQtRbEH
// Swarm listening on /ip4/127.0.0.1/tcp/4002/p2p/QmUYAgBU6gShNXabCdr2KCBM9jFWm2aefd6daEjAQtRbEH
// Swarm listening on /ip4/127.0.0.1/tcp/4003/ws/p2p/QmUYAgBU6gShNXabCdr2KCBM9jFWm2aefd6daEjAQtRbEH
// [
//       id: '028a4b9139197f66a9e3ac3ec2ac28ff856e6faeb3a0871721d472711efbba9ff9',
//       publicKey: '0445a93d829ad61fd930f8cc0f45958a3fe372d8a24f96cc56271834033fb106443a355749a356780c93155d362e1d90ba72d68e81b1d6888f7e42b06a0ec58781',
//       signatures: [Object],
//       type: 'orbitdb'
//     },
//     sig: '304402206a1fdde277089a55ecd05b8a652a04ce1001c031fe39ed39a86d322787dbfdf7022057d28cd436ed5974c5b4075a17857917bd06e93cae305aa6da8139ed8cf38117'
//   }
// ]
