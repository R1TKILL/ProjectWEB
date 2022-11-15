
    const senha = document.querySelector('.password');
    const btn = document.querySelector('.btn');

    btn.onclick = () => 
    {
        if(senha.type === 'password'){
            senha.type = 'text';
            btn.src = 'pictures/olhoAberto.png'
        }
        else{
          senha.type = 'password'
          btn.src = 'pictures/olhoFechado.png'  
        }
    }
