const express = require("express");
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();
const app = express();
const port = 5000;

app.post('/api/lists', jsonParser, (req, res) => {
   console.log(JSON.stringify(req.body));
   res.send("received with thanks");
});

app.listen(port, () => console.log("Listening on port 5000..."));
// (function() {
//    'use strict';
 
//    //check for support
//    if (!('indexedDB' in window)) {
//      console.log('This browser doesn\'t support IndexedDB');
//      return;
//    }
 
//    var dbPromise = idb.open('test-db2', 1, function(upgradeDb) {
//      console.log('making a new object store');
//      if (!upgradeDb.objectStoreNames.contains('lists')) {
//        upgradeDb.createObjectStore('lists', {keyPath: 'listName'});
//      }
//    });
 
//    dbPromise.then(function(db) {
//       var tx = db.transaction('lists', 'readwrite');
//       var lists = tx.objectStore('lists');
//       var item = {
//         name: 'sandwich',
//         price: 4.99,
//         description: 'A very tasty sandwich',
//         created: new Date().getTime()
//       };
//       lists.add(item);
//       return tx.complete;
//     }).then(function() {
//       console.log('added item to the lists os!');
//     });

//  })();