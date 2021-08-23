const elements = document.getElementsByClassName("num");
const result = document.getElementById("result");
const reset = document.getElementById("reset-btn");

function isOperator(op){
    if(op === "+" || op === "-" || op === "x" || op === "/"){
        return true;
    }else{
        return false;
    }
}

let arr=[];

for(let i = 0; i < elements.length; i++){
    elements[i].addEventListener("click", (e)=>{
        const text = e.target.innerHTML;
        if(!isOperator(text) && text !== "="){
            if(arr.length === 0 || isOperator(arr[arr.length-1])){
                arr.push(text);
            }
            else{
                arr[arr.length-1] += text;
            }
        }
        else if(text !== "="){
            if(!isOperator(arr[arr.length-1])){
                arr.push(text);
            }
        }else{
            if(arr.length > 2){
                let exp = parseFloat(arr[0]);
                let count = 1;
                while(count < arr.length){
                    if(arr[count] === "+"){
                        exp = exp + parseFloat(arr[count+1]);
                    }
                    else if(arr[count] === "-"){
                        exp = exp - parseFloat(arr[count+1]);
                    }
                    else if(arr[count] === "x"){
                        exp = exp * parseFloat(arr[count+1]);
                    }
                    else if(arr[count] === "/"){
                        exp = exp / parseFloat(arr[count+1]);
                    }
                    count += 2;
                    
                }
                arr = [exp];
            }
        }
        result.innerHTML = arr.join(" ")
    })
}
reset.addEventListener("click",()=>{
    arr=[];
    result.innerHTML = arr;
})