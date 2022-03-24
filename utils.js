function getRandomIntInclusive(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function isCollision(firstEl, secondEl, gap = {y1: 0, y2: 0}) {
  const rect1 = firstEl.getBoundingClientRect()
  const rect2 = secondEl.getBoundingClientRect()

  return (
    rect1.x < rect2.x + rect2.width &&
    rect1.x + rect1.width > rect2.x &&
    rect1.y < rect2.y + rect2.height + gap.y1 &&
    rect1.y + rect1.height > rect2.y + gap.y2
  )
}
