let displayValue = document.querySelector('.item1')
function appendToDisplay(value){
    displayValue.value+=value;
}
function del(){
    displayValue.value= displayValue.value.slice(0,-1)
}
function clr(){
    document.querySelector('.item1').value="";
}
function calculate(){
    let result= eval(displayValue.value)
    if(result=== Infinity || isNaN(result)){
        displayValue.value='Error';
    }
    else{
        displayValue.value=result;
    }
}