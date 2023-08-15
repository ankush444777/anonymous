burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navlist = document.querySelector('.nav-list')
rightnav = document.querySelector('.rightnav')

// search functinality add
const box = document.querySelectorAll(".images");
const searchBar = document.getElementById("search");


searchBar.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
    let searchVal = searchBar.value;
    box.forEach((b, i) => {
        if (searchVal === b.dataset.name) {
            return b.style.display = "block";
        }
        return b.style.display = "none";
    })
console.log(searchVal);
    }
})


burger.addEventListener('click',()=>{
    rightnav.classList.toggle('v-class');
    navlist.classList.toggle('v-class');
    navbar.classList.toggle('h-nav');

})
