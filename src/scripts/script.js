import Typed from 'typed.js';

const typed = new Typed('#element', {
  strings: ['<i>First</i> sentence.', '&amp; a second sentence.'],
  typeSpeed: 50,
  loop: true,
  loopCount: 3,
  smartBackspace: true,
});