var mobile_menu = document.querySelector("#mobile_menu");
var menu_btn = document.querySelector("#menu_btn");
var m_link = document.querySelectorAll("#m_link");

menu_btn.addEventListener("click", ()=>{
    mobile_menu.classList.toggle("hidden");
    menu_btn.classList.toggle("text-white");
})

m_link.forEach((link)=>{
    link.addEventListener("click", ()=>{
        mobile_menu.classList.toggle("hidden");
        menu_btn.classList.toggle("text-white");
    })
})

//dark mod
var moon = document.querySelector("#moon");
var body = document.querySelector("body");
moon.addEventListener("click", ()=>{
    body.classList.toggle("dark");
})


