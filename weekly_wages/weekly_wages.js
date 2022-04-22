function weeklyWage(band, weeklyHours) {
 var rateshours = 0;
 var hours = weeklyHours.split(',')
 var Hours= hours[i]
 let bandA= 0;
     let bandB= 0;
     let bandC= 0;
 for(let i=0; i< hours.length ; i++){
     if( hours.length ===7){
         bandA +=(hours[i] *23) && ratehours == bandA;
     }
     else if(hours.length ===7){
        
        bandB +=(hours[i] *37) && ratehours == bandB;
     }
     else if(hours.length ===7){
        bandC +=(hours[i] *37) && ratehours == bandC;
     }
     else {
         rateshours= "missing day "
     }
     return rateshours;
 }
}


 
