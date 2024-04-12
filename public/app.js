let leftMain = document.querySelectorAll(".fadein-left");
setTimeout(() => {
    for(let i = 0; i < leftMain.length; i++){
        setTimeout(() => {
            leftMain[i].classList.remove("fadein-left");
        }, i * 100);
    }
}, 100);

let rightMain = document.querySelectorAll(".fadein-right");
setTimeout(() => {
    for(let i = 0; i < rightMain.length; i++){
        setTimeout(() => {
            rightMain[i].classList.remove("fadein-right");
        }, i * 100);
    }
}, 400);

setTimeout(() => {
    let doc = document.querySelector("#test");
    doc.classList.remove("w-0");
    doc.classList.add("w-[90%]");
}, 1000);