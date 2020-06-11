import firebase from './firebase.js'; // <--- add this line

const database = firebase.database();
var dataRef = database.ref('/data');
let data = [];

dataRef.once('value').then(function(snapshot){
    let dataSnap = snapshot.val();
    dataSnap.forEach(pd => {
        data.push(pd)
    });
});

export default data;