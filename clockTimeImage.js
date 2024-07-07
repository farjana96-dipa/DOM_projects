var clk = document.getElementById("clock");
var set = document.getElementById("setTime");
var event1 = document.getElementById("timeEvent");
var img = document.getElementById("lolcatImage");

function time(){
    var curTime = new Date();
    var H = curTime.getHours();
    var M = curTime.getMinutes();
    var S = curTime.getSeconds();
    var meridian = "AM";

    if(H >= 12){
        meridian = "PM";
    }
    if(H>12){
        H = H - 12;
    }
    if(M < 10){
        M = "0"+M;
    }
    if(S < 10){
        S = "0"+S;
    }
    
    var nTime = H + ":" + M + ":" + S + " " + meridian;
    clk.innerText = nTime;
}

function update(){

    var eventChange = function(){
        var tt = set.value;
        console.log(tt);
    }
    
    event1.addEventListener("change",eventChange);
    
    var upTime = new Date().getHours();

    var image= "https://images.pexels.com/photos/381739/pexels-photo-381739.jpeg?auto=compress&cs=tinysrgb&w=600";
    var msg = "";

    if(upTime==6){
      image= "https://images.pexels.com/photos/36478/amazing-beautiful-beauty-blue.jpg?auto=compress&cs=tinysrgb&w=600";
      msg = "This is picture is from 6 o'clock"; 
    }
    else if(upTime==7){
        image="https://images.pexels.com/photos/36744/agriculture-arable-clouds-countryside.jpg?auto=compress&cs=tinysrgb&w=600";
        msg = " This picture is from 7 o'clock";
    }

    img.src = image;
    event1.innerText = msg;

    time();

}

update();

setInterval(function(){
   update();
},1000);


