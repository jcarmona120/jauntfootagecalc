$(document).ready(function(){

var time = 0;

  $("#submitMin").click(function(e){
    e.preventDefault();
      $("#result").empty();

      var time = document.getElementById("Time").value;
      var elMsg = document.getElementById("feedback");

      //Input by user

      
        if ($(time).val() === false) {
         console.log("Enter a time please");
        }
      
    

      //recording size per Minute in GB on Jaunt
      var perMinute = 10.8;

      //uploading at 50MBPS
      var mbpsFifty = 28.8;
      var uploadGBPS = 1.4;

      $("#result").append("<p>You will be recording for " + time + " minutes.");
      //measure size of full recording
      let recordingSize = Math.ceil(time * perMinute);
      // document.write("<h1>You have recorded " + recordingSize + " GB of footage!</h1>");
      $("#result").append("<p>That is equal to  " + recordingSize + " GB of footage.</p>");


      //transferUSB3 speed
      let transferUSB3 = 3.2;

      // //time to transfer footage
      var transferFootage = Math.ceil(recordingSize/transferUSB3);
      $("#result").append("<p>It will take " + transferFootage + " minutes to transfer via USB3.</p>");


      //
      var uploadFootage = Math.ceil(time * mbpsFifty);
      $("#result").append("<p>It will take " + uploadFootage + " minutes to upload to the Jaunt server.</p>");
      $( "input#time" ).val("")

      
  });



});




// let recordingJaunt = function(time, perMinute) {
//
//   //Input by user
//   var time = document.getElementById("Time").value;
//
//   //recording size per Minute in GB on Jaunt
//   var perMinute = 10.8
//
//   //uploading at 50MBPS
//   var mbpsFifty = 28.8
//
//   //measure size of full recording
//   let recordingSize = Math.floor(time * perMinute);
//   document.write("<h1>You have recorded " + recordingSize + " GB of footage!</h1>");
//
//   //transferUSB3 speed
//   let transferUSB3 = 3.2;
//
//   // //time to transfer footage
//   var transferFootage = Math.floor(recordingSize/transferUSB3);
//   document.write("<h1>It will take " + transferFootage + " minutes to transfer via USB3</h1>");
//   console.log(transferFootage);
//   //
//   var uploadFootage = ((Math.floor(time * mbpsFifty) / 60));
//   document.write("<h1>It will take " + uploadFootage + " hours to upload to the Jaunt server</h1>");
//   // form.reset();
//
//
// };
