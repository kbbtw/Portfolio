const picBtn = document.querySelector("#picture-tab");
const content = document.querySelector("#about-content")

picBtn.addEventListener("click", function (e) {
  content.classList.toggle('-selected');
});


