var form = document.querySelector('form')
var btn = document.querySelector('.btn');




btn.addEventListener('click', ()=>{
    for(let i = 0; i< form.length-1; i++){
        localStorage.setItem(`info${i}`,form[i].value)    
    }
    form[i].value == '' ? alert('Make sure you fill all'):console.log('');
    
})
