
var videosPerRow = localStorage.getItem("videosPerRow") || 5;;

function onError(error) {
    videosPerRow = 5; // Fallback to default value
    console.error(`Error retrieving videosPerRow: ${error}`);
}

function onGot(item) {
    if (item.videosPerRow) {
        videosPerRow = item.videosPerRow;
    }
}

const getting = browser.storage.sync.get("videosPerRow");
getting.then(onGot, onError);


setTimeout(() => {
    let items = document.body.getElementsByClassName("ytd-rich-grid-renderer");

    for (let item of items) {
        item.setAttribute("style", "--ytd-rich-grid-items-per-row: " + videosPerRow + ";");
    }
}, 1000);