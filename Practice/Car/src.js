var dist = 0;
var dist2 = 50;
function moveH(){
    // debugger;
    inter = setInterval(()=>mvHoriz(),0.1);
}

function mvHoriz(){
    // debugger;
    document.getElementById("car").style.right = dist+"px";
    dist+=1;
    // console.log(dist);
    if(dist > 600){
        // debugger;
        clearInterval(inter);
        moveV();
    }
}

function moveV(){
    inter2 = setInterval(()=>mvVerti(),0.5);
}

function mvVerti(){
    // debugger;
    document.getElementById("car").style.top = dist2+"px";
    document.getElementById("car").style.right = dist+"px";
    
    dist2+=1;
    dist+=0.5;
    // console.log(dist);
    if(dist2 > 500){
        // debugger;
        clearInterval(inter2);
    }
    // console.log(dist);
}


moveH();