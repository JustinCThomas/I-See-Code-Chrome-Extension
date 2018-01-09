var toggleButton = document.getElementById("toggleButton");


toggleButton.addEventListener('click', function() {
  chrome.tabs.executeScript({
    code: `var elements = document.querySelectorAll("*");
    var anchorTags = document.querySelectorAll("a");
    elements.forEach((elem) => {
      elem.classList.toggle('code');
    });
    anchorTags.forEach((a) => {
      a.classList.toggle('anchor');
    });
    `
  });
});
