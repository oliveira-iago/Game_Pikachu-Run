const player = document.querySelector('.player');
const cano = document.querySelector('.cano');
const background = document.querySelector('.background');
const canoPosicaoFim = 115;
const playerPosicaoFim = 59;

const pulo = () => {
    player.classList.add('pulo');
    setTimeout(() => {
        player.classList.remove('pulo');
    }, 800)
}

const loop = setInterval(() => {
    const backgroundPosicao = background.offsetLeft;
    const canoPosicao = cano.offsetLeft;
    const playerPosicao = +window.getComputedStyle(player).bottom.replace('px', '');

    if((canoPosicao <= canoPosicaoFim && canoPosicao > 0) && (playerPosicao < playerPosicaoFim)) {
        background.style.left = backgroundPosicao+'px'
        background.style.animation = 'none';

        cano.style.animation = 'none';
        cano.style.left = canoPosicao+'px';

        player.style.animation = 'none';
        player.style.bottom = playerPosicao+'px';
        player.src = './resources/player-morto.gif'

        clearInterval(loop);
    }
}, 10);

document.addEventListener('keydown', pulo)