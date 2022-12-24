const menuIcon = document.getElementById('menu-icon');
const logo = document.getElementById('logo');
const mainContent = document.getElementById('main-content');
const menuModal = document.getElementById('menu-modal');
const menuCloseBtn = document.getElementById('close-btn');
const listItems = document.querySelectorAll('.menu-item');

// Listener's functions
const openMenuModal = () => {
  menuModal.classList.add('expanded');
  logo.classList.add('blur-bg');
  menuIcon.classList.add('blur-bg');
  mainContent.classList.add('blur-bg');
};

const closeMenuModal = () => {
  menuModal.classList.remove('expanded');
  logo.classList.remove('blur-bg');
  menuIcon.classList.remove('blur-bg');
  mainContent.classList.remove('blur-bg');
};

// Listeners
menuIcon.addEventListener('click', openMenuModal);
menuCloseBtn.addEventListener('click', closeMenuModal);
listItems.forEach((item) => {
  item.addEventListener('click', closeMenuModal);
});

/** *******************************************
* Prject section JS implementation
********************************************* */
const worksSection = document.getElementById('works');
const projectData = [
  {
    id: 1,
    name: 'Facebook 360',
    description: 'Exploring the future of media in Facebook\'s first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
    popupDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    image: { src: '../assets/snapshoot-1.png', title: 'Portfolio' },
    meta: ['FACEBOOK', 'Back End Dev', '2015'],
    technologies: ['html', 'css', 'Ruby on rails', 'javascript'],
    sourceLink: 'https://github.com/BB-Simon',
    liveLink: 'https://bb-simon.github.io/',
  },
  {
    id: 2,
    name: 'Uber Navigation',
    description: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    popupDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    image: { src: '../assets/snapshoot-2.png', title: 'Portfolio' },
    meta: ['Uber', 'Lead Developer', '2018'],
    technologies: ['html', 'css', 'Python', 'javascript'],
    sourceLink: 'https://github.com/BB-Simon',
    liveLink: 'https://bb-simon.github.io/',
  },
  {
    id: 3,
    name: 'Tonic',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    popupDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    image: { src: '../assets/snapshoot-3.png', title: 'Portfolio' },
    meta: ['Uber', 'Back End Dev', '2018'],
    technologies: ['html', 'css', 'Nodejs', 'javascript'],
    sourceLink: 'https://github.com/BB-Simon',
    liveLink: 'https://bb-simon.github.io/',
  },
  {
    id: 4,
    name: 'Multi-Post Stories',
    description: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    popupDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    image: { src: '../assets/snapshoot-4.png', title: 'Portfolio' },
    meta: ['CANOPY', 'Full Stack Dev', '2015'],
    technologies: ['html', 'css', 'Ruby on rails', 'javascript'],
    sourceLink: 'https://github.com/BB-Simon',
    liveLink: 'https://bb-simon.github.io/',
  },
];

// Listener's functions
// project card content
const createProjectCard = (project) => {
  const cardContainer = document.createElement('div');
  if (project.id === 1 || project.id === 3) {
    cardContainer.classList.add('card-conntainer', 'flex-reverse');
  } else {
    cardContainer.classList.add('card-conntainer');
  }

  const techList = project.technologies.map((tech) => `<li class="card-category">${tech}</li>`);
  const metaList = project.meta.map((meta, index) => {
    if (index !== 0) {
      return `<div class="divider"></div>
        <span class="card-meta-item muted">${meta}</span>`;
    }
    return `<span class="card-meta-item">${meta}</span>`;
  });

  const html = `
    <img src=${project.image.src} alt=${project.image.title}>
    <div class="card-content">
        <h2 class="card-title">${project.name}</h2>
        <div class="card-meta">
          ${metaList.join('')}
        </div>
        <p id="card-description">${project.description}</p>
        <ul class="card-categories-wrapper">
          ${techList.join('')}
        </ul>
        <div class="card-cta-wrapper">
            <button data-id=${project.id} class="card-btn see-project">See Project</button>
        </div>
    </div>`;
  cardContainer.innerHTML = html;
  worksSection.appendChild(cardContainer);
};

// project details modal content
const popup = (project) => {
  const techList = project.technologies.map((tech) => `<li class="card-category">${tech}</li>`);
  const metaList = project.meta.map((meta, index) => {
    if (index !== 0) {
      return `<div class="divider"></div>
        <span class="card-meta-item muted">${meta}</span>`;
    }
    return `<span class="card-meta-item">${meta}</span>`;
  });
  const html = `<div id="project-detail-modal-overlay"></div>
  <section id="project-detail-modal">
      <article class="project-modal-card">
          <header class="project-modal-header">
              <nav class="project-modal-nav">
                  <h2 class="card-title p-card-title">${project.name}</h2>
                  <button id="project-close-btn" class="close-btn">
                      <img src="./assets/close-dark-icon.png" alt="Close Icon">
                  </button>
              </nav>
              <div class="card-meta">
                  ${metaList.join('')}
              </div>
          </header>
          <section class="project-modal-section">
              <img src=${project.image.src} alt=${project.image.title}>
              <div class="project-modal-info">
                  <p id="card-description" class="project-card-description">${project.popupDescription}</p>
                  <div>
                      <ul class="card-categories-wrapper">
                          ${techList.join('')}
                      </ul>
                      <div class="card-divider"></div>
                      <div class="project-card-cta-wrapper">
                          <a href=${project.liveLink} target="_blank" class="card-btn project-btn">
                              <span>See live</span>
                              <img src="./assets/Icon - Export.png" alt="Live link">
                          </a>
                          <a href=${project.sourceLink} target="_blank" class="card-btn project-btn">
                              <span>See source</span>
                              <img src="./assets/Icon -GitHub.png" alt="Github source link">
                          </a>
                      </div>
                  </div>
              </div>
          </section>
      </article>
  </section>`;
  return html;
};

// Open project detail card modal
const openProjectModal = (btn, cb = () => null) => {
  const id = parseInt(btn.getAttribute('data-id'), 10);
  const data = projectData.filter((p) => p.id === id);
  document.getElementById('project-popup').innerHTML = popup(data[0]);
  return cb();
};

// Close project detail card modal
const closeProjectModal = () => {
  const projectModal = document.getElementById('project-detail-modal');
  const projectCloseBtn = document.getElementById('project-close-btn');

  projectCloseBtn.addEventListener('click', () => {
    document.getElementById('project-popup').innerHTML = '';
    document.body.style.margin = '';
    document.body.style.overflow = '';
  });
  projectModal.addEventListener('click', () => {
    document.getElementById('project-popup').innerHTML = '';
    document.body.style.margin = '';
    document.body.style.overflow = '';
  });
  for (let i = 0; i < projectModal.childNodes.length; i += 1) {
    projectModal.childNodes[i].addEventListener('click', (event) => {
      event.stopPropagation();
    });
  }
};

// Listeners
projectData.forEach((project) => createProjectCard(project));
const cardBtn = document.querySelectorAll('.see-project');
cardBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    const scrollBarWidth = window.innerWidth - document.body.offsetWidth;
    document.body.style.margin = `0px ${scrollBarWidth}px 0px 0px`;
    document.body.style.overflow = 'hidden';
    openProjectModal(btn, closeProjectModal);
  });
});

/** *******************************************
* Contact form validation
********************************************* */
const contactForm = document.querySelector('#contact-form');

// Validate if email is lowercase
const validateEmail = (email) => {
  if (/[A-Z]/.test(email)) {
    return false;
  }
  return true;
};

// Submit contact form with email validation
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = e.target.email.value;
  const error = document.querySelector('.error');
  const isSubmitOk = validateEmail(email);
  if (isSubmitOk) {
    error.style.display = 'none';
  } else {
    error.style.display = 'block';
    error.innerHTML = 'Email must content only lower case charecters';
  }
});
