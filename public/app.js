

let docs = document.querySelectorAll(".fadein-right");
setTimeout(() => {
    for(let i = 0; i < docs.length; i++){
        setTimeout(() => {
            docs[i].classList.remove("fadein-right");
        }, i * 200);
    }
}, 100);