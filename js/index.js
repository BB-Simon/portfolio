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

const seeProjectDetailsBtn = document.querySelector('#see-projects-btn');

const projectData = [
  {
    id: 1,
    name: 'name',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.", "A daily selection of privately personalized reads; no accounts or sign-ups required.',
    image: '../img/jumbo1.jpg',
    technologies: ['Codekit', 'Github', 'Javascript', 'Bootstrap', 'Javascript', 'Bootstrap'],
    sourceLink: 'https://github.com/emekaemmanuel/res_portfolio',
    liveLink: 'https://github.com/emekaemmanuel/res_portfolio',
  },
];

const openProjectDetailsModal = (e) => {
  e.preventDefault();
  // const body = document.body;
  // i.e below
  // const detailsModal = document.querySelector('details-modal');
  // body.appendChild()
};
seeProjectDetailsBtn.addEventListener('click', openProjectDetailsModal);