
var username = document.getElementById('username');
 var password = document.getElementById('college');
 var residence = document.getElementById('location');
var id = document.getElementById('studentId');
var pic = document.querySelector('#pic');
var random = Math.floor(Math.random()*80000000);
id.innerHTML=random;

username.innerHTML = localStorage.getItem('name');
password.innerHTML = localStorage.getItem('college');
residence.innerHTML = localStorage.getItem('location');

var picurl =localStorage.getItem('picture');
pic.setAttribute('src', picurl)
console.log(pic);
console.log(localStorage.getItem('name'));
console.log(localStorage.getItem('college'));
console.log(localStorage.getItem('location'));
console.log(localStorage.getItem('picture'));

