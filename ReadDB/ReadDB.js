const IPFS = require("ipfs");
const OrbitDB = require("orbit-db");
const { studentData } = require("../Databases/students");
const { teaacherData } = require("../Databases/teachers");

async function main() {
  // Create an IPFS instance
  const ipfs = await IPFS.create();

  // Create an OrbitDB instance
  const orbitdb = await OrbitDB.createInstance(ipfs);

  // STUDENT DATA
  //-----
  // Open the database
  const studentDB = await orbitdb.docstore("student-database");

  // Load the database
  await studentDB.load();

  // Add the JSON data to the database from each array index
  for (var i = 0; i < 10; i++) {
    await studentDB.put(studentData[i]);
  }
  //   console.log(studentDB.all);
  //-----

  //TEACHER DATA
  //----
  const teacherDB = await orbitdb.docstore("student-database");

  // Load the database
  await teacherDB.load();

  // Add the JSON data to the database from each array index
  for (var i = 0; i < 10; i++) {
    await teacherDB.put(studentData[i]);
  }
  //   console.log(teacherDB.all);
  //----

  const profile = studentDB.get("10");
  console.log(profile);

  // Close the database and disconnect from IPFS
  await studentDB.close();
  await teacherDB.close();
  await orbitdb.disconnect();
}

main();
