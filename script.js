// create emoji array
const emojiArr = ["✌","😂","😝","😁","😱","👉","🙌","🍻","🔥","🌈","☀","🎈","🌹","💄","🎀","⚽","🎾","🏁","😡","👿","🐻","🐶","🐬","🐟","🍀","👀","🚗","🍎","💝","💙","👌","❤","😍","😉","😓","😳","💪","💩","🍸","🔑","💖","🌟","🎉","🌺","🎶","👠","🏈","⚾","🏆","👽","💀","🐵","🐮","🐩","🐎","💣","👃","👂","🍓","💘","💜","👊","💋","😘","😜","😵","🙏","👋","🚽","💃","💎","🚀","🌙","🎁","⛄","🌊","⛵","🏀","🎱","💰","👶","👸","🐰","🐷","🐍","🐫","🔫","👄","🚲","🍉","💛","💚"];

const para = document.createElement('p');

for(let i = 0; i < emojiArr.length; i+=1) {
  const button = document.createElement('button');
  button.innerText = emojiArr[i];
  button.addEventListener('click', () => {buttonPress(emojiArr[i])});
  document.body.appendChild(button);
}
document.addEventListener('keydown', fn)

// function
function buttonPress(emoji) {
  para.innerText = "";
  for(let j = 0; j < 3; j +=1) {
    
    for(let i = 0; i < 3; i +=1) {
      para.innerText += emoji;
    }
    para.innerHTML += '<br>';
  }
}
