function copyCode() {
  'use strict';
  var clipboard = new ClipboardJS('#copyCodeBtn', {
    target: function (trigger) {
      return trigger.parentNode.querySelector('.code');
    },
  });
}

document.addEventListener('DOMContentLoaded', function () {
  'use strict';
  var figureList = document.querySelectorAll('.highlight');
  figureList.forEach(function (figure) {
    var copyCodeBtn = document.createElement('button');
    copyCodeBtn.id = 'copyCodeBtn';
    copyCodeBtn.className = 'fa-regular fa-copy';
    copyCodeBtn.alt = 'Copy';
    figure.appendChild(copyCodeBtn);
  })
})