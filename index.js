var buttons= document.querySelectorAll(".drum").length
var button = document.querySelectorAll(".drum")
console.log(button[2])

for(i=0;i<buttons;i++){

  document.querySelectorAll(".drum")[i].addEventListener("click",function(){ 
    var buttonInnerHtml = this.innerHTML
    playSong(buttonInnerHtml)
    buttonAnimation(buttonInnerHtml)
  })

  document.addEventListener("keypress",function(event){
    playSong(event.key)
    buttonAnimation(event.key)
  })

  function playSong(input){
    switch (input) {
      case "w":
          let audio1 = new Audio("sounds/tom-1.mp3")
          audio1.play()
        break;
      case "a":
          let audio2 = new Audio("sounds/tom-2.mp3")
           audio2.play()
        break;  
      case "s":
          let audio3 = new Audio("sounds/tom-3.mp3")
           audio3.play()
        break;  
      case "d":
          let audio4 = new Audio("sounds/tom-4.mp3")
           audio4.play()
        break;
      case "j":
          let audio5 = new Audio("sounds/snare.mp3")
           audio5.play()
        break; 
      case "k":
          let audio6 = new Audio("sounds/crash.mp3")
           audio6.play()
        break;  
      case "l":
          let audio7 = new Audio("sounds/kick-bass.mp3")
           audio7.play()
        break;                
      default:console.log(this.innerHTML)
        break;
    }
  }
  
  function buttonAnimation(currentKey){
    var button = document.querySelector("." + currentKey)
    button.classList.add("pressed")
    setTimeout(function(){
      button.classList.remove("pressed") },  100 )
  }

}





























//let audio = new Audio("sounds/tom-1.mp3")
//   audio.play()
 /*
    if (this.innerHtml == "w"){
      let audio = new Audio("sounds/tom-1.mp3")
      audio.play()
    }else if(this.innerHtml =="a"){
      let audio = new Audio("sounds/tom-1.mp3")
       audio.play()
    }else if(this.innerHtml =="s"){
      let audio = new Audio("sounds/tom-1.mp3")
      audio.play()
    }else if(this.innerHtml =="d"){
      let audio = new Audio("sounds/tom-1.mp3")
      audio.play()
    }else if(this.innerHtml =="j"){
      let audio = new Audio("sounds/tom-1.mp3")
      audio.play()
    }else if(this.innerHtml =="k"){
      let audio = new Audio("sounds/tom-1.mp3")
      audio.play()
    }else if(this.innerHtml =="l"){
      let audio = new Audio("sounds/tom-1.mp3")
      audio.play()
    }
  */