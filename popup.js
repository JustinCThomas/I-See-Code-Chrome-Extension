var toggleButton = document.getElementById("toggleButton");


toggleButton.addEventListener('click', function() {
  chrome.tabs.executeScript({
    code: `var elements = document.querySelectorAll("*")
    elements.forEach((elem) => {
      elem.classList.toggle('code');
    })
    `
  });
});
