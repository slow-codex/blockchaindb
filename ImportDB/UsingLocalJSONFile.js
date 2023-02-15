const IPFS = require("ipfs");
const OrbitDB = require("orbit-db");
const { studentData } = require("../Databases/students");

async function main() {
  // Create an IPFS instance
  const ipfs = await IPFS.create();

  // Create an OrbitDB instance
  const orbitdb = await OrbitDB.createInstance(ipfs);

  // Open the database
  const db = await orbitdb.docstore("student-database");

  // Load the database
  await db.load();

  // Add the JSON data to the database from each array index
  for (var i = 0; i < 10; i++) {
    await db.put(studentData[i]);
  }

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
// Swarm listening on /ip4/192.168.31.97/tcp/4002/p2p/QmUYAgBU6gShNXabCdr2KCBM9jFWm2aefd6daEjAQtRbEH
// Swarm listening on /ip4/192.168.137.1/tcp/4002/p2p/QmUYAgBU6gShNXabCdr2KCBM9jFWm2aefd6daEjAQtRbEH
// Swarm listening on /ip4/127.0.0.1/tcp/4002/p2p/QmUYAgBU6gShNXabCdr2KCBM9jFWm2aefd6daEjAQtRbEH
// Swarm listening on /ip4/127.0.0.1/tcp/4003/ws/p2p/QmUYAgBU6gShNXabCdr2KCBM9jFWm2aefd6daEjAQtRbEH
// [
//   {
//     hash: 'zdpuArsJWL4mkJJehgkEyJgCkChtTyF5NTBHUestQLr8Du2fD',
//     id: '/orbitdb/zdpuAtSL6WnotZZpKgXA9ePtRkaomJA8PBa6eGMZDZPrFHyrv/student-database',
//     payload: { op: 'PUT', key: 1, value: [Object] },
//     next: [ 'zdpuAtEZ2t7qqsxhbqH8R8AopW4maSHznFZZvBvVXeR2FhZSU' ],
//     refs: [
//       'zdpuArSPN84Gh8b9TNworKzJWZnKcMST5Gmhq76uXJqfucKZk',
//       'zdpuAvoy1sgCzG5YhimTiNxXDWitF3f2sWo2diCuu78odR4CJ',
//       'zdpuAtLTPVJHyByEVzBwzYAQnxu2Hx6GmAwfFJSBrkFwSB47g',
//       'zdpuAqyigJbmsGmuu6J8wdKo6oDmfzYSQDAipYb8y17KX5RXv'
//     ],
//     v: 2,
//     clock: LamportClock {
//       id: '04b7dacabefe927b7b98fc10c8984517e70233409fd3e799b070fec56c9f41b1aa1aa3ec4a1e2112251b3708c502040ca315a84c4551920a1c651f2237b280f074',
//       time: 11
//     },
//     key: '04b7dacabefe927b7b98fc10c8984517e70233409fd3e799b070fec56c9f41b1aa1aa3ec4a1e2112251b3708c502040ca315a84c4551920a1c651f2237b280f074',
//     identity: {
//       id: '03223b09e849e176b483ca6f404ab3e8cfd57251b4867934cb77b9fb87976a7783',
//       publicKey: '04b7dacabefe927b7b98fc10c8984517e70233409fd3e799b070fec56c9f41b1aa1aa3ec4a1e2112251b3708c502040ca315a84c4551920a1c651f2237b280f074',
//       signatures: [Object],
//       type: 'orbitdb'
//     },
//     sig: '3045022100ca3e94ac0c76babe84ab173f1133fde06893a1c6b12d38d1cdba7d7101024ac00220457ad356bd11307c61a90b4beac6806dc359dea2318e6772248cd06334dbc72c'
//   },
//   {
//     hash: 'zdpuB2GekGfvJnTYour3da11USMwxecbjXFkHSqqUcw5ZWkwz',
//     id: '/orbitdb/zdpuAtSL6WnotZZpKgXA9ePtRkaomJA8PBa6eGMZDZPrFHyrv/student-database',
//     payload: { op: 'PUT', key: 2, value: [Object] },
//     next: [ 'zdpuArsJWL4mkJJehgkEyJgCkChtTyF5NTBHUestQLr8Du2fD' ],
//     refs: [
//       'zdpuAtEZ2t7qqsxhbqH8R8AopW4maSHznFZZvBvVXeR2FhZSU',
//       'zdpuAxx3rCcm49zufBK4sjVYuZ18vsNbHr5Fqq3Lh5WJdJxyW',
//       'zdpuAx42DXH4bEiFxT6Nwnkq56TPLhMQyyELyiBtoh2JKwiPu',
//       'zdpuAqyigJbmsGmuu6J8wdKo6oDmfzYSQDAipYb8y17KX5RXv'
//     ],
//     v: 2,
//     clock: LamportClock {
//       id: '04b7dacabefe927b7b98fc10c8984517e70233409fd3e799b070fec56c9f41b1aa1aa3ec4a1e2112251b3708c502040ca315a84c4551920a1c651f2237b280f074',
//       time: 12
//     },
//     key: '04b7dacabefe927b7b98fc10c8984517e70233409fd3e799b070fec56c9f41b1aa1aa3ec4a1e2112251b3708c502040ca315a84c4551920a1c651f2237b280f074',
//     identity: {
//       id: '03223b09e849e176b483ca6f404ab3e8cfd57251b4867934cb77b9fb87976a7783',
//       publicKey: '04b7dacabefe927b7b98fc10c8984517e70233409fd3e799b070fec56c9f41b1aa1aa3ec4a1e2112251b3708c502040ca315a84c4551920a1c651f2237b280f074',
//       signatures: [Object],
//       type: 'orbitdb'
//     },
//     sig: '3045022100bcdf0fd35c75d5716d120aed49a93bb5865657bbafe54d20f25bddc392f777f402203ba754b3297725dda99471d1cb5ce05f892cb414dc2da0aaa1f1ee817be8daa7'
//   },
//   {
//     hash: 'zdpuAnpV1JUCLuwR7G2gti6imcyKxphBhmRpU6aW3Y4xijcXY',
//     id: '/orbitdb/zdpuAtSL6WnotZZpKgXA9ePtRkaomJA8PBa6eGMZDZPrFHyrv/student-database',
//     payload: { op: 'PUT', key: 3, value: [Object] },
//     next: [ 'zdpuB2GekGfvJnTYour3da11USMwxecbjXFkHSqqUcw5ZWkwz' ],
//     refs: [
//       'zdpuArsJWL4mkJJehgkEyJgCkChtTyF5NTBHUestQLr8Du2fD',
//       'zdpuArSPN84Gh8b9TNworKzJWZnKcMST5Gmhq76uXJqfucKZk',
//       'zdpuAmoZTS8fGtRjmjs33UuQzNVtp88wAqea6gGWLWHnbf3a7',
//       'zdpuAqyigJbmsGmuu6J8wdKo6oDmfzYSQDAipYb8y17KX5RXv'
//     ],
//     v: 2,
//     clock: LamportClock {
//       id: '04b7dacabefe927b7b98fc10c8984517e70233409fd3e799b070fec56c9f41b1aa1aa3ec4a1e2112251b3708c502040ca315a84c4551920a1c651f2237b280f074',
//       time: 13
//     },
//     key: '04b7dacabefe927b7b98fc10c8984517e70233409fd3e799b070fec56c9f41b1aa1aa3ec4a1e2112251b3708c502040ca315a84c4551920a1c651f2237b280f074',
//     identity: {
//       id: '03223b09e849e176b483ca6f404ab3e8cfd57251b4867934cb77b9fb87976a7783',
//       publicKey: '04b7dacabefe927b7b98fc10c8984517e70233409fd3e799b070fec56c9f41b1aa1aa3ec4a1e2112251b3708c502040ca315a84c4551920a1c651f2237b280f074',
//       signatures: [Object],
//       type: 'orbitdb'
//     },
//     sig: '30450221008a95d4dc3477acc6497567392c9b9862e60dcbae7c8306a56f68ea66cf4e951b0220523b126901da48809b7412ad9752dbba24d6a22b9828e5820915cb9f41ec1202'
//   },
//   {
//     hash: 'zdpuAvspMgY1MXqKmZSdGAWKYYkZntPh9QfGU2AQREcjC4yZ2',
//     id: '/orbitdb/zdpuAtSL6WnotZZpKgXA9ePtRkaomJA8PBa6eGMZDZPrFHyrv/student-database',
//     payload: { op: 'PUT', key: 4, value: [Object] },
//     next: [ 'zdpuAnpV1JUCLuwR7G2gti6imcyKxphBhmRpU6aW3Y4xijcXY' ],
//     refs: [
//       'zdpuB2GekGfvJnTYour3da11USMwxecbjXFkHSqqUcw5ZWkwz',
//       'zdpuAtEZ2t7qqsxhbqH8R8AopW4maSHznFZZvBvVXeR2FhZSU',
//       'zdpuAwpjVyEK8pxnPp5ojjyaxMd5a4K6cNKsE96hbH2oU8nuA',
//       'zdpuAqyigJbmsGmuu6J8wdKo6oDmfzYSQDAipYb8y17KX5RXv'
//     ],
//     v: 2,
//     clock: LamportClock {
//       id: '04b7dacabefe927b7b98fc10c8984517e70233409fd3e799b070fec56c9f41b1aa1aa3ec4a1e2112251b3708c502040ca315a84c4551920a1c651f2237b280f074',
//       time: 14
//     },
//     key: '04b7dacabefe927b7b98fc10c8984517e70233409fd3e799b070fec56c9f41b1aa1aa3ec4a1e2112251b3708c502040ca315a84c4551920a1c651f2237b280f074',
//     identity: {
//       id: '03223b09e849e176b483ca6f404ab3e8cfd57251b4867934cb77b9fb87976a7783',
//       publicKey: '04b7dacabefe927b7b98fc10c8984517e70233409fd3e799b070fec56c9f41b1aa1aa3ec4a1e2112251b3708c502040ca315a84c4551920a1c651f2237b280f074',
//       signatures: [Object],
//       type: 'orbitdb'
//     },
//     sig: '3045022100f84acac0d233f74dfa8c7b390a45785f4baa7d38d9e334471c55569bbcf968b202206569454325e93dbcc4d5e61ab3b6b49b38615d8327a1cb6b93a19cc752308adb'
//   },
//   {
//     hash: 'zdpuAyLFx1AtEerDSpmn6tTfy645Vb8jPTQHDHtt4ceNsnDWt',
//     id: '/orbitdb/zdpuAtSL6WnotZZpKgXA9ePtRkaomJA8PBa6eGMZDZPrFHyrv/student-database',
//     payload: { op: 'PUT', key: 5, value: [Object] },
//     next: [ 'zdpuAvspMgY1MXqKmZSdGAWKYYkZntPh9QfGU2AQREcjC4yZ2' ],
//     refs: [
//       'zdpuAnpV1JUCLuwR7G2gti6imcyKxphBhmRpU6aW3Y4xijcXY',
//       'zdpuArsJWL4mkJJehgkEyJgCkChtTyF5NTBHUestQLr8Du2fD',
//       'zdpuAvoy1sgCzG5YhimTiNxXDWitF3f2sWo2diCuu78odR4CJ',
//       'zdpuAqyigJbmsGmuu6J8wdKo6oDmfzYSQDAipYb8y17KX5RXv'
//     ],
//     v: 2,
//     clock: LamportClock {
//       id: '04b7dacabefe927b7b98fc10c8984517e70233409fd3e799b070fec56c9f41b1aa1aa3ec4a1e2112251b3708c502040ca315a84c4551920a1c651f2237b280f074',
//       time: 15
//     },
//     key: '04b7dacabefe927b7b98fc10c8984517e70233409fd3e799b070fec56c9f41b1aa1aa3ec4a1e2112251b3708c502040ca315a84c4551920a1c651f2237b280f074',
//     identity: {
//       id: '03223b09e849e176b483ca6f404ab3e8cfd57251b4867934cb77b9fb87976a7783',
//       publicKey: '04b7dacabefe927b7b98fc10c8984517e70233409fd3e799b070fec56c9f41b1aa1aa3ec4a1e2112251b3708c502040ca315a84c4551920a1c651f2237b280f074',
//       signatures: [Object],
//       type: 'orbitdb'
//     },
//     sig: '30440220521e8ff29424a2e77f6790e9032d2d4a5eefed78ce98ea3a0240e44a26af5c2a02204616b80f3c9d851bded7f27d374dbc020cc7a9d8a1e97a22697d50ad05d917ee'
//   },
//   {
//     hash: 'zdpuAqPpNCrj1tjKPcU6PQDmDumht7qRTeEhAj5SQtjPGCQTW',
//     id: '/orbitdb/zdpuAtSL6WnotZZpKgXA9ePtRkaomJA8PBa6eGMZDZPrFHyrv/student-database',
//     payload: { op: 'PUT', key: 6, value: [Object] },
//     next: [ 'zdpuAyLFx1AtEerDSpmn6tTfy645Vb8jPTQHDHtt4ceNsnDWt' ],
//     refs: [
//       'zdpuAvspMgY1MXqKmZSdGAWKYYkZntPh9QfGU2AQREcjC4yZ2',
//       'zdpuB2GekGfvJnTYour3da11USMwxecbjXFkHSqqUcw5ZWkwz',
//       'zdpuAxx3rCcm49zufBK4sjVYuZ18vsNbHr5Fqq3Lh5WJdJxyW',
//       'zdpuAqyigJbmsGmuu6J8wdKo6oDmfzYSQDAipYb8y17KX5RXv'
//     ],
//     v: 2,
//     clock: LamportClock {
//       id: '04b7dacabefe927b7b98fc10c8984517e70233409fd3e799b070fec56c9f41b1aa1aa3ec4a1e2112251b3708c502040ca315a84c4551920a1c651f2237b280f074',
//       time: 16
//     },
//     key: '04b7dacabefe927b7b98fc10c8984517e70233409fd3e799b070fec56c9f41b1aa1aa3ec4a1e2112251b3708c502040ca315a84c4551920a1c651f2237b280f074',
//     identity: {
//       id: '03223b09e849e176b483ca6f404ab3e8cfd57251b4867934cb77b9fb87976a7783',
//       publicKey: '04b7dacabefe927b7b98fc10c8984517e70233409fd3e799b070fec56c9f41b1aa1aa3ec4a1e2112251b3708c502040ca315a84c4551920a1c651f2237b280f074',
//       signatures: [Object],
//       type: 'orbitdb'
//     },
//     sig: '30440220393a688d9a9a4d41282d610cbd3f19da920a57a5b71fc13421f79e269e4b5f520220569bfd270af18a6451f1ff344ff47a6f64aca49a122d1715b7f4a28e7a834dbf'
//   },
//   {
//     hash: 'zdpuAqEA3WYsJMCsGNa1DRDE2bxbdn39Sf4v5W3NwZCDxPZ6w',
//     id: '/orbitdb/zdpuAtSL6WnotZZpKgXA9ePtRkaomJA8PBa6eGMZDZPrFHyrv/student-database',
//     payload: { op: 'PUT', key: 7, value: [Object] },
//     next: [ 'zdpuAqPpNCrj1tjKPcU6PQDmDumht7qRTeEhAj5SQtjPGCQTW' ],
//     refs: [
//       'zdpuAyLFx1AtEerDSpmn6tTfy645Vb8jPTQHDHtt4ceNsnDWt',
//       'zdpuAnpV1JUCLuwR7G2gti6imcyKxphBhmRpU6aW3Y4xijcXY',
//       'zdpuArSPN84Gh8b9TNworKzJWZnKcMST5Gmhq76uXJqfucKZk',
//       'zdpuAqyigJbmsGmuu6J8wdKo6oDmfzYSQDAipYb8y17KX5RXv'
//     ],
//     v: 2,
//     clock: LamportClock {
//       id: '04b7dacabefe927b7b98fc10c8984517e70233409fd3e799b070fec56c9f41b1aa1aa3ec4a1e2112251b3708c502040ca315a84c4551920a1c651f2237b280f074',
//       time: 17
//     },
//     key: '04b7dacabefe927b7b98fc10c8984517e70233409fd3e799b070fec56c9f41b1aa1aa3ec4a1e2112251b3708c502040ca315a84c4551920a1c651f2237b280f074',
//     identity: {
//       id: '03223b09e849e176b483ca6f404ab3e8cfd57251b4867934cb77b9fb87976a7783',
//       publicKey: '04b7dacabefe927b7b98fc10c8984517e70233409fd3e799b070fec56c9f41b1aa1aa3ec4a1e2112251b3708c502040ca315a84c4551920a1c651f2237b280f074',
//       signatures: [Object],
//       type: 'orbitdb'
//     },
//     sig: '304402203fff5fe9f578b9a2975e81c13c923f915785ffda7fa546f769da019897f7659002200ae7dde720e48047e0af8a37583f34422a7becabf50993fe1e60ad24d0d6092a'
//   },
//   {
//     hash: 'zdpuAtUGomx2UKnH3N89ezqMZmNAAHiYRPqWV7Y6mneTN74JX',
//     id: '/orbitdb/zdpuAtSL6WnotZZpKgXA9ePtRkaomJA8PBa6eGMZDZPrFHyrv/student-database',
//     payload: { op: 'PUT', key: 8, value: [Object] },
//     next: [ 'zdpuAqEA3WYsJMCsGNa1DRDE2bxbdn39Sf4v5W3NwZCDxPZ6w' ],
//     refs: [
//       'zdpuAqPpNCrj1tjKPcU6PQDmDumht7qRTeEhAj5SQtjPGCQTW',
//       'zdpuAvspMgY1MXqKmZSdGAWKYYkZntPh9QfGU2AQREcjC4yZ2',
//       'zdpuAtEZ2t7qqsxhbqH8R8AopW4maSHznFZZvBvVXeR2FhZSU',
//       'zdpuApwvQwVLLC3R63G75HDwqoyVvRo3uksXWHb2nidJLCAnB',
//       'zdpuAqyigJbmsGmuu6J8wdKo6oDmfzYSQDAipYb8y17KX5RXv'
//     ],
//     v: 2,
//     clock: LamportClock {
//       id: '04b7dacabefe927b7b98fc10c8984517e70233409fd3e799b070fec56c9f41b1aa1aa3ec4a1e2112251b3708c502040ca315a84c4551920a1c651f2237b280f074',
//       time: 18
//     },
//     key: '04b7dacabefe927b7b98fc10c8984517e70233409fd3e799b070fec56c9f41b1aa1aa3ec4a1e2112251b3708c502040ca315a84c4551920a1c651f2237b280f074',
//     identity: {
//       id: '03223b09e849e176b483ca6f404ab3e8cfd57251b4867934cb77b9fb87976a7783',
//       publicKey: '04b7dacabefe927b7b98fc10c8984517e70233409fd3e799b070fec56c9f41b1aa1aa3ec4a1e2112251b3708c502040ca315a84c4551920a1c651f2237b280f074',
//       signatures: [Object],
//       type: 'orbitdb'
//     },
//     sig: '304402203fa83dc7291b180cf4adc6436e4d2ba332304dd1acf0acdee23badd770f5b33902202bc8def7b7eccb42eb87d20bec1345f75bf1dd57a23fc497de8f0e9e1e2436d8'
//   },
//   {
//     hash: 'zdpuAoLUFHvxd6kq2D86nhhnDzGTfEYYQ6zaH39fa8J6YhRC2',
//     id: '/orbitdb/zdpuAtSL6WnotZZpKgXA9ePtRkaomJA8PBa6eGMZDZPrFHyrv/student-database',
//     payload: { op: 'PUT', key: 9, value: [Object] },
//     next: [ 'zdpuAtUGomx2UKnH3N89ezqMZmNAAHiYRPqWV7Y6mneTN74JX' ],
//     refs: [
//       'zdpuAqEA3WYsJMCsGNa1DRDE2bxbdn39Sf4v5W3NwZCDxPZ6w',
//       'zdpuAyLFx1AtEerDSpmn6tTfy645Vb8jPTQHDHtt4ceNsnDWt',
//     key: '04b7dacabefe927b7b98fc10c8984517e70233409fd3e799b070fec56c9f41b1aa1aa3ec4a1e2112251b3708c502040ca315a84c4551920a1c651f2237b280f074',
//     identity: {
//       id: '03223b09e849e176b483ca6f404ab3e8cfd57251b4867934cb77b9fb87976a7783',
//       publicKey: '04b7dacabefe927b7b98fc10c8984517e70233409fd3e799b070fec56c9f41b1aa1aa3ec4a1e2112251b3708c502040ca315a84c4551920a1c651f2237b280f074',
//       signatures: [Object],
//       type: 'orbitdb'
//     },
//     sig: '304402207dacd3a8e38615cffaddfc656bad5232655550d0bfbdcfce30e47ded1c6c06f402201015009ccdf7782839853a575d6585ee5e4d6bb7d209380a63ba313f717eba64'
//   }
// ]
