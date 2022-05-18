let summary = document.querySelector(".summary");
let result = document.querySelector(".result")
let del = document.querySelector(".del")
let conDiv = document.querySelector(".button-container");

let firstOperand;
let secondOperand;
let operator

conDiv.addEventListener("click" , function (e){
    
    if(e.target.matches("button")){
        
        let display = result.textContent;
        let key =  e.target.value;
        let action = e.target.dataset.action
        
        del.textContent = "C"
        if(action == undefined){
           if(display =="0"){
               display = key;
             result.textContent = display
               
           }
           else{
               display = display + key
               result.textContent = display;
    
           }
        }
        else{
            
            if(action =="add"){
                 operator = "+";
                firstOperand = display;
                summary.textContent = firstOperand + operator;
                 result.textContent = ""
                
            }
            if(action =="subtract"){
                operator = "-";
                firstOperand = display;
                summary.textContent = firstOperand + operator;
                 result.textContent = ""
                
            }
            if(action =="multiply"){
                operator = "*";
                firstOperand = display;
                summary.textContent = firstOperand + operator;
                 result.textContent = ""
                
            }
            if(action =="decimal"){
                operator = ".";
                firstOperand = display;
                summary.textContent = firstOperand + operator;
                 result.textContent = ""
                
            }
            if(action =="negative-sign"){
                operator = "+/-";
                firstOperand = display;
                summary.textContent = firstOperand + operator;
                 result.textContent = ""
                
            }
            if(action =="percent"){
                operator = "%";
                firstOperand = display;
                summary.textContent = firstOperand ;
                 result.textContent = ""
                
            }
            if(action =="divide"){
                operator = "/";
                firstOperand = display;
                summary.textContent = firstOperand + operator;
                 result.textContent = ""
                
            }
            if(action =="percentage"){
                operator = "%";
                firstOperand = display;
                summary.textContent = firstOperand + operator;
                 result.textContent = ""
                
            }
            if(action =="clear"){
            
                summary.textContent = ""
                result.textContent ="0"
            }
           
            // secondOperand = result.textContent
            // summary.textContent = firstOperand + operator + secondOperand
            if(action =="calculator"){
                
            secondOperand = result.textContent
                summary.textContent = firstOperand + operator + secondOperand
    
                
                if(operator =="+"){
                    result.textContent = Number(firstOperand) + Number(secondOperand)
                    
                }
                if(operator =="-"){
                    result.textContent = Number(firstOperand)  - Number(secondOperand)
                }
                if(operator =="*"){
                    result.textContent = Number(firstOperand) * Number(secondOperand)
                }
                if(operator =="/"){
                    result.textContent = Number(firstOperand) /  Number(secondOperand)
                }
                if(operator =="%"){
                    result.textContent = Number(firstOperand) / 100
                }
            }

                
            
        }
       

    }
    else{
        alert("please click a button")
    }
})