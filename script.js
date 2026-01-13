/*const hearts = document.querySelectorAll('.heart');
const mediaContainer = document.getElementById('media-container');

hearts.forEach(heart => {
  heart.addEventListener('click', () => {
    const mediaFile = heart.getAttribute('data-media');
    const extension = mediaFile.split('.').pop().toLowerCase();

    // Clear previous media
    mediaContainer.innerHTML = '';

    if (extension === 'mp3') {
      const audio = document.createElement('audio');
      audio.src = mediaFile;
      audio.controls = true;
      audio.autoplay = true;
      mediaContainer.appendChild(audio);
    } else if (extension === 'mp4') {
      const video = document.createElement('video');
      video.src = mediaFile;
      video.controls = true;
      video.autoplay = true;
      video.width = 300;
      mediaContainer.appendChild(video);
    } else if (extension === 'png' || extension === 'jpg') {
      const img = document.createElement('img');
      img.src = mediaFile;
      
      mediaContainer.appendChild(img);
    }
  });
});*/


const hearts = document.querySelectorAll('.heart');
const mediaContainer = document.getElementById('media-container');

const totalHearts = hearts.length;
let clickedCount = 0;
let lastHeartClicked = false;
hearts.forEach(heart => {
  heart.addEventListener('click', () => {

if (!heart.classList.contains('opened')) {
  heart.classList.add('opened');
  clickedCount++;
}

if (clickedCount === totalHearts) {
  lastHeartClicked = true;
}


    const mediaFile = heart.getAttribute('data-media');
    const extension = mediaFile.split('.').pop().toLowerCase();
    heart.classList.add('pop');

    // Clear previous media
    mediaContainer.innerHTML = '';
    mediaContainer.style.pointerEvents = 'auto';

    // Wrapper for media + close button
    const wrapper = document.createElement('div');
    wrapper.style.textAlign = 'center';
    wrapper.style.position = 'relative';

    // Add media
    if (extension === 'mp3') {
      const audio = document.createElement('audio');
      audio.src = mediaFile;
      audio.controls = true;
      audio.autoplay = true;
      wrapper.appendChild(audio);
    } else if (extension === 'mp4') {
      const video = document.createElement('video');
      video.src = mediaFile;
      video.controls = true;
      video.autoplay = true;
      video.width = 800px;
      video.style.zIndex = '10';
      video.style.pointerEvents = 'auto';
      video.style.width = '85%';
      
      
      video.setAttribute('playsinline','');
      video.setAttribute('webkit-playsinline', '');
      wrapper.appendChild(video);
    } else if (extension === 'png' || extension === 'jpg') {
      const img = document.createElement('img');
      img.src = mediaFile;
      img.style.width = '800px';
      wrapper.appendChild(img);
    }

    // Close button
    const closeBtn = document.createElement('button');
    closeBtn.innerText = 'Close ❤️';
    closeBtn.style.display = 'block';
    closeBtn.style.margin = '10px auto';
    closeBtn.style.padding = '5px 10px';
    closeBtn.style.fontSize = '16px';
    closeBtn.style.cursor = 'pointer';
    closeBtn.style.position = 'relative';
    closeBtn.style.zIndex = '20';

    closeBtn.addEventListener('click', () => {
      mediaContainer.innerHTML = ''; 
      mediaContainer.style.pointerEvents = 'none';
      if (lastHeartClicked) {
  showThankYou();
}// remove media and button
    });

    wrapper.appendChild(closeBtn);
    mediaContainer.appendChild(wrapper);
  });
});
/*function showThankYou() {
  const jar = document.querySelector('.jar-container');

  const message = document.createElement('div');
  message.className = 'final-message';
  message.innerHTML = `
    <h2>For You, My Love ❤️</h2>
    <p>
      Without you , <br>
      My heart feels empty like this.<br>
    </p>
    <p>
      Every heart you touched carried my feelings.<br>
      Distance may separate us,<br>
      but my love never will.
    </p>
    <p>
      Thank you for being my forever.
    </p>
    <p>— Yours, Always 💗</p>
  `;

  jar.appendChild(message);
}*/

function showThankYou() {
  const jar = document.querySelector('.jar-container');

  const message = document.createElement('div');
  message.className = 'final-message';
  message.innerHTML = `
    <h2 id="type-title"></h2>
  <p id="type-line1"></p>
  <p id="type-line2"></p>
  <p class="signature" id="type-sign"></p>
  `;

  jar.appendChild(message);
  const title = document.getElementById('type-title');
const line1 = document.getElementById('type-line1');
const line2 = document.getElementById('type-line2');
const sign = document.getElementById('type-sign');

typeText(title, 'For You, My Love ❤️', 80, () => {
  typeText(
    line1,
    'Without you My Heart feel empty like this. Every heart you touched carried my feelings. Even across distance, my love reaches you.',
    40,
    () => {
      typeText(
        line2,
        'Thank you for being my strength, my pride, and my forever.',
        40,
        () => {
          typeText(sign, '— Yours, Always 💗', 60);
        }
      );
    }
  );
});
}

  function typeText(element, text, speed, callback) {
  let i = 0;
  element.innerHTML = '';

  const interval = setInterval(() => {
    element.innerHTML += text.charAt(i);
    i++;

    if (i >= text.length) {
      clearInterval(interval);
      if (callback) callback();
    }
  }, speed);
}






