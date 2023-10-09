const super_table = document.getElementById('super');


for(i = 1;i<=9;i++){
    document.getElementById('td'+i).style.background = 'green'
    document.getElementById(+i).style.background = 'white'
}

document.getElementsByClassName("subCell").forEach(element => {
    element.addEventListener("click",()=>{
        
    })
});