const elements = document.getElementsByClassName("num");

function isOperator(op){
    if(op === "+" && op === "-" && op === "x" && op === "/"){
        return true;
    }else{
        return false;
    }
}


for(let i = 0; i < elements.length; i++){
    elements[i].addEventListener("click", (e)=>{
        console.log(e.target.innerHTML);
    })
}