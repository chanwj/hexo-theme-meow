window.onscroll = function() {
  'use strict';
  if (window.scrollY > 200 || document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    document.getElementById('back-to-top').style.display = 'block';
  } else {
    document.getElementById('back-to-top').style.display = 'none';
  }
};

function scrollToTop() {
  'use strict';
  window.scrollTo(0,0);
  document.body.scrollTop = 0; // Safari
  document.documentElement.scrollTop = 0; // Chrome, Firefox, IE, Opera
}

function tocToggle() {
  'use strict';
  var tocContainer = document.getElementById('post-toc');
  if (tocContainer != null){
    if (!tocContainer.getAttribute('toc-show')) {
      tocContainer.setAttribute('toc-show', true);
    } else {
      tocContainer.removeAttribute('toc-show')
    }
  }
}
