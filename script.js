const startingTime =  0.5;
let time = startingTime * 60;

const countdownEl = document.getElementById('countdown');

setInterval(updateCountdown, 1000);
function updateCountdown() {
    const minutes = Math.floor(time/60)
    let seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;

    countdownEl.innerHTML = `${minutes} : ${seconds}`

    time--;

    if (time < 0) {
        clearInterval(updateCountdown);
        countdownEl.innerHTML = '00:00';
    }

    const body = document.body;
    const countdown = document.getElementById('countdown');

    if ((time < (startingTime * 60) / 2) && (time >= (startingTime * 60) / 6)) {
        body.style.backgroundColor = '#E4E5C7';
        countdown.style.backgroundColor = '#ccbf3a'
        countdown.style.boxShadow = 'inset 0px -5px 0px #d1ca65'
    } else if (time <= (startingTime * 60) / 6) {
        body.style.backgroundColor = '#DBADAD';
        countdown.style.backgroundColor = '#cc4038'
        countdown.style.boxShadow = 'inset 0px -5px 0px #d16863'
    }
}

const musicMute = document.querySelector('.mute')
const musicOn = document.querySelector('.music-icon')
const img = document.querySelector('#muted-img')
const audio = document.querySelector('.audio')

musicOn.addEventListener('click', () => {
    musicOn.classList.toggle('mute')
    audio.classList.toggle('mute')
    if(musicOn.classList.contains('mute') && audio.classList.contains('mute')) {
        musicOn.src = './images/volume mute_.svg'
        audio.pause()
    } else {
        musicOn.src = './images/music.svg'
        audio.play()
    }

    
})




