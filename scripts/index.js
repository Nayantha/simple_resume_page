const scroll_down_btn = document.getElementsByClassName("scroll-down-btn")[0]
scroll_down_btn.addEventListener("click", ()=>{
    window.scrollTo(0, document.body.scrollHeight)
})