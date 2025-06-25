/* 
 * hexo theme meow
 * datetime scripts
 */

const initCopy = () => {
  const copyWithInfo = () => {
    document.querySelectorAll('.copy-text').forEach((element) => {
      element.addEventListener("click", meow.debounce(() => {
        navigator.clipboard.writeText(GLOBALCONFIG.share_text + '\nTitle: ' + meow.getPageTitle() + '\nLink: ' + element.getAttribute("data-text"));
        let origin_text = element.innerHTML;
        element.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l5 5l10 -10" /></svg>';
        setTimeout(() => {
          element.innerHTML = origin_text;
        }, 1000);
      }, 200));
    });
  };

  const handleCopyText = () => {
    document.addEventListener('copy', function (event) {
      let clipboardData = event.clipboardData || window.clipboardData;
      if (clipboardData) {
        event.preventDefault();
        let copyText = window.getSelection().toString();
        clipboardData.setData('text/plain', GLOBALCONFIG.share_text + '\nLink: ' + document.URL + '\n\n' + copyText);
        meow.snackbarFn(GLOBALCONFIG.notify.info);
      }
    });
  };

  handleCopyText();
  copyWithInfo();
};

export default initCopy;