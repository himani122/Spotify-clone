console.log("Welcome to Spotify ") ;
//initialise the variable 
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let SongItem = Array.from(document.getElementsByClassName('SongItem'));


let songs = [
     {songName: "Pal Pal ", filepath:"songs/1.mp3", coverpath: "covers/1.jpg"} , 
    {songName: "Finding Her", filepath:"songs/2.mp3", coverpath: "covers/2.jpg"} , 
     {songName: "Paro", filepath:"songs/3.mp3", coverpath: "covers/3.jpg"} , 
      {songName: "Gallan 4", filepath:"songs/4.mp3", coverpath: "covers/4.jpg"} , 
     {songName: "Ek Kudi", filepath:"songs/5.mp3", coverpath: "covers/5.jpg"} , 
    {songName: "Jhol", filepath:"songs/6.mp3", coverpath: "covers/6.jpg"} , 
     {songName: "I like Me Better", filepath:"songs/7.mp3", coverpath: "covers/7.jpg"} , 
     {songName: "Pause", filepath:"songs/8.mp3", coverpath: "covers/8.jpg"} , 
     {songName: "Insane", filepath:"songs/9.mp3", coverpath: "covers/9.jpg"} , 
]

SongItem.forEach((element, i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverpath;
    element.getElementsByClassName("SongName")[0].innerText  = songs[i].songName;
})



//handle  play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// listen to event 

    audioElement.addEventListener('timeupdate', ()=>{ 
      // Update Seekbar
      progress = parseInt((audioElement.currentTime/audioElement.duration)*100); 
     myProgressBar.value=progress;
  })


  myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value*audioElement.duration/100;
 })

 const makeAllPlays = () =>{
Array.from( document.getElementsByClassName('SongItemPlay')).forEach((element)=>{
    element.classList.remove('fa-pause-circle');
    element.classList.add('fa-play-circle');
 }) 
 }

Array.from( document.getElementsByClassName('SongItemPlay')).forEach((element)=>{
     element.addEventListener('click', (e)=>{
     makeAllPlays();
     songIndex = parseInt(e.target.id);
     e.target.classList.remove('fa-play-circle');
     e.target.classList.add('fa-pause-circle');
     audioElement.src = `songs/${songIndex+1}.mp3`;
     audioElement.currentTime = 0;
     audioElement.play();
     gif.style.opacity = 1;
     masterPlay.classList.remove('fa-play-circle');
     masterPlay.classList.add('fa-pause-circle');
 
    })

})
 
document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0;
    }
    else{
        songIndex += 1;
    }
audioElement.src = `songs/${songIndex+1}.mp3`;
 masterSongName.innerText = songs[songIndex].songName;
audioElement.currentTime = 0;
audioElement.play();
  masterPlay.classList.remove('fa-play-circle');
  masterPlay.classList.add('fa-pause-circle');
  

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0;
    }
    else{
        songIndex -= 1;
    }
audioElement.src = `songs/${songIndex+1}.mp3`;
 masterSongName.innerText = songs[songIndex].songName;
audioElement.currentTime = 0;
audioElement.play();
  masterPlay.classList.remove('fa-play-circle');
  masterPlay.classList.add('fa-pause-circle');
})