const works = [
  "piton", "javaescripto", "peagape" , "tipoescripto", "nodulo"
]

const secretWork = works[Math.floor(Math.random() * works.length)].toUpperCase()
const wrongLetters = []
const correctLetters = []

document.addEventListener("keydown", (event)=>{
  const keyCode = event.key
  if(keyCode.match(/[a-zA-z]/)){
    const letter = keyCode.toUpperCase()

    secretWork.includes(letter) 
      ? 
        correctLetters.push(letter) 
      : 
        wrongLetters.push(letter)
    
    updateScreen()
  } 
})

function updateScreen(){}

function showCorrectLetters() {
  
}