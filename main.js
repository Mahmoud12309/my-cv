const header = document.querySelector("header");
window.addEventListener('scroll',()=>{
	header.classList.toggle("sticky",window.scrollY > 100);
});

let navlist = document.querySelector(".navlist");
let mnue = document.querySelector("#menu-icon");
mnue.onclick = () =>{
	navlist.classList.toggle('open');
}
window.onscroll = () =>{
	navlist.classList.remove('open');
}
//<i class='bx bx-x'></i>
//<i class="fa-solid fa-xmark"></i>