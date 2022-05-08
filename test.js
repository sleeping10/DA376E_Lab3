

let data= 'O Hi this a test Car River Deer Car Bear and';
let backspace= ' ';
const MAX_LENGTH_WORD = 10;
var result = new Array(MAX_LENGTH_WORD);
result.fill(0);



let tempString='';

    
    for (let i = 0; i < data.length+1; i++) {
        
        if(data[i]=== backspace|| i===data.length){
           result[tempString.length-1]+=1
            tempString=''; 
    }
    else{
        tempString+=data[i];
    }
    
}
console.log(result);