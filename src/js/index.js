const botaoTraile = document.querySelector('.botao-trailer');
const botaoFecharModal = document.querySelector('.fechar-modal');
const modal = document.querySelector('.modal');
const video = document.getElementById('video');
const linkDoVideo = video.src;

function alternarModal(){
    modal.classList.toggle('aberto');
}

botaoTraile.addEventListener('click', () => {
    alternarModal();
    video.setAttribute('src', linkDoVideo);
});

botaoFecharModal.addEventListener('click', () => {
    alternarModal();
    video.setAttribute('src', "");
});