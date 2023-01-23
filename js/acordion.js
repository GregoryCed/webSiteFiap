const acordion_box = document.querySelectorAll(".box-acordion");

acordion_box.forEach((item) =>{
    const acordion_header_item = item.querySelector(".acordion-header");

    acordion_header_item.addEventListener("click", () =>{
        const acordion_body_item = item.querySelector(".acordion-body");

        const item_actived = document.querySelector(".active");

        VerifyActiveAcordion(item, acordion_body_item, item_actived);
    });
});

function VerifyActiveAcordion(item, body, active){
    const icon = item.querySelector(".acordion-icon");
    const icon_active = document.querySelectorAll(".acordion-icon");

    icon_active.forEach((item) => (item.innerHTML = "+"));
    

    if(active){
        active.style.height = 0;
        active.classList.remove("active");
    }

    if(body !== active){
        icon.innerHTML = "-";
        body.classList.add("active");
        body.style.height = body.scrollHeight + 100 + "px";
    }
}