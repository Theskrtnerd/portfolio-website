import Typed from 'typed.js';

function typed() {
  const typed = new Typed('#element', {
    strings: ['a Computer Science student', 'an Aspiring Software Engineer'],
    typeSpeed: 50,
    loop: true,
    loopCount: 3,
    smartBackspace: true,
  });
}

typed();


document.addEventListener('astro:after-swap', typed);