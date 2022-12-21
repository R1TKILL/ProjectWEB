'use strict'

let photo = document.getElementById('imgPhoto');
let file = document.getElementById('imagem');

/*Adicionei o evento em photo do tipo clique que faz o file receber o clique*/
photo.addEventListener('click', () => {file.click();});

file.addEventListener('change', () => {
    
    let reader = new FileReader();

    reader.onload = () => {
        photo.src = reader.result;
    }

    reader.readAsDataURL(file.files[0]);
});