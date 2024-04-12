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


let percentages = [
    "w-[90%]", // c#
    "w-[75%]", // c++
    "w-[67%]", // c
    "w-[55%]", // java
    "w-[40%]", // js
    "w-[35%]", // python
];
setTimeout(() => {
    let docs = document.querySelectorAll(".lang-skill");
    docs.forEach((x, i) => {
        x.classList.add(percentages[i]);
    });
}, 1000);