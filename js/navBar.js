const container_nav = document.querySelectorAll(".container-nav");

container_nav.forEach((item) =>{
    const nav_icon = item.querySelector(".nav-icon");

    nav_icon.addEventListener("click", () =>{
        const nav_options = item.querySelector(".nav-options");

        const item_actived = document.querySelector(".active");

        const nav_btn_inscrever = document.querySelector(".box-nav-btn");
        
        VerifyActiveNav(nav_btn_inscrever, nav_options, item_actived);
    });
});

function VerifyActiveNav(btn, body, active){

    if(active){
        active.style.height = 0;
        active.classList.remove("active");
        btn.style.height = 0;
    }

    if(body !== active){
        body.classList.add("active");
        body.style.height = body.scrollHeight + 50 + "px";
        btn.style.height = 40 + "px";
    }
}

