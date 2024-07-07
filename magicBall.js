
var a = ["Yes", "Too Much","Ofcourse", "In Your Dreams", "Absolutely"];

var ans = document.getElementById("answer");
var Eball = document.getElementById("8ball");
var qsButton = document.getElementById("questionButton");

ans.style.display = "none";

function askQuestion(qs){
 
   Eball.src = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballAnswer.png";

  

   var p = Math.floor(Math.random() * a.length);
   var q = a[p];
   ans.textContent = q;
   ans.style.display = "block";
   console.log(ans);

};

 function showAns(){
  ans.style.display = "none";
  Eball.src = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png";

  setTimeout(function(){
    var qs = prompt("Ask me a Yes/Positive Question");
    askQuestion(qs);
  },400);
}

qsButton.addEventListener("click", function(){
    showAns();
})