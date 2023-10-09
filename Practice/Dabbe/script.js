var ans = Math.floor((Math.random() *9));
var attempts = 3;
var found = false;

reset();

function clk(num){
    if(found == true)return;
    if(attempts == 0)return;
    const a = document.getElementById(num+"");
    if(num == ans){
        a.style.backgroundColor = "green";
        found = true;
        document.getElementById("win").style.display = "flex";
        return;
    }
    else{
        a.style.backgroundColor = "red";
    }
    attempts--;
    document.getElementById("att").innerHTML = "attempts = " + attempts;
    if(attempts == 0){
        document.getElementById("lose").style.display = "flex";
    }
}

function reset(){
    document.getElementById("win").style.display = "none";
    document.getElementById("lose").style.display = "none";
    ans = Math.floor((Math.random() *9));
    attempts = 3;
    document.getElementById("att").innerHTML = "attempts = " + attempts;
    found = false;
    for(i = 0;i<9;i++){
        document.getElementById(""+i).style.backgroundColor = "white";
    }
}