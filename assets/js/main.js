$(document).ready(function () {
  // Owl Carousel 01
  $("#indexPageCalOne").owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    dots: false,
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1000: { items: 4 }
    }
  });

  // Owl Carousel 02
  $(".movie-poster-cal").owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    dots: false,
    navText: ['<span>&#8249;</span>', '<span>&#8250;</span>'],
    responsive: {
      0: { items: 2 },
      576: { items: 2 },
      768: { items: 3 },
      992: { items: 5 }
    }
  });

  // Owl Carousel 03
  $(".movies-serice-cal").owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    dots: false,
    autoplay: false,
    autoplayTimeout: 3000,
    responsive: {
      0: { items: 2 },
      576: { items: 2 },
      768: { items: 3 },
      992: { items: 5 }
    }
  });


});

  const video = document.getElementById('video');
  const videoContainer = document.getElementById('videoContainer');
  const playPauseBtn = document.getElementById('playPauseBtn');
  const progress = document.getElementById('progress');
  const currentTimeDisplay = document.getElementById('currentTime');
  const totalTimeDisplay = document.getElementById('totalTime');
  const leftArrow = document.getElementById('leftArrow');
  const rightArrow = document.getElementById('rightArrow');
  const volumeToggle = document.getElementById('volumeToggle');


  let lastClickTime = 0;

  // Prevent single click on controls from toggling video
  videoContainer.addEventListener('click', (e) => {
    const now = new Date().getTime();
    const timeDiff = now - lastClickTime;
    lastClickTime = now;

    // Prevent click when dragging or clicking UI controls
    const isControl = e.target.closest('.controls') || e.target.closest('.settings-icons') || e.target.tagName === 'INPUT';
    if (isControl) return;

    if (timeDiff > 300) {
      togglePlayPauseOverlay();
    }
  });

  function togglePlayPauseOverlay() {
    if (video.paused) {
      playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
    } else {
      playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
    }
    playPauseBtn.style.display = 'block';

    playPauseBtn.onclick = () => {
      togglePlay();
    };

    setTimeout(() => {
      playPauseBtn.style.display = 'none';
    }, 1000);
  }

  function togglePlay() {
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  }

  function rewind() {
    video.currentTime = Math.max(0, video.currentTime - 10);
    showArrow(leftArrow);
  }

  function forward() {
    video.currentTime = Math.min(video.duration, video.currentTime + 10);
    showArrow(rightArrow);
  }

  function showArrow(element) {
    element.style.display = 'block';
    setTimeout(() => element.style.display = 'none', 1000);
  }

  video.addEventListener('timeupdate', () => {
    const percentage = (video.currentTime / video.duration) * 100;
    progress.value = percentage;
    progress.style.background = `linear-gradient(to right, #3396FF ${percentage}%, #ccc ${percentage}%)`;
    currentTimeDisplay.textContent = formatTime(video.currentTime);
  });

  video.addEventListener('loadedmetadata', () => {
    totalTimeDisplay.textContent = formatTime(video.duration);
  });

  progress.addEventListener('input', () => {
    const percentage = progress.value;
    video.currentTime = (percentage / 100) * video.duration;
    progress.style.background = `linear-gradient(to right, #3396FF ${percentage}%, #ccc ${percentage}%)`;
  });

  function formatTime(time) {
    const mins = Math.floor(time / 60).toString().padStart(2, '0');
    const secs = Math.floor(time % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
  }

  function toggleFullScreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }

  volumeToggle.addEventListener('click', () => {
    video.muted = !video.muted;
    volumeToggle.className = video.muted ? 'fas fa-volume-mute' : 'fas fa-volume-up';
  });