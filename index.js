let title = document.getElementsByClassName('title')[0];
let teskt = document.getElementsByClassName('teskt')[0];
let buttons = document.getElementsByClassName('buttons')[0].children;

let story = 0;

setStory(story);


function setStory(index) {
    let storyn = stories[index];

    title.innerText = storyn[0];
    teskt.innerText = storyn[1];
}
function changeStory(offset) {
    story += offset;
    story = Math.max(Math.min(story, stories.length - 1), 0);

    setStory(story);

    buttons[0].style.display = ((story > 0)?"block":"none");
    buttons[1].style.display = ((story < stories.length - 1)?"block":"none");
}

document.addEventListener("keydown", e=>{
    let mv = 0;
    mv -= (e.key=="ArrowLeft");
    mv += (e.key=="ArrowRight");
    changeStory(mv);
});
