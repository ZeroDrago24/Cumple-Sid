const audio = document.querySelector('audio');
const card = document.getElementById('card');

audio.addEventListener('play', () => {
    document.body.classList.add('play-music');
    card.classList.add('open');
});

audio.addEventListener('pause', () => {
    document.body.classList.remove('play-music');
    card.classList.remove('open');
});