const toggleSidebarButton = document.getElementById('toggleSidebar');
const sidebarContainer = document.querySelector('.sidebar-container');
const mainBody = document.querySelector('.main-body');

toggleSidebarButton.addEventListener('click', () => {
    sidebarContainer.classList.toggle('sidebar-hidden');
    sidebarContainer.classList.toggle('collapsed');
    mainBody.classList.toggle('collapsed');
});

const sidebarItems = document.querySelectorAll('.sidebar ul');
const sections = document.querySelectorAll('.content-section');

function showSection(sectionId) {
    sections.forEach(section => {
        section.style.display = section.id === sectionId ? 'block' : 'none';
    });
}

sidebarItems.forEach(item => {
    item.addEventListener('click', () => {
        const sectionId = item.getAttribute('data-section');
        showSection(sectionId);
    });
});

showSection('dashboard');
