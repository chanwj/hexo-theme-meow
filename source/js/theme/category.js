/* 
 * hexo theme meow
 * category page scripts
 */

const initCategoryPage = () => {
  const catList = document.querySelectorAll(".category-content, .category-child");
  for (let i = 0; i < catList.length; i++) {
    let child = catList[i].querySelector(".category-child");
    if (!child) {
      continue;
    }

    let catItem = catList[i].querySelector(".category-item");
    let foldIcon = catItem.querySelector(".icon");
    catItem.addEventListener("click", (event) => {
      if (event.target.tagName === "A" || event.target.className == "category-count") return;

      if (foldIcon.getAttribute("fold") == "true") {
        foldIcon.setAttribute("fold", "false");
        child.toggleAttribute("show", true);
      } else {
        foldIcon.setAttribute("fold", "true");
        child.toggleAttribute("show", false);
      }
    });
  }
};

export default initCategoryPage;