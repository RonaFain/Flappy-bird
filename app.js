let gElGame, gElPipe, gElLid, gElBird, gElScore, gElModal
let isGameOver = false
let isOnMove = false

// initGame()

function initGame() {
  getElements()
  setLids()
  setEventListeners()
  setGravity()
  setAnimation()
}

function getElements() {
  gElGame = document.querySelector('.game-container')
  gElPipe = document.querySelector('.pipe')
  gElLid = document.querySelector('.lid')
  gElBird = document.querySelector('.bird')
  gElScore = document.querySelector('.score')
  gElModal = document.querySelector('.modal')
}

function setAnimation() {
  const sec = 2
  const moveAnimation = `moveAnimation ${sec}s infinite linear`

  gElPipe.style.animation = moveAnimation
  gElLid.style.animation = moveAnimation
}

function setLids() {
  gElLid.addEventListener('animationiteration', () => {
    const topHeight = 0.6 * window.innerHeight
    const bottomHeight = 0.95 * window.innerHeight
    const randTop = getRandomIntInclusive(topHeight, bottomHeight)
    gElLid.style.top = `-${randTop}px`
  })
}

function setEventListeners() {
  window.addEventListener('resize', () => {
    if (isGameOver) return
    setAnimation()
  })

  document.body.addEventListener('click', () => {
    if (isGameOver) return
    birdMove()
  })

  document.onkeypress = (ev) => {
    ev = ev || window.event

    if (ev.keyCode === 32) {
      if (isGameOver) return
      birdMove()
    }
  }
}

function birdMove() {
  isOnMove = true
  var moveCount = 0

  const moveInterval = setInterval(() => {
    changeGameState({ direction: 'up', diff: -3 })
    if (moveCount > 20) {
      clearInterval(moveInterval)
      isOnMove = false
      moveCount = 0
    }
    moveCount++
  }, 10)
}

function changeGameState({ direction, diff }) {
  handleAnimation(direction)
  handlePosition(diff)
}

function handleAnimation(direction) {
  if (direction === 'up') {
    gElBird.classList.add('move-up')
    gElBird.classList.remove('move-down')
  } else if (direction === 'down') {
    gElBird.classList.remove('move-up')
    gElBird.classList.add('move-down')
  }
}

function handlePosition(diff) {
    const currTop = parseInt(getComputedStyle(gElBird).top)
    const newTop = currTop + diff

    if(newTop < 0) return
    if(newTop > window.innerHeight) return gameOver()

    gElBird.style.top = `${newTop}px`
}

function setGravity() {
    setInterval(() => {
        if(isOnMove) return
        changeGameState({direction: 'down', diff: 5})
    },20)
}

function gameOver() {

}
