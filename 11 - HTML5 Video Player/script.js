/*Get Elements*/
const player = document.querySelector('.player');
const video  = document.querySelector('.viewer');
const progress  = document.querySelector('.progress');
const progressBar  = document.querySelector('.progress__filled');
const toggle  = document.querySelector('.toggle');
const skipButtons  = document.querySelector('[data-skip]');
const ranges  = document.querySelector('.player__slider');

/*Functions*/
function togglePlay(){
    if(video.paused){
        video.play()
    } else {
        video.pause();
    }
}
function updateButton(){
    const icon = this.paused? '►' : '❚ ❚';
    toggle.textContent = icon;
    console.log('aqui');
}

/*Event Listener*/
video.addEventListener('click',togglePlay);
video.addEventListener('play',updateButton);
video.addEventListener('pause',updateButton);

toggle.addEventListener('click',togglePlay);