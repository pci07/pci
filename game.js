document.addEventListener('keydown', movePlayer);

let player = document.getElementById('player');
let playerPosition = { top: 470, left: 135 }; // Initial position

function movePlayer(event) {
  switch(event.key) {
    case 'ArrowUp':
      if (playerPosition.top > 0) playerPosition.top -= 30;
      break;
    case 'ArrowDown':
      if (playerPosition.top < 470) playerPosition.top += 30;
      break;
    case 'ArrowLeft':
      if (playerPosition.left > 0) playerPosition.left -= 30;
      break;
    case 'ArrowRight':
      if (playerPosition.left < 270) playerPosition.left += 30;
      break;
  }
  player.style.top = playerPosition.top + 'px';
  player.style.left = playerPosition.left + 'px';
}
