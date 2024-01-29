const toggleBtn = document.getElementById('toggle-btn');
const closeBtn = document.getElementById('close-btn');
const smNav = document.getElementById('sm-nav');

toggleBtn.addEventListener('click', () => {
    smNav.classList.toggle('active');
})
closeBtn.addEventListener('click', () => {
    smNav.classList.remove('active');
})