const videosNode = document.querySelectorAll("[data-time]");
const videosArray = Array.from(videosNode);

const secondsTotal = videosArray
    .map(ele => ele.dataset.time)
    .map(timeCode => {
        const [mins, secs] = timeCode.split(":").map(parseFloat);
        return (mins*60) + secs;
    })
    .reduce((total, videoSeconds)=>total+videoSeconds);

const hours = Math.floor(secondsTotal/3600);
const mins = Math.floor((secondsTotal%3600)/60);

console.log(hours,mins);

