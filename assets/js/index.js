// Check dom is loaded or not

document.addEventListener('DOMContentLoaded', () => {
  const snow = getElement('snow');
  const trigger = getElement('trigger');
  const jingle = getElement('jingle');
  var myTimeline = anime.timeline({
    duration: 1000,
  });

  myTimeline.add({
    targets: '.trigger',
    opacity: 0
  }).add({
    targets: '.banner',
    opacity: 0
  })
    .add({
      targets: '.forest__top',
      translateY: '50vh',
    }).add({
      targets: '.forest__bottom',
      height: '30vh',
    }).add({
      targets: '.forest__bottom',
      height: '10vh',
    })
    .add({
      targets: '.forest__top',
      opacity: 1,
      translateY: '0'
    }).add({
      targets: '.trigger',
      opacity: 1
    }).add({
      targets: '.banner',
      opacity: 1
    })

  trigger.onclick = () => {
    toggleSnowFall(snow)
    jingle.volume = 0.2;
    if (jingle.paused) {
      jingle.play();
    } else {
      jingle.pause();
    }
    myTimeline.restart();
  }

})

/**
 * fn getElement
 * desc return element with id/class
 */
function getElement(selector) {
  if (selector) {
    const selectorType = selector[0] === '.' ? selector : selector[0] === '#' ? selector : `#${selector}`;
    return document.querySelector(selectorType);
  }
  return null;
}

/**
 * fn toggleSnow
 * desc it will do stop or start snow fall
 */
function toggleSnowFall(snow) {
  snow.classList.toggle('wrapper__hidden');
}