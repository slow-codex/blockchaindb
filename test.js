const IPFS = require("ipfs");
const OrbitDB = require("orbit-db");

async function main() {
  // Connect to IPFS
  const ipfs = await IPFS.create();

  // Connect to OrbitDB
  const orbitdb = await OrbitDB.createInstance(ipfs);

  // Open the database you want to modify
  const db = await orbitdb.open("database-name");

  // Replace the value
  const newRecord = { id: 1, value: "new value" };
  const hash = db.address.root;
  const index = db.getIndex("id");
  const existingRecord = index.get(1);
  if (existingRecord) {
    db.del(existingRecord.hash);
    db.put(newRecord);
  }

  // Close the database and disconnect from IPFS
  await db.close();
  await orbitdb.disconnect();
  await ipfs.stop();
}
main();
