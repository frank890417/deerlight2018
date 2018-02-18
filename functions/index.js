// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');

// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase)

const cors = require('cors')({ origin: true });

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

// exports.addMessage = functions.https.onRequest((req,res)=>{
//   const original = req.query.text;
//   return admin.database().ref('/message').push({original}).then((snapshot)=>{
//     return res.redirect(303,snapshot.ref)
//   })
// })


exports.sendContactForm = functions.https.onRequest((req, res) => {
  const name = req.query.data.name || "";
  const title = req.query.data.title || "";
  const content = req.query.data.content || "";
  const subscribe = req.query.data.subscribe || false;
  const mail = req.query.data.mail || "";
  let data = {
    name, title, content, subscribe, mail
  }
  // response.send(data);
  
  // if (req.method == "post" || req.method == "options"){
    
  cors(req, res, () => {
    return admin.database().ref('/contact_record').push(data).then((snapshot) => {
      return res.redirect(303, snapshot.ref)
    })
  });

  // }else{
  //   res.send("method not allowed");
  // }
})


