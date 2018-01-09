let toggleButton = document.getElementById("toggleButton");


toggleButton.addEventListener('click', function() {
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
