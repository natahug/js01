//In the space below each problem, write the code to answer. This page connects to index.html

/* 1.--------
 Write the JavaScript to display the current day and time in the following format and output it to the html page to the span with an id of "question-1"
*/
console.log('main.js loaded');
var d = new Date();
console.log(d);

/*#1*/
/*day function from https://www.w3schools.com/jsref/jsref_getday.asp*/
function dayWeek() {
   
    var weekday = new Array(7);
    weekday[0] = "Sunday.";
    weekday[1] = "Monday.";
    weekday[2] = "Tuesday.";
    weekday[3] = "Wednesday.";
    weekday[4] = "Thursday.";
    weekday[5] = "Friday.";
    weekday[6] = "Saturday.";
  
    var n = weekday[d.getDay()];
  document.getElementById("answer1").innerHTML = "Today is " + n;
  
}
dayWeek();

function time() {
  var t = "Current Time: " + d.toLocaleTimeString();
  console.log(t);
  var node = document.createElement("p");
  node.appendChild(document.createTextNode(t));
  document.getElementById("answer1").appendChild(node); 
}
time();

/*#2*/
/* used https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-3.php for reference */

function dates() {
  var m = d.getMonth()+1;
  if(m<10) 
{
    m='0'+m;
}
  var date = d.getDate();
  if(date<10) 
{
    date='0'+date;
}
  var fy = d.getFullYear();
document.getElementById("answer2").innerHTML = m+"-"+date+"-"+fy;
var node = document.createElement("p");
node.appendChild(document.createTextNode(m+"/"+date+"/"+fy));
document.getElementById("answer2").appendChild(node); 

var node2 = document.createElement("p");
node2.appendChild(document.createTextNode(date+"/"+m+"/"+fy));
document.getElementById("answer2").appendChild(node2); 
}
dates();

/* attempt at #3*/
/* used https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp for reference */
function myFunction(){
  var x = document.getElementById("mainCanvas");
  if (x.style.display === "none") {
    x.style.display = "block";
    document.getElementById("benny").innerHTML = "Click to make #4 disappear";
  } else {
    x.style.display = "none";
    document.getElementById("benny").innerHTML = "Click to reveal #4";
  }
}


/*#4*/
paper.install(window);
paper.setup(document.getElementById('mainCanvas'));
// TODO

var c = Shape.Circle(200, 200, 80);
c.fillColor = 'pink';

var c;
for(var x=25; x<400; x+=50) {
for(var y=25; y<400; y+=50) {
c = Shape.Circle(x, y, 10);
c.fillColor = 'red';
}
}
var tool2 = new Tool();
tool2.onMouseDown = function(event) {
var c = Shape.Circle(event.point.x, event.point.y, 20);
c.fillColor = 'orange';
};


paper.view.draw();