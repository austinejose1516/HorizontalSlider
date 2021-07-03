const divs = document.querySelectorAll('.box');
const container = document.querySelector('.container')

divs.forEach((img, id) => {
  img.style.backgroundImage = `url(./images/image${id+1}.jpg)`
})

window.onscroll = () => {
  container.style.left = `${-window.scrollY}px`
}

let current = container.getBoundingClientRect().left;

const callDistort = () => {
  let newPosition = container.getBoundingClientRect().left
  let difference = newPosition - current;
  let speed = difference * 0.35;

  container.style.transform = `skewX(${speed}deg)`;
  current = newPosition;

  requestAnimationFrame(callDistort)
}
callDistort()

