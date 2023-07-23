const scroll_down_btn = document.getElementsByClassName("scroll-down-btn")[0]
scroll_down_btn.addEventListener("click", ()=>{
    window.scrollTo({ left: 0, top: document.body.scrollHeight, behavior: "smooth" });
})
const scroll_up_btn = document.getElementsByClassName("scroll-up-btn")[0]
scroll_up_btn.addEventListener("click", ()=>{
    window.scrollTo(100,document.body.scrollHeight)
})