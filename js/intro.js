introFull();
function introFull() {
  //인트로 요소들
  const introBox = document.querySelector('.home-area .intro-box');
  const introText = document.querySelector('.intro-text');
  const avatar = document.querySelector('.intro-avatar-wrap>img');
  const cursor = document.querySelector('.intro-cursor');
  const root = document.querySelector('#root');
  const rootInLeft = root.children[0];
  const rootInRight = root.children[1];

  let introMatch = matchMedia('(max-width : 1024px)');
  introMatch.addEventListener('change', function () {
    if (this.matches) {
      intro();
    } else {
      introAnimationFinishState();
    }
  });
  if (this.scrollY === 0) {
    intro();
  } else {
    introAnimationFinishState();
  }

  async function intro() {
    const string = '고경현의 포트폴리오 페이지입니다.';

    introText.textContent = '';
    rootInLeft.style.height = '100vh';
    rootInLeft.style.overflow = 'hidden';

    // 로고 등장
    await new Promise((resolve) => {
      avatar.style.transform = `translateX(0)`;
      let timer = setTimeout(() => {
        if (introMatch.matches) {
          clearTimeout(timer);
          resolve();
        } else {
          resolve();
        }
      }, 600);
      if (introMatch.matches) {
        clearTimeout(timer);
        resolve();
      }
    });

    //로고 등장 0.5초 후 커서 등장
    await new Promise((resolve) => {
      let timer = setTimeout(() => {
        if (introMatch.matches) {
          cursor.style.display = 'none';
          clearTimeout(timer);
          resolve();
        } else {
          cursor.style.display = 'inline-block';
          resolve();
        }
      }, 500);
      if (introMatch.matches) {
        cursor.style.display = 'none';
        clearTimeout(timer);
        resolve();
      }
    });

    //커서 등장 0.3초 후 타이핑 효과
    await new Promise((resolve) => {
      let timer = setTimeout(() => {
        let i = 0;
        const string = '고경현의 포트폴리오 페이지입니다.';
        let interval = setInterval(() => {
          if (introMatch.matches) {
            introText.innerHTML = string;
            clearTimeout(timer);
            clearInterval(interval);
            resolve();
          } else {
            if (i <= string.length - 1) {
              let letter = string[i];
              let span = document.createElement('span');
              span.textContent = letter;
              span.style.animationDelay = `${0.05 * i}s`;
              introText.appendChild(span);
              i++;
            } else if (i > string.length - 1) {
              clearInterval(interval);
              resolve();
            }
          }
        }, 200);
      }, 500);
      if (introMatch.matches) {
        introText.innerHTML = string;
        clearTimeout(timer);
        resolve();
      }
    });

    //타이핑 효과 1초 후물결
    await new Promise((resolve) => {
      let timer = setTimeout(() => {
        if (introMatch.matches) {
          clearTimeout(timer);
          resolve();
        } else {
          [...introText.children].forEach((a) => a.classList.add('wave'));
          resolve();
        }
      }, 1000);
      if (introMatch.matches) {
        clearTimeout(timer);
        resolve();
      }
    });

    //1.85초 후 그 외 효과들
    await new Promise((resolve) => {
      let timer = setTimeout(() => {
        root.style.backgroundColor = '#fff';
        rootInRight.style.transform = 'translateX(0)';
        introText.style.color = '#000';
        cursor.style.display = 'none';
        avatar.style.transform = `translateX(0)`;
        document.querySelectorAll('.contact-box').forEach((a) => {
          a.style.transform = `translate(0)`;
        });
        if (introMatch.matches) {
          rootInLeft.style.width = '100%';
        } else {
          rootInLeft.style.width = '75%';
        }
        rootInLeft.style.height = 'auto';
        resolve();
      }, 1850);
      if (introMatch.matches) {
        clearTimeout(timer);
        introAnimationFinishState();
        resolve();
      }
    });
  }

  //애니메이션 끝난 상태 함수
  function introAnimationFinishState() {
    root.style.transition = 'none';
    rootInRight.style.transition = 'none';
    introText.style.transition = 'none';
    avatar.style.transition = 'none';
    rootInLeft.style.transition = 'none';
    root.style.backgroundColor = '#fff';
    rootInRight.style.transform = 'translateX(0)';
    introText.style.color = '#000';
    cursor.style.display = 'none';
    avatar.style.transform = `translateX(0)`;
    document.querySelectorAll('.contact-box').forEach((a) => {
      a.style.transform = `translate(0)`;
    });
    if (introMatch.matches) {
      rootInLeft.style.width = '100%';
    } else {
      rootInLeft.style.width = '75%';
    }
    rootInLeft.style.height = 'auto';
  }
}
