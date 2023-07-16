const btn = document.querySelector('button')
let audioFile = document.querySelector('audio')
btn.addEventListener('click',playClip)

function playClip(){
    audioFile.play()
}