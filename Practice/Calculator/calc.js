// document.getElementById(")
function add(){
    const a = parseInt(document.getElementById("first").value);
    const b = parseInt(document.getElementById("second").value);
    document.getElementById("result").value = a + b;
}

function sub(){
    const a = parseInt(document.getElementById("first").value);
    const b = parseInt(document.getElementById("second").value);
    document.getElementById("result").value = a - b;
}

function mul(){
    const a = parseInt(document.getElementById("first").value);
    const b = parseInt(document.getElementById("second").value);
    document.getElementById("result").value = a * b;
}

function div(){
    const a = parseInt(document.getElementById("first").value);
    const b = parseInt(document.getElementById("second").value);
    document.getElementById("result").value = a / b;
}