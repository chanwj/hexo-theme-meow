function decodeToc() {
  'use strict';
  if (document.getElementById('toc-body')) {
    document.getElementById('toc-body').addEventListener('click', function (event) {
      var targetElement = event.target.tagName;
      var parentElement = event.target.parentElement;
      var decodeId = "";
      if (targetElement.tagName === 'A' && targetElement.getAttribute("class") === 'toc-content-link') {
        decodeId = decodeURIComponent(targetElement.getAttribute("href").replace("#", ""));
        document.getElementById(decodeId).scrollIntoView({ behavior: 'smooth' });
      } else if (parentElement.tagName === 'A' && parentElement.getAttribute("class") === 'toc-content-link') {
        decodeId = decodeURIComponent(parentElement.getAttribute("href").replace("#", ""));
        document.getElementById(decodeId).scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
}