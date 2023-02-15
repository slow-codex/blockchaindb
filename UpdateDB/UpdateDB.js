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

  // Reading the Database
  var profile = studentDB.get("10");
  console.log(profile);

  // Changing the the name of the student with id = "10"
  profile[0].name = "New name";

  // Deleting the student details at id = "10"
  await studentDB.del(10);

  // Adding the new student details at id = "10"
  await studentDB.put(profile[0]);

  // Showing the new student details at id = "10"
  const pr1 = studentDB.get("10");
  console.log("After Changing updating the new name");
  console.log(pr1);

  // console.log(studentDB.all);

  // Close the database and disconnect from IPFS
  await studentDB.close();
  await teacherDB.close();
  await orbitdb.disconnect();
}

main();

// OUTPUT
// Swarm listening on /ip4/192.168.31.97/tcp/4002/p2p/QmUYAgBU6gShNXabCdr2KCBM9jFWm2aefd6daEjAQtRbEH
// Swarm listening on /ip4/127.0.0.1/tcp/4002/p2p/QmUYAgBU6gShNXabCdr2KCBM9jFWm2aefd6daEjAQtRbEH
// Swarm listening on /ip4/127.0.0.1/tcp/4003/ws/p2p/QmUYAgBU6gShNXabCdr2KCBM9jFWm2aefd6daEjAQtRbEH
// [
//   {
//     _id: 10,
//     name: 'William Brown',
//     age: 22,
//     course: 'Mechanical Engineering'
//   }
// ]
// After Changing updating the new name
// [
//   {
//     _id: 10,
//     name: 'New name',
//     age: 22,
//     course: 'Mechanical Engineering'
//   }
// ]
