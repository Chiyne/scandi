const anchors = document.querySelectorAll('a[href*="#"]')
const upButton = document.querySelector('.up-button');

window.onscroll = function () {
  if (window.pageYOffset > 1500) {
    upButton.classList.add('up-button_shown');
  } else {
    upButton.classList.remove('up-button_shown');
    }
};

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()

    const blockID = anchor.getAttribute('href').substr(1)

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

