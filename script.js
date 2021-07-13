// create emoji array
const emojiArr = ["✌","😂","😝","😁","😱","👉","🙌","🍻","🔥","🌈","☀","🎈","🌹","💄","🎀","⚽","🎾","🏁","😡","👿","🐻","🐶","🐬","🐟","🍀","👀","🚗","🍎","💝","💙","👌","❤","😍","😉","😓","😳","💪","💩","🍸","🔑","💖","🌟","🎉","🌺","🎶","👠","🏈","⚾","🏆","👽","💀","🐵","🐮","🐩","🐎","💣","👃","👂","🍓","💘","💜","👊","💋","😘","😜","😵","🙏","👋","🚽","💃","💎","🚀","🌙","🎁","⛄","🌊","⛵","🏀","🎱","💰","👶","👸","🐰","🐷","🐍","🐫","🔫","👄","🚲","🍉","💛","💚"];
const movesEmojiArr = ["⭐","🌟","✨","🌌","🌙"]
const para = document.createElement('p');
const movesButton = document.createElement('button');
const moveGridSize =10;
movesButton.innerText = "Moves"
movesButton.addEventListener('click', movesFunction);

let currentPosition = [moveGridSize -1, 0];

for(let i = 0; i < emojiArr.length; i+=1) {
  const button = document.createElement('button');
  button.innerText = emojiArr[i];
  button.addEventListener('click', () => {buttonPress(emojiArr[i])});
  document.body.appendChild(button);
}

document.body.appendChild(movesButton);
document.body.appendChild(para);
document.body.addEventListener('keypress', (e) => {moveEmoji(e.key)});


// functions
// returns grid of emojis
function buttonPress(emoji) {
  para.innerText = "";
  for(let j = 0; j < 3; j +=1) {
    
    for(let i = 0; i < 3; i +=1) {
      para.innerText += emoji;
    }
    para.innerHTML += '<br>';
  }
}

function movesFunction() {
  para.innerText = "";
  let emojiSelector = Math.floor(Math.random() * movesEmojiArr.length);
  for(let i = 0; i < moveGridSize; i +=1) {
    
    for (let j = 0; j < moveGridSize; j +=1) {
      if (currentPosition[0] == i && currentPosition[1] == j) {
        para.innerText += "🚀";
      }
      else {
         para.innerText += movesEmojiArr[emojiSelector];
      }
    }
    para.innerHTML += '<br>';
  }
}

function moveEmoji(arrowKey) {
  console.log('here');
  switch (arrowKey) {
    case "w":
      currentPosition[0] -=1;
      break;
      case "s":
      currentPosition[0] +=1;
      break;
      case "a":
      currentPosition[1] -=1;
      break;
      case "d":
      currentPosition[1] +=1;
      break;
  }
  console.log(currentPosition);
  movesFunction();
}
