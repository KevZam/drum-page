let numOfDrumButtons = document.querySelectorAll(".drum").length;

for (let i = 0; i < numOfDrumButtons; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    let audio = new Audio("sounds/kick-bass.mp3");
    audio.play();
  });
}
