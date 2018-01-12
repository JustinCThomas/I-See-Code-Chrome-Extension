chrome.browserAction.onClicked.addListener( (tab) => {
  chrome.tabs.executeScript({
    code: `var elements = document.querySelectorAll("*");
    elements.forEach((elem) => {
      if (elem.nodeName.toLowerCase() !== "a") {
        elem.classList.toggle('code');
      } else {
        elem.classList.toggle('code-anchor');
        for (let i = 0; i < elem.children.length; i++) {
          elem.children[i].classList.toggle('code-anchor');
        }
      }
    });
    `
  });
});
