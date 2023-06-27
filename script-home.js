//Declaring Varirables

const progress = document.getElementById("progress");
const ctrlIcon = document.querySelector("#ctrlIcon");
const song = document.querySelector("#song");
const nextBtn = document.querySelector("#nextBtn");
const backBtn = document.querySelector("#backBtn");
const time = document.querySelector("#time");
const totalSongTime = document.querySelector("#totalTime");
const name = document.querySelector("#name");
const singer = document.querySelector("#singer");

//Song Medata Loaded

song.addEventListener("loadedmetadata",()=> {totalSongTime.textContent = formatTime(song.duration);});


//Creating Playlist

const playList = [
 '/media/01.mp3',
 '/media/02.mp3',
 '/media/03.mp3',
 '/media/04.mp3',
 '/media/05.mp3',
 '/media/06.mp3'
 ]
 
 
 //Adding Name And Singer Discriptions Like Object And access it Dynamatically
 
 const songDetails = [
  {
   name: "আমার প্রাণ ধরিয়া মারো টান",
   singer: "Feat By Emon ChowDhury"
  },
  {
   name: "Bhalobese Bhul Korini",
   singer: "Feat By Ishan"
  },
  {
   name: "Tujhe Kitna Chahne Lage",
   singer: "Feat By Arijit Singh"
  },
  {
   name: "Joto Vul",
   singer: "Feat By Tahsan Khan"
  },
  {
   name: "Ektukhani",
   singer: "Feat By Minar Rahman"
  },
  {
   name: "Punorjonmo | পুনর্জন্ম",
   singer: "Feat By Condopith"
  }
  ]
 
 //Adding Onlick method for play pause Button
 
function playpause(){
 if(ctrlIcon.classList.contains("fa-play")){
  songPlay();
 }else{
  songPause();
 }
}

//Creating Function For ReUse


function songPlay(){
 song.play();
 ctrlIcon.classList.remove("fa-play");
 ctrlIcon.classList.add("fa-pause");
}
function songPause(){
 song.pause();
 ctrlIcon.classList.remove("fa-pause");
 ctrlIcon.classList.add("fa-play");
}

//Making Progress bar response

if(song.play){
 setInterval(()=>{
  progress.max = song.duration;
  progress.value = song.currentTime;
 },1000)
}

progress.onchange = function(){
 song.currentTime = progress.value;
 songPlay();
}

//When song ended

song.addEventListener("ended",()=>{
 currentIndex++;
 song.src = playList[currentIndex];
 songPlay();
 nameFromObject();
})

//When Next Button is Clicked Song Will be Chnaged


let currentIndex = 0;

nextBtn.addEventListener("click",()=>{
 console.log(currentIndex)
 if (currentIndex === playList.length -1) {
  currentIndex = 0;
 }else{
  currentIndex++;
 }
 
 song.src = playList[currentIndex];
 songPlay();
 nameFromObject();
 
})

//When Back button is clicked Song will be changed into previous one


backBtn.addEventListener("click",()=>{
 console.log(currentIndex)
 if (currentIndex === 0) {
  currentIndex = playList.length -1;
  nameFromObject();
  
 } else {
  currentIndex --;
 }song.src = playList[currentIndex];
 songPlay();
 nameFromObject()
})


//Formatting Total Seconds from song

function formatTime(TimeInSeconds){
 const minutes = Math.floor(TimeInSeconds / 60);
 const seconds = Math.floor(TimeInSeconds % 60);
 const formattedTime = `${minutes.toString().padStart(2,'0')}:${seconds.toString().padStart(2,'0')}`;
 return formattedTime;
}

//Updating Live timer for song

song.addEventListener("timeupdate",()=>{
 const currentTime = Math.floor(song.currentTime);
 const formateTime = formatTime(currentTime);
 time.textContent = formateTime;
})

//Adding Total Time for a Song

totalSongTime.textContent = formatTime(song.duration);

//Update total time when every song is changed

song.addEventListener("loadedmetadata",()=> {totalSongTime.textContent =
formatTime(song.duration);
});

//Adding Default Object Details


name.innerHTML = songDetails[currentIndex].name;
singer.innerHTML = songDetails[currentIndex].singer;


//Making Dynamic Object as a function for ReUse

function nameFromObject(){
 name.innerHTML = songDetails[currentIndex].name;
 singer.innerHTML = songDetails[currentIndex].singer;
}