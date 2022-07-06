
import * as apiFunctions from './apiFunctions'

let searchBTN = document.querySelector("#searchBTN");
let otherDays = document.querySelector(".other-days")
let today = document.querySelector(".today");
let unit = document.querySelector("#unit");
let daysOrHours = document.querySelector("#d-h")
unit.addEventListener("click",()=>{
    today.innerHTML=" ";
    otherDays.innerHTML=" ";
    if(unit.innerHTML === "C"){
        unit.innerHTML ="F"
        
        apiFunctions.getData()
        apiFunctions.getAPIandDisplayIt();
    }else if (unit.innerHTML === "F"){
        unit.innerHTML ="C"
        apiFunctions.getData()
        apiFunctions.getAPIandDisplayIt();
    }

})
searchBTN.addEventListener("click",()=>{
    today.innerHTML=" ";
    otherDays.innerHTML=" ";
    apiFunctions.getData()
    apiFunctions.getAPIandDisplayIt();

})
daysOrHours.addEventListener("click",()=>{
    if(daysOrHours.innerHTML === "DAYS"){
        today.innerHTML=" ";
        otherDays.innerHTML=" ";
        apiFunctions.getData()
        apiFunctions.getAPIandDisplayIt();
        daysOrHours.innerHTML= "HOURS"
    }else  if(daysOrHours.innerHTML === "HOURS"){
        today.innerHTML=" ";
        otherDays.innerHTML=" ";
        apiFunctions.getData()
        apiFunctions.getAPIandDisplayIt();
        daysOrHours.innerHTML= "DAYS"
    }
})