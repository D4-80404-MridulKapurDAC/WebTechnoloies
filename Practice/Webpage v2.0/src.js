 const ad1 = document.getElementById('ad1');
 const ad2 = document.getElementById('ad2');

var ads1 = ["dragonBall.png" , "logo.png" , "naruto.png" , "logobleach.png"]
var ads2 = ["dragonBall.png" , "logo.png" , "naruto.png" , "logobleach.png"]
var c1 = 0;
var c2 = 0;

setInterval(() =>{
    ad1.src = "./assets/" +ads1[c1];
    c1++;
    c1%=3;
},5000);

setInterval(() =>{
    ad2.src = "./assets/" +ads2[c1];
    c2++;
    c2%=3;
},5000);