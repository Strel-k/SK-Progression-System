const toggleButton = document.querySelector('.toggle-btn');
const sidebarContainer = document.querySelector('.sidebar-container');

toggleButton.addEventListener('click', () => {
    sidebarContainer.classList.toggle('sidebar-hidden');
});