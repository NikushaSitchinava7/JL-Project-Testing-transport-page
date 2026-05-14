const categorybar = document.querySelector(".category");
const cards = document.querySelectorAll(".card");
const imgboxes = document.querySelectorAll(".imagebox");
let scrollposition = 0;



// vistvis vwer am komentarebs revici revici
// hederis scrolvis kodi
window.addEventListener("scroll", () => {
    const currentscroll = window.scrollY;
    // chemi amjamindeli lokacia

    // kodi rodis chaomvides/avides anu hederi
    if(currentscroll > scrollposition && currentscroll > 140){
        categorybar.classList.add("scrolldown")
    }else{
        categorybar.classList.remove("scrolldown")
    }

    // da douyenebs mere amasaaa xd
    scrollposition = currentscroll;
});


// yvela cards gadaxedavs
cards.forEach(card => {
    // moausi miusvhira
    card.addEventListener("mouseenter", () => {
        card.classList.add("hovered")
    })
    // mausi gadavida am cardidan
    card.addEventListener("mouseleave", () => {
        card.classList.remove("hovered")
    })
});
