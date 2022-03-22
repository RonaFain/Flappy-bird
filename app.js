let gElGame, gElPipe, gElLid, gElBird, gElScore, gElModal
let isGameOver = false

initGame()

function initGame() {
  getElements()
  setLids()
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
    console.log(gElLid);
    gElLid.addEventListener('animationiteration', () => {
        const topHeight = 0.6 * window.innerHeight
        const bottomHeight = 0.95 * window.innerHeight
        const randTop = getRandomIntInclusive(topHeight, bottomHeight)
        console.log('randTop' , randTop);
        gElLid.style.top = `-${randTop}px`
    })
}

function setEventListeners() {
    window.addEventListener('resize', () => {
        if(!isGameOver) return
        setAnimation()
    })
}