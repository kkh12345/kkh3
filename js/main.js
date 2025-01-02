//오른쪽 메뉴 호버시 다이아몬드 회전
rotateDiamond();
function rotateDiamond() {
  const rightMenu = document.querySelectorAll('.right-menu');
  rightMenu.forEach((a) => {
    a.addEventListener('mouseover', function () {
      if (!this.classList.contains('active')) {
        this.style.setProperty('--rotate-diamond', '135deg');
      }
    });
    a.addEventListener('mouseout', function () {
      if (!this.classList.contains('active')) {
        this.style.setProperty('--rotate-diamond', '45deg');
      }
    });
  });
}
