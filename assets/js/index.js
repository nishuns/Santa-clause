// Check dom is loaded or not

document.addEventListener('DOMContentLoaded', () => {
  const snow = getElement('snow');
  const trigger = getElement('trigger');
  const jingle = getElement('jingle');

  jingle.volume = 0.2;
  // jingle.autoplay;

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
    })
    .add({
      targets: '.santa',
      translateX: '-90vw',
      easing: 'spring(10, 10, 90, 0)',
    })
    .add({
      targets: '.santa',
      scaleX: '-1',
      easing: 'spring(1, 80, 90, 0)'
    })
    .add({
      targets: '.santa',
      translateX: '0',
      easing: 'spring(10, 10, 90, 0)'
    })
    .add({
      targets: '.santa',
      scaleX: '1',
      easing: 'spring(1, 80, 90, 0)'
    })
    .add({
      targets: '.forest__bottom',
      height: '10vh',
    })
    .add({
      targets: '.forest__top',
      translateY: '0',
      easing: 'spring(1, 80, 90, 0)'
    })
    .add({
      targets: '.trigger',
      opacity: 1
    }).add({
      targets: '.banner',
      opacity: 1
    })

  trigger.onclick = () => {
    toggleSnowFall(snow);
    setTimeout(() => {
      toggleSnowFall(snow);
      jingle.play();
      jingle.currentTime = 0
      myTimeline.restart();
    }, 500);
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