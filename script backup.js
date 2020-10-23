let x;

const date = new Date();
date.setDate(date.getDate() + 1);

document.getElementById("dateInput").valueAsDate = date;

document
  .getElementById("dateTimeInput")
  .addEventListener("clocklet.closing", function () {

    Date.prototype.addHours = function(h) {
      this.setTime(this.getTime() + (h*60*60*1000));
      return this;
    }

    combineDateAndTime = function(date, time) {
      // get input from datePicker 
      var inputDate = document.getElementById("dateInput").value;
      console.log(inputDate);
      
      // get input from Clock
      var timeString = document.getElementById("dateTimeInput").value;

      //timeString = time.getHours() + ':' + time.getMinutes() + ':00';
      //timeString = time.getHours() + ':' + time.getMinutes() + ':00';
  
      // var year = inputDate.getFullYear();
      // var month = inputDate.getMonth() + 1; // Jan is 0, dec is 11
      // var day = inputDate.getDate();

      //var dateString = '' + year + '-' + month + '-' + day;
      // var combined = new Date(dateString + ' ' + timeString);
      var combined = inputDate + ' ' + timeString;
  
      return combined;
  };
  
    console.log("combinedTimeDate" + new Date(combineDateAndTime()));
    


    var input = combineDateAndTime();
    console.log(input);

    var feierabend = new Date(input).addHours(8.5);
    console.log("feierabend" + feierabend);

    var now = new Date().getTime();
    console.log(new Date(now));


    if (x) {
      clearInterval(x);
      console.log("test 1");
    }
    
    //---------------------------------------------------------------
    var x = setInterval(function() {
      

      // Get today's date and time
      var now = new Date().getTime();
    
      // Find the distance between now and the count down date
      var distance = feierabend - now;
    
      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
      // Display the result in the element with id="remainderDaily"
      timeString = hours.toString().padStart(2, '0') 
          + ':' + minutes.toString().padStart(2, '0') 
          + ':' + seconds.toString().padStart(2, '0'); 
      document.getElementById("remainderDaily").innerHTML = timeString;
      document.title = timeString;

      // document.getElementById("remainderDaily").innerHTML = "0" + hours.slice(-2)
      // + minutes + "m " + seconds + "s ";
    
      // If the count down is finished, write some text
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("remainderDaily").innerHTML = "Feierabend";
      }
    }, 1000);

    //---------------------------------------------------------------
    
    function distanceTime() {
    var distance = feierabend - now;
      distance = new Date(distance);
      hours = distance.getUTCHours(); 
      minutes = distance.getUTCMinutes(); 
      seconds = distance.getSeconds(); 

    distanceString = hours.toString().padStart(2, '0') 
          + ':' + minutes.toString().padStart(2, '0') 
          + ':' + seconds.toString().padStart(2, '0'); 
    return distanceString;
        }

    document.getElementById("remainderDaily").innerHTML = distanceTime();

    var timeString = ("0" + feierabend.getHours()).slice(-2) + ":" + ("0" + feierabend.getMinutes()).slice(-2);// + ":" + feierabend.getUTCSeconds();
    //var timeString = feierabend.getUTCHours() + 2 + ":" + feierabend.getUTCMinutes();
    document.getElementById("feierabend").innerHTML = timeString;
  });

document
  .getElementById("dateTimeInput2")
  .addEventListener("change", function () {
    var input = document.getElementById("dateTimeInput").value;
    var input2 = this.value;
    var dateEntered = new Date(input2);
    console.log(input2); //e.g. 2015-11-13
    // console.log(dateEntered); //e.g. Fri Nov 13 2015 00:00:00 GMT+0000 (GMT Standard Time)

    //document.getElementById("iP").innerHTML = input2 - input;

    //var timeDiff = Math.abs(new Date(input2) - new Date(input));
    console.log("testoutput" + " / " + input + " / " + input2);
    var timeDiff = Math.abs(new Date(input2) - new Date(input));
    console.log(timeDiff);

    function getTime() {
      timeDiff = new Date(timeDiff);
      hours = timeDiff.getUTCHours(); 
      minutes = timeDiff.getUTCMinutes(); 
      seconds = timeDiff.getSeconds(); 

      console.log(timeDiff.getUTCHours());
      console.log(timeDiff.getUTCMinutes());
      console.log(timeDiff.getSeconds());

      
      timeString = hours.toString().padStart(2, '0') 
          + ':' + minutes.toString().padStart(2, '0') ;
          //+ ':' + seconds.toString().padStart(2, '0'); 
      console.log(timeString);
      return timeString
    };


    document.getElementById("iP").innerHTML = getTime();
    // document.getElementById("iP").innerHTML = getTime();
    // document.getElementById("iP").innerHTML = new date(timeDiff);
  });

/*
  document.getElementById("timepick").addEventListener("change", function () {
  var inputTime = this.value;
  // var dateEntered = new Date(input);
  //console.log(inputTime); //e.g. 2015-11-13
  // console.log(dateEntered); //e.g. Fri Nov 13 2015 00:00:00 GMT+0000 (GMT Standard Time)

  //document.getElementById("iP").innerHTML = this.value;
});

// function diff_minutes(dt2, dt1) {
//   var diff = (dt2.getTime() - dt1.getTime()) / 1000;
//   diff /= 60;
//   return Math.abs(Math.round(diff));
// }

document.getElementById("timepick2").addEventListener("change", function () {
  var inputTime2 = new Time(this.value);
  var inputTime = document.getElementById("timepick").value;
  //diff(inputTime2, inputTime);
  //var diff = diff(inputTime2, inputTime);
  //console.log(diff);
  console.log(inputTime2);
  var timeDiff = Math.abs(new Date(inputTime2) - new Date(inputTime));
  console.log(timeDiff);
  document.getElementById("iP").innerHTML = timeDiff;
});
*/