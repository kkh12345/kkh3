//오른쪽 메뉴 호버시 다이아몬드 회전
rotateDiamond();
function rotateDiamond() {
  const rightMenu = document.querySelectorAll('.right-menu');
  let [section0, section1, section2, section3] = [
    ...document.querySelectorAll('section'),
  ];
  rightMenu.forEach((a, i) => {
    a.addEventListener('click', function (e) {
      e.preventDefault();
      if (i === 0) {
        window.scrollTo({ top: section0.offsetTop });
      } else if (i === 1) {
        window.scrollTo({ top: section1.offsetTop });
      } else if (i === 2) {
        window.scrollTo({ top: section2.offsetTop });
      } else if (i === 3) {
        window.scrollTo({ top: section3.offsetTop });
      }
    });
    a.addEventListener('mouseover', function () {
      if (!this.classList.contains('active')) {
        this.style.setProperty('--rotate-diamond', '135deg');
      }
    });
    a.addEventListener('mouseleave', function () {
      if (!this.classList.contains('active')) {
        this.style.setProperty('--rotate-diamond', '45deg');
      }
    });
  });
}
//Contact 펼치기
openContactContent();
function openContactContent() {
  document.querySelectorAll('.contact-box').forEach((a) => {
    a.addEventListener('click', function () {
      this.classList.toggle('open');
    });
  });
}
