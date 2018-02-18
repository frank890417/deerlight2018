const functions = require('firebase-functions');
const admin = require("firebase-admin")
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
  const name = req.query.name;
  const title = req.query.title;
  const content = req.query.content;
  const subscribe = req.query.subscribe;
  const mail = req.query.mail;
  let data = {
    name, title, content, subscribe, mail
  }
  // response.send(data);
  
  if (req.method=="post"){
    cors(req, res, () => {
      return admin.database().ref('/contact_record').push(data).then((snapshot) => {
        return res.redirect(303, snapshot.ref)
      })
    });


    
    
  }else{
    res.send("method not allowed");
  }
})


