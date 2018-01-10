chrome.browserAction.onClicked.addListener( (tab) => {
  chrome.tabs.executeScript({
    code: `var elements = document.querySelectorAll("*");
    elements.forEach((elem) => {
      if (elem.nodeName.toLowerCase() !== "a") {
        elem.classList.toggle('code');
      } else {
        elem.classList.toggle('code-anchor');
      }
    });
    `
  });
});
