let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function(){
    nextImage();

    }, 2500);

function nextImage(){
    count++;
    if(count>4){
        count = 1;
    }
    document.getElementById("radio"+count).checked = true;
}

const icono = document.querySelector('.header .nav-menu .nav-lista .icono');
const mobile_menu = document.querySelector('.header .nav-menu .nav-lista ul');
const menu_item = document.querySelectorAll('.header .nav-menu .nav-lista ul li a');
const header = document.querySelector('.header.container');

icono.addEventListener('click', () => {
	icono.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = 'transparent';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		icono.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});