
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const target = document.getElementById(targetId);
    window.scrollTo({
      top: target.offsetTop - 60,
      behavior: "smooth"
    });
  });
});
