let videoContent = document.getElementById("video-content");
let videoCourse = document.createElement("video");
let source = document.createElement("source");

function bersyukur() {
  videoContent.innerHTML = `
  <video width="100%" height="100%" controls>
    <source src="videos/1.mp4">
  </video>`;
}

function mengagungkan() {
  videoContent.innerHTML = `
  <video width="100%" height="100%" controls>
    <source src="videos/2.mp4">
  </video>`;
}

function mempersungguh() {
  videoContent.innerHTML = `
  <video width="100%" height="100%" controls>
    <source src="videos/3.mp4">
  </video>`;
}

function berdoa() {
  videoContent.innerHTML = `
  <video width="100%" height="100%" controls>
    <source src="videos/4.mp4">
  </video>`;
}
