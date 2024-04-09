const navBtn = document.querySelector('.mobile_nav_btn');
const navList = document.querySelector('.mobile_nav_list');
console.log(navList);
navBtn.addEventListener('click', () => {
    navList.classList.toggle('mobile_nav_list_on');
});