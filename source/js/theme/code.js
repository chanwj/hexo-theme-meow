/* 
 * hexo theme meow
 * codeblock scripts
 */

const initCodeBlock = () => {
  document.querySelectorAll(".codebox").forEach((codebox) => {
    let fold_button = codebox.querySelector(".code-fold");
    let copy_button = codebox.querySelector(".code-copy");

    fold_button.addEventListener("click", () => {
      codebox.classList.toggle("folded");
      if (codebox.classList.contains("folded")) {
        fold_button.removeChild(fold_button.querySelector("svg"));
        fold_button.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 15l6 -6l6 6" /></svg>';
      } else {
        fold_button.removeChild(fold_button.querySelector("svg"));
        fold_button.innerHTML = '<svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 9l6 6l6 -6" /></svg>';
      }
    });

    copy_button.addEventListener("click", () => {
      const code_lines = [...codebox.querySelectorAll(".code .line")];
      const code_content = code_lines.map((line) => line.innerText).join("\n");
      navigator.clipboard.writeText(GLOBALCONFIG.share_text + '\nLink: ' + document.URL + '\n\n' + code_content);

      copy_button.removeChild(copy_button.querySelector("svg"));
      copy_button.innerHTML = '<svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l5 5l10 -10" /></svg>';
      setTimeout(() => {
        copy_button.removeChild(copy_button.querySelector("svg"));
        copy_button.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"  stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z" /><path d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1" /></svg>';
      }, 1000);
    });
  });
};

export default initCodeBlock;