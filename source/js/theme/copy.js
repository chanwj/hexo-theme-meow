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

function copyText(text) {
  'use strict';
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text);
  } else {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
  }

  alert('Copied successfully.');
}
