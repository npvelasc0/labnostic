let acceptBtn = document.querySelector('#acceptModel');
var lastTime = 0;

// get video id
var videoId = document.getElementById('modelVideo');

function acceptModel() {
  // Get the selected home page from localStorage
  const selectedHomePage = localStorage.getItem('selectedHomePage');
  if (selectedHomePage === 'entry') {
      window.location.href = "manualEntry.html";
  } else if (selectedHomePage === 'upload') {
      window.location.href = "uploadImage.html";
  } else {
      console.error('Invalid selection:', selectedHomePage);
      // Redirect to home page as default action
      window.location.href = "homelab.html";
  }
}

function declineModel() {
  window.location.href = "homelab.html";
}



document.addEventListener("DOMContentLoaded", function(){

        // attach event listeners
        videoId.addEventListener('play', disableBtn());

        function disableBtn() {
            // if(videoId.onended)
            acceptBtn.disabled = true;
        }
        
        videoId.onplaying = function decreaseOpacity() {
            acceptBtn.disabled = true;
            acceptBtn.style.opacity = 0.5;
        }

        videoId.onended = function enableBtn() {
            // if(videoId.onended)
            acceptBtn.disabled = false;
            acceptBtn.style.opacity = 0.9;
        }

});