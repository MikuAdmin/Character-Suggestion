require("typescript-require");

const CharacterSuggestion = require("./index");
const Firebase = require("firebase-admin");

const App = Firebase.initializeApp({
    credential: Firebase.credential.applicationDefault(),
    databaseURL: "https://sololearn-example.firebaseio.com/"
});

module.exports = App;