const menuIcon = document.getElementById('menu-icon');
const header = document.getElementById('header');
const mainContent = document.getElementById('main-content');
const menuModal = document.getElementById('menu-modal');
const menuCloseBtn = document.getElementById('close-btn');
const listItems = document.querySelectorAll('.menu-item');

// Listener's functions
const openMenuModal = () => {
  menuModal.classList.add('expanded');
  header.classList.add('reduce-opacity');
  mainContent.classList.add('reduce-opacity');
};

const closeMenuModal = () => {
  menuModal.classList.remove('expanded');
  header.classList.remove('reduce-opacity');
  mainContent.classList.remove('reduce-opacity');
};

// Listeners
menuIcon.addEventListener('click', openMenuModal);
menuCloseBtn.addEventListener('click', closeMenuModal);
listItems.forEach((item) => {
  item.addEventListener('click', closeMenuModal);
});