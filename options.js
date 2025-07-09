function saveOptions(e) {
  e.preventDefault();
  browser.storage.sync.set({
    videosPerRow: document.querySelector("#videosInput").value,
  });
}

function restoreOptions() {
  function setCurrentChoice(result) {
    document.querySelector("#videosInput").value = result.videosPerRow || 5;
  }

  function onError(error) {
    console.log(`Error: ${error}`);
  }

  let getting = browser.storage.sync.get("videosPerRow");
  getting.then(setCurrentChoice, onError);
}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);
