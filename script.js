const btnMobile = document.getElementById('btn__mobile');

function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault();
    const nav = document.getElementById('cabecalho__nav');
    nav.classList.toggle('active');

    const active = nav.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded', active);

    if(active) {
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu')
    } else {
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu')
    }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

function inscreveu (){
    var name = document.getElementById('inputName').value
    var email = document.getElementById('inputEmail').value

if(name && email != ''){
    window.alert(`Obrigado por se inscrever ${name}!`);
} else {
    window.alert('[ERRO] Preencha corretamente o formulário amigão!')
}
}
