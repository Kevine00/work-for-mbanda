const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach(dropdown=> {

const select =  dropdown.querySelector('.select')
const sign =  dropdown.querySelector('.sign')
const menu =  dropdown.querySelector('.menu')
const options =  dropdown.querySelectorAll('.menu li')
const selected =  dropdown.querySelector('.selected')


select.addEventListener('click',() =>{
select.classList.toggle('select-clicked');
sign.classList.toggle('sign-rotate');
menu.classList.toggle('menu-open')
});

options.forEach(option => {
option.addEventListener('click' , () => {

selected.innerText = option.innerText;
select.classList.remove('select-clicked')
sign.classList.remove('sign-rotate');
menu.classList.remove('menu-open');
options.forEach(option => {
option.classList.remove(active);
})
option.classList.add('active');
});
});
});