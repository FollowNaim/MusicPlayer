const progress = document.getElementById("progress");
const ctrlIcon = document.querySelector("#ctrlIcon");
const song = document.querySelector("#song");
song.onloadmetadata = function(){
 progress.value = song.currentTime;
 progress.max = song.duration;
}
function playpause(){
 if(ctrlIcon.classList.contains("fa-play")){
  song.play();
  ctrlIcon.classList.remove("fa-play");
  ctrlIcon.classList.add("fa-pause");
 }else{
  song.pause();
  ctrlIcon.classList.remove("fa-pause");
  ctrlIcon.classList.add("fa-play");
 }
}

if(song.play){
 setInterval(()=>{
  progress.max = song.duration;
  progress.value = song.currentTime;
 },1000)
}

progress.onchange = function(){
 song.play();
 song.currentTime = progress.value;
 ctrlIcon.classList.remove("fa-play");
 ctrlIcon.classList.add("fa-pause");
}
song.addEventListener("ended",()=>{
 song.pause();
 ctrlIcon.classList.remove("fa-pause");
 ctrlIcon.classList.add("fa-play");
})