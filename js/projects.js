//프로젝트 섹션 전역함수
projectSection();
function projectSection() {
  //요소 변수
  const cardGroup = document.querySelector('.card-group');
  const slidePrevButton = document.querySelector('.slide-button.prev');
  const slideNextButton = document.querySelector('.slide-button.next');

  //프로젝트 데이터 받아와서 카드 만들기 함수
  createProjectCard();
  async function createProjectCard() {
    const response = await fetch('./data/projectsData.json')
      .then((res) => res.json())
      .then((data) => data)
      .catch((err) => err);
    let productsData = [...response];
    let template = '';

    productsData.forEach((product) => {
      let skills = '';
      product.skills.forEach((skill) => {
        skills += `<span class="skill-box ${skill}">${skill}</span>`;
      });

      template += ` <li>
                  <div class="card-img-wrap"> <img src="${product.src}" alt="${
        product.title
      }"></div>
                  <div class="card-text-wrap">
                    <h3 class="card-title">${product.title}</h3>
                    <p class="card-desc">${product.desc}</p>
                    <p class="card-skills">${skills}</p>
                    <span class="card-badge ${
                      product.team ? 'team' : 'single'
                    }">${product.team ? 'TEAM' : 'SINGLE'}</span>
                  </div>
                  
                  <div class="hover-box">
                    <h3 class="card-title">${product.title}</h3>
                    <a href="${
                      product.githubLink
                    }" class="github-link">Github 바로가기</a>
                    <a href="${
                      product.readmoreLink
                    }" class="read-more-link">READ MORE</a>
                  </div>
                </li>`;
    });

    cardGroup.insertAdjacentHTML('beforeend', template);
    slide();
  }
  //반응형 슬라이드 개수 변경
  const slideMatch = matchMedia('(max-width : 768px)');
  slideMatch.addEventListener('change', function () {
    let slidePerView;
    if (this.matches) {
      slidePerView = 1;
    } else {
      slidePerView = 2;
    }
    slide(slidePerView);
  });

  //프로젝트 섹션 슬라이드 함수
  function slide(slidePerView = 2) {
    const slideWrapper = document.querySelector(
      '.projects-area .slide-wrapper'
    );
    const card = [...cardGroup.children];

    if (window.innerWidth > 1024) {
      slidePerView = 2;
    } else if (window.innerWidth < 768) {
      slidePerView = 1;
    }
    let marginRight = 30;
    let maxPage = Math.ceil(card.length / slidePerView) - 1;
    let currentPage = 0;

    card.forEach((a, i) => {
      a.style.width = `calc( ( 100% - ${
        (slidePerView - 1) * marginRight
      }px ) / ${slidePerView} )`;
      if ((i + 1) % slidePerView === 0) {
        a.style.marginRight = `0`;
      } else {
        a.style.marginRight = `${marginRight}px`;
      }
    });
    slidePrevButton.addEventListener('click', function () {
      if (currentPage <= 0) {
        currentPage = 0;
      } else {
        currentPage--;
      }
      cardGroup.style.transform = `translateX(-${currentPage * 100}%)`;
    });
    slideNextButton.addEventListener('click', function () {
      if (currentPage >= maxPage) {
        currentPage = maxPage;
      } else {
        currentPage++;
      }
      cardGroup.style.transform = `translateX(-${currentPage * 100}%)`;
    });
  }
}
