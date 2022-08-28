let title = document.getElementsByClassName('title')[0];
let teskt = document.getElementsByClassName('teskt')[0];

let story = 0;

setStory(story);


function setStory(index) {
    let story = stories[index];

    title.innerText = story[0];
    teskt.innerText = story[1];
}
function changeStory(offset) {
    story += offset;
    story = Math.max(Math.min(story, stories.length - 1), 0);

    setStory(story);
}