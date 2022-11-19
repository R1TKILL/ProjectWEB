/*Funções do Carrossel*/

/*Declaração de variaveis*/
var balls = document.querySelector('.balls');
var quant = document.querySelectorAll('.slides .imagens');
var atual = 0;
var imagems = document.getElementById('atual');
var next = document.getElementById('avancar');
var previous = document.getElementById('voltar');
var rolar = true;

/*script que cria bolinhas de acordo com imagens inseridas*/
for(let i = 0; i < quant.length; i++){
    var div = document.createElement('div');
    div.id = i;
    balls.appendChild(div);
}
document.getElementById('0').classList.add('imgatual');

/*Fazendo o click dos circulos do carrossel passar a página*/
var pos = document.querySelectorAll('.balls div');

for(let i = 0; i < pos.length; i++){
    pos[i].addEventListener('click', () => {
        atual = pos[i].id;
        rolar = false;
        slide();
    });
}

previous.addEventListener('click', () => {
    atual--;
    rolar = false;
    slide();
});

next.addEventListener('click', () => {
    atual++;
    rolar = false;
    slide();
});

/*Fazendo com que o slide não va uma posição que não existe e não
caia para uma posição menor que do numero zero.*/

function slide(){

    if(atual >= quant.length){
        atual = 0;
    }
    else if(atual < 0){
        atual = quant.length-1;
    }
    document.querySelector('.imgatual').classList.remove('imgatual');
    imagems.style.marginLeft = -1024*atual+'px';
    document.getElementById(atual).classList.add('imgatual');
}
setInterval(() => {
    if(rolar){
        atual++;
        slide();
    }
    else{
       rolar = true; 
    }
}, 4000);
/*Fim das funções do Carrossel*/
