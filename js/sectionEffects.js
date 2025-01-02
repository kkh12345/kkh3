function sectionEffect() {
  const rightMenu = document.querySelectorAll('.right-menu');
  let [section0, section1, section2, section3] = [
    ...document.querySelectorAll('section'),
  ];
  let lastScrollY = 0;

  matchMedia('(max-width : 1024px)').addEventListener('change', function () {
    if (this.matches) {
      window.removeEventListener('scroll', sectionScrollEvent);
      window.addEventListener('scroll', resScrollEvent);
      finishState();
    } else {
      window.addEventListener('scroll', sectionScrollEvent);
      window.removeEventListener('scroll', resScrollEvent);
    }
  });

  if (window.innerWidth > 1024) {
    sectionScrollEvent();
    window.addEventListener('scroll', sectionScrollEvent);
  } else {
    window.addEventListener('scroll', resScrollEvent);
    finishState();
  }

  function finishState() {
    document.querySelectorAll('.text-hide').forEach((a) => {
      a.className = 'text-up';
    });
    document
      .querySelectorAll(`.education-area .paragraph02 li`)
      .forEach((a) => {
        a.className = 'show';
      });
    document.querySelector('.projects-area .slide-area').classList.add('show');
    document.querySelectorAll(`.skills-area .skill-box-group`).forEach((a) => {
      a.classList.add('show');
    });
    document.querySelector('.root-in-right').classList.remove('hide');
  }

  function handleActiveRightMenu() {
    rightMenu.forEach((a) => {
      if (a.classList.contains('active')) {
        a.classList.remove('active');
      }
    });
    if (
      0 <= this.scrollY &&
      this.scrollY < section1.offsetTop - section0.offsetHeight * 0.25
    ) {
      rightMenu[0].classList.add('active');
    } else if (
      section1.offsetTop - section0.offsetHeight * 0.25 <= this.scrollY &&
      this.scrollY < section2.offsetTop - section1.offsetHeight * 0.25
    ) {
      rightMenu[1].classList.add('active');
    } else if (
      section2.offsetTop - section1.offsetHeight * 0.25 <= this.scrollY &&
      this.scrollY < section3.offsetTop - section2.offsetHeight * 0.25
    ) {
      rightMenu[2].classList.add('active');
    } else {
      rightMenu[3].classList.add('active');
    }
  }

  function resScrollEvent() {
    handleActiveRightMenu();
    if (this.scrollY > lastScrollY) {
      if (
        !document.querySelector('.root-in-right').classList.contains('hide')
      ) {
        document.querySelector('.root-in-right').classList.add('hide');
      }
    } else {
      if (document.querySelector('.root-in-right').classList.contains('hide')) {
        document.querySelector('.root-in-right').classList.remove('hide');
      }
    }
    lastScrollY = this.scrollY;
  }

  function sectionScrollEvent() {
    handleActiveRightMenu();
    if (this.scrollY > lastScrollY) {
      if (
        this.scrollY > section1.offsetTop - section0.offsetHeight * 0.25 &&
        this.scrollY < section2.offsetTop
      ) {
        document.querySelectorAll(`.${section1.id} .text-hide`).forEach((a) => {
          a.className = 'text-up';
        });
        document
          .querySelectorAll(`.${section1.id} .paragraph02 li`)
          .forEach((a) => {
            a.className = 'show';
          });
      } else {
        document.querySelectorAll(`.${section1.id} .text-up`).forEach((a) => {
          a.className = 'text-hide';
        });
        document
          .querySelectorAll(`.${section1.id} .paragraph02 li`)
          .forEach((a) => {
            a.classList.remove('show');
          });
      }
      //section2
      if (
        this.scrollY > section2.offsetTop - section1.offsetHeight * 0.25 &&
        this.scrollY < section3.offsetTop - section2.offsetHeight * 0.25
      ) {
        document.querySelectorAll(`.${section2.id} .text-hide`).forEach((a) => {
          a.className = 'text-up';
        });
        document
          .querySelector(`.${section2.id}  .slide-area`)
          .classList.add('show');
      } else {
        document.querySelectorAll(`.${section2.id}  .text-up`).forEach((a) => {
          a.className = 'text-hide';
        });
        document
          .querySelector(`.${section2.id} .slide-area`)
          .classList.remove('show');
      }
      //section3
      if (this.scrollY > section2.offsetTop + section2.offsetHeight * 0.5) {
        document.querySelectorAll(`.${section3.id} .text-hide`).forEach((a) => {
          a.className = 'text-up';
        });
        document
          .querySelectorAll(`.${section3.id} .skill-box-group`)
          .forEach((a) => {
            a.classList.add('show');
          });
      }
    } else {
      //section1

      if (
        section1.offsetTop + section1.offsetHeight * 0.25 > this.scrollY &&
        this.scrollY > section0.offsetHeight * 0.25
      ) {
        document.querySelectorAll(`.${section1.id} .text-hide`).forEach((a) => {
          a.className = 'text-up';
        });
        document
          .querySelectorAll(`.${section1.id} .paragraph02 li`)
          .forEach((a) => {
            a.className = 'show';
          });
      } else {
        document.querySelectorAll(`.${section1.id} .text-up`).forEach((a) => {
          a.className = 'text-hide';
        });
        document
          .querySelectorAll(`.${section1.id} .paragraph02 li`)
          .forEach((a) => {
            a.classList.remove('show');
          });
      }
      //section2
      if (
        section2.offsetTop + section2.offsetHeight * 0.25 > this.scrollY &&
        this.scrollY > section1.offsetTop + section1.offsetHeight * 0.25
      ) {
        document.querySelectorAll(`.${section2.id} .text-hide`).forEach((a) => {
          a.className = 'text-up';
        });
        document
          .querySelector(`.${section2.id} .slide-area`)
          .classList.add('show');
      } else {
        document.querySelectorAll(`.${section2.id} .text-up`).forEach((a) => {
          a.className = 'text-hide';
        });
        document
          .querySelector(`.${section2.id} .slide-area`)
          .classList.remove('show');
      }
      //section3
      if (section2.offsetTop > this.scrollY) {
        document.querySelectorAll(`.${section3.id} .text-up`).forEach((a) => {
          a.className = 'text-hide';
        });
        document
          .querySelectorAll(`.${section3.id} .skill-box-group`)
          .forEach((a) => {
            a.classList.remove('show');
          });
      }
    }
    lastScrollY = this.scrollY;
  }
}
sectionEffect();
