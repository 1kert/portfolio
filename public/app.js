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
    "w-[70%]", // c++
    "w-[62%]", // c
    "w-[57%]", // java
    "w-[40%]", // js
    "w-[35%]", // python
];

async function setPercentages(){
    let langs = document.querySelectorAll("#prog-lang > div");
    
    let promise;
    langs.forEach((lang, i) => {
        promise = new Promise(res => {
            setTimeout(() => {
                fadeIn(lang);
                console.log(`bruh ${i + 1}`);
                res();
            }, (i + 1) * 80);
        });
    });
    await promise;
    
    setTimeout(() => {
        let docs = document.querySelectorAll(".lang-skill");
        docs.forEach((x, i) => {
            setTimeout(() => {
                x.classList.add(percentages[i]);
            }, i * 50);
        });
    }, 400);
}

function fadeIn(elem, func = null){
    elem.classList.remove("opacity-0");
    elem.classList.remove("translate-y-[50%]");
    if(func != null) func();
}

let observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            fadeIn(entry.target);
            if(entry.target.id == "prog-lang") setPercentages();
            return;
        }
    })
});

document.querySelectorAll(".fadein").forEach(x => {
    observer.observe(x);
});