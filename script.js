alert("Hi, Thanks for visting my website! Some features and content may be unavailable as I continue to work on them. I'm currently on holiday so check back next week for some improvements! ")





const picBtn = document.querySelector("#picture-tab");
const content = document.querySelector("#about-content")

picBtn.addEventListener("click", function (e) {
  content.classList.toggle('-selected');
});


