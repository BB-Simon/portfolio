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
    image: { src: '../assets/snapshoot-4.png', title: 'Portfolio' },
    meta: ['CANOPY', 'Full Stack Dev', '2015'],
    technologies: ['html', 'css', 'Ruby on rails', 'javascript'],
    sourceLink: 'https://github.com/BB-Simon',
    liveLink: 'https://bb-simon.github.io/',
  },
];

// Listener's functions
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
            <button class="card-btn see-project">See Project</button>
        </div>
    </div>`;
  cardContainer.innerHTML = html;
  worksSection.appendChild(cardContainer);
};

projectData.forEach((project) => createProjectCard(project));
const cardBtn = document.querySelectorAll('.see-project');
const modalOverlay = document.getElementById('project-detail-modal-overlay');
const projectModal = document.getElementById('project-detail-modal');
const projectCloseBtn = document.getElementById('project-close-btn');

const openProjectModal = () => {
  const scrollBarWidth = window.innerWidth - document.body.offsetWidth;
  document.body.style.margin = `0px ${scrollBarWidth}px 0px 0px`;
  document.body.style.overflow = 'hidden';
  modalOverlay.style.display = 'block';
  projectModal.style.display = 'block';
};
const closeProjectModal = () => {
  document.body.style.margin = '';
  document.body.style.overflow = '';
  modalOverlay.style.display = 'none';
  projectModal.style.display = 'none';
};

// Listeners
cardBtn.forEach((btn) => {
  btn.addEventListener('click', openProjectModal);
});
projectModal.addEventListener('click', closeProjectModal);
projectCloseBtn.addEventListener('click', closeProjectModal);
for (let i = 0; i < projectModal.childNodes.length; i += 1) {
  projectModal.childNodes[i].addEventListener('click', (event) => {
    event.stopPropagation();
  });
}