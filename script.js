var config = {
    apiKey: "AIzaSyDPAI6qv88QJlmCXXVunlYC96NksmEi8Cc",
    authDomain: "train-tracker-d91bf.firebaseapp.com",
    databaseURL: "https://train-tracker-d91bf.firebaseio.com",
    storageBucket: "train-tracker-d91bf.appspot.com",
    messagingSenderId: "427190397840"
};

firebase.initializeApp(config);

var database = firebase.database();

$("#add-train").on("click", function(event) {
  event.preventDefault();


  name = $("#name-input").val().trim();
  dest = $("#dest-input").val().trim();
  time = $("#time-input").val().trim();
  frequency = $("#frequency-input").val().trim();
  
  database.ref().push({
  	name: name,
  	dest: dest,
  	time: time,
  	frequency: frequency
  });

  // Logs everything to console


  alert("Train added");

  $(".form-control").val("");
});

database.ref().on("child_added", function(childSnapshot) {


  var trainName = childSnapshot.val().name;
  var trainDest = childSnapshot.val().dest;
  var trainTime = childSnapshot.val().time;
  var trainFrequency = childSnapshot.val().frequency;

// get the time in minutes, add the frequency, that's trainArrival
    // look at moment.js doc for parse string. Format given should be acceptable
    //Do I need to include date when putting into moment()?
// trainAmay will be the difference between timeNow and trainArrival
  

   $(".table > tbody").append(
   	"<tr><td>" + trainName + 
   	"</td><td>" + trainDest + 
   	"</td><td>" + trainFrequency +
   	 // "</td><td>" + trainArrival + 
   	 // "</td><td>" + trainAway + 
   	 "</td></tr>");
});

