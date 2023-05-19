
let btn = document.querySelector('button');
let img = document.getElementById('profile');
let addpic = document.getElementById('addpic');


  addpic.addEventListener('change', function(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
  
    const url = URL.createObjectURL(file);

    reader.addEventListener('load', function(event) {
      const dataURL = event.target.result;
      img.setAttribute('src', dataURL);
    });

    reader.readAsDataURL(file);
    
  });


btn.addEventListener('click' , ()=>{
  var name = document.querySelector('#Name').value;
  var college = document.querySelector('#College').value;
  var location = document.querySelector('#Location').value;
  var picture = document.querySelector('img');
  var src =img.getAttribute('src');
  
  localStorage.setItem('picture',src)
  localStorage.setItem('name', name);
  localStorage.setItem('college', college);
  localStorage.setItem('location', location);
  localStorage.setItem('pictureurl',dataURL);
})
