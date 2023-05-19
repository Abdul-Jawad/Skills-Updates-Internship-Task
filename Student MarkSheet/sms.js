var tscore = document.querySelector('.score');
var average = document.querySelector('.average');
var sinfo = document.querySelectorAll('.info');

var scores=[]; //array to keep the scores

for (i = 0; i<sinfo.length; i++){

    i == 0 ? sinfo[i].innerHTML = localStorage.getItem('info0'):console.log('');
    i == 1 ? sinfo[i].innerHTML = localStorage.getItem('info1'):console.log('');
    i == 2 ? sinfo[i].innerHTML = localStorage.getItem('info2'):console.log('');
    i == 3 ? sinfo[i].innerHTML = localStorage.getItem('info3'):console.log('');

    
 i == 4 ? (                    
    sinfo[i].innerHTML = localStorage.getItem('info4')+'%', scores.push(Number(localStorage.getItem('info4'))) 
 ) : (console.log());

 i == 5 ? (                     
    sinfo[i].innerHTML = localStorage.getItem('info5')+'%', scores.push(Number(localStorage.getItem('info5'))) 
) : (console.log());

i == 6 ? (                     
   sinfo[i].innerHTML = localStorage.getItem('info6')+'%', scores.push(Number(localStorage.getItem('info6'))) 
) : (console.log());

 i == 7 ? (                     
    sinfo[i].innerHTML = localStorage.getItem('info7')+'%', scores.push(Number(localStorage.getItem('info7'))) 
) : (console.log());

    
}
var sum = 0;

for(let i = 0; i<scores.length;i++){
    sum+=scores[i];
}
tscore.innerHTML = sum ; //total score of the student
average.innerHTML = sum/scores.length; //average of the student


