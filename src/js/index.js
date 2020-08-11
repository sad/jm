const host = window.location.host.includes('modii') ? window.location.host : 'modii.space';
const mail = ['hello', String.fromCharCode(64), host.replace('www.', '')].join('');
const player = document.querySelector('audio');

const icons = {
  play: 'fas fa-play-circle',
  pause: 'fas fa-pause-circle',
};

const clearPlayers = (oe = 'false') => {
  player.pause();
  document.querySelectorAll('#pb').forEach((el) => {
    if (oe && el.isPlaying) el.isPlaying = false;
    el.className = icons.play;
  });
};

const setTrack = (element, url) => {
  clearPlayers();

  if (!element.isPlaying) {
    player.src = url;
    element.className = icons.pause;
    element.isPlaying = true;
    player.play();
  } else {
    element.isPlaying = false;
  }
};

document.getElementById('mail').setAttribute('href', `mailto:${mail}`);
player.addEventListener('ended', () => clearPlayers(true));

document.querySelectorAll(icons.pause).forEach((el) => {
  el.addEventListener('click', () => {
    clearPlayers();
  });
});

document.querySelectorAll('#pb').forEach((el) => {
  el.addEventListener('click', (evt) => {
    setTrack(evt.target, `/assets/${evt.target.dataset.track}`);
  });
});
