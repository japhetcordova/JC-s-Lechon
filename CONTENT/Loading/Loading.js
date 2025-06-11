window.addEventListener("load", function () {
  setTimeout(() => {
    document.getElementById("preloader").style.display = "none";
    document.getElementById("content").style.display = "block";
  }, 7000); // 2-second delay to simulate loading
});
