function injectScript(tabId) {
  chrome.scripting.executeScript({
    target: { tabId },
    files: ["inject.js"],
  });
}


chrome.action.onClicked.addListener(async (tab) => {
    injectScript(tab.id);
})