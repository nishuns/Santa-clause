// Check dom is loaded or not

document.addEventListener('DOMContentLoaded', () => {
  const snow = getElement('snow');
  const trigger = getElement('trigger');
  const jingle = getElement('jingle');

  trigger.onclick = () => {
    toggleSnowFall(snow)
    jingle.volume = 0.2;
    if (jingle.paused) {
      jingle.play();
    } else {
      jingle.pause();
    }
  }

  var myTimeline = anime.timeline(parameters);
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