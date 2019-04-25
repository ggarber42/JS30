/*Get Elements*/
const player = document.querySelector('.player');
const video  = document.querySelector('.viewer');
const progress  = document.querySelector('.progress');
const progressBar  = document.querySelector('.progress__filled');
const toggle  = document.querySelector('.toggle');
const skipButtons  = document.querySelectorAll('[data-skip]');
const ranges  = document.querySelectorAll('.player__slider');
const fullScreenButton = document.querySelector('#full-screen');

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
}
function skip(){
    video.currentTime += parseFloat(this.dataset.skip);
}
function handleRangeUpdate(){
video[this.name] = this.value;
}
function handleProgress(){
    const percent = (video.currentTime/video.duration)*100;
    progressBar.style.flexBasis = `${percent}%`; 
}
function scrub(e){
    console.log(e)
    const scrubTime = (e.offsetX/progress.offsetWidth)*video.duration;
    video.currentTime = scrubTime;
}
function pauseWithSpaceBar(e){
    console.log(e.keyCode);
    if(e.keyCode === 32){
        togglePlay();
    }
}
function setFullScreen(){
    video.requestFullscreen();
}
/*Event Listener*/
document.addEventListener('keyup',pauseWithSpaceBar);

video.addEventListener('click',togglePlay);
video.addEventListener('play',updateButton);
video.addEventListener('pause',updateButton);
video.addEventListener('timeupdate',handleProgress);

toggle.addEventListener('click',togglePlay);

skipButtons.forEach(button => button.addEventListener('click', skip));

ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

progress.addEventListener('click',scrub);
progress.addEventListener('mousemove',(e) => mousedown && scrub(e));
let mousedown = false;
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);

fullScreenButton.addEventListener('click', setFullScreen);