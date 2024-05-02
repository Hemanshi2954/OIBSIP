let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function () {
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function () {
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
})

document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.item');
  
    items.forEach(item => {
      const content = item.querySelector('.content');
      const button = content.querySelector('button');
      const hiddenContent = content.querySelector('.hidden');
  
      button.addEventListener('click', () => {
        hiddenContent.classList.toggle('hidden'); // Toggles visibility on click
        content.classList.toggle('expanded'); // Toggle expanded class to control animation
        if (button.textContent === 'See More') {
          button.textContent = 'See Less';
        } else {
          button.textContent = 'See More';
        }
      });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.item');
  
    items.forEach(item => {
        const content = item.querySelector('.content');
        const button = content.querySelector('.play-pause');
        const video = content.querySelector('.video');
  
        button.addEventListener('click', () => {
            if (video.paused) {
                video.play();
                button.textContent = 'Pause';
            } else {
                video.pause();
                button.textContent = 'Play';
            }
        });
    });
});