/* 
 * hexo theme meow
 * search function scripts
 */

const initSearch = () => {
  const initLocalSearch = () => {
    if (!GLOBALCONFIG.search.path) {
      console.warn('`hexo-generator-searchdb` plugin is not installed or configured!');
      return;
    }
    const localSearch = new LocalSearch({
      path: GLOBALCONFIG.root + GLOBALCONFIG.search.path,
      top_n_per_article: GLOBALCONFIG.search.local.top_n_per_article,
      unescape: false
    });

    const input = document.querySelector('#search-input');
    const container = document.querySelector('.search-result-container');
    const searchOverlay = document.querySelector('.search-overlay');

    const inputEventFunction = () => {
      if (!localSearch.isfetched) return;
      const searchText = input.value.trim().toLowerCase();
      const keywords = searchText.split(/[-\s]+/);
      let resultItems = [];
      if (searchText.length > 0) {
        // Perform local searching
        resultItems = localSearch.getResultItems(keywords);
      }
      if (keywords.length === 1 && keywords[0] === '') {
        container.innerHTML = '<div class="search-result-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><path d="M21 21l-6 -6" /></svg></div>';
      } else if (resultItems.length === 0) {
        container.innerHTML = '<div class="search-result-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><path d="M21 21l-6 -6" /></svg></div>';
      } else {
        resultItems.sort((left, right) => {
          if (left.includedCount !== right.includedCount) {
            return right.includedCount - left.includedCount;
          } else if (left.hitCount !== right.hitCount) {
            return right.hitCount - left.hitCount;
          }
          return right.id - left.id;
        });

        // Remove highlight searchparams at target page
        container.innerHTML = `<div class="search-stats">${resultItems.length + ' results found'}</div><ul class="search-result-list">${resultItems.map(result => result.item.replace(/(<a href="[^\?]+)\?highlight=[^"]+"( class|>)/g, `$1"$2`)).join('')}</ul>`;
      }
    };

    // Highlight keywords at target page
    // localSearch.highlightSearchWords(document.querySelector('.post'));
    if (GLOBALCONFIG.search.local.preload) {
      localSearch.fetchData();
    }

    input.addEventListener('input', inputEventFunction);
    window.addEventListener('search:loaded', inputEventFunction);

    // Handle and trigger popup window
    document.getElementById('search-btn').addEventListener('click', () => {
      if (searchOverlay.hasAttribute("active")) {
        searchOverlay.removeAttribute("active");
      } else {
        searchOverlay.setAttribute("active", "");
      }

      // Wait for search-popup animation to complete
      setTimeout(() => input.focus(), 500);
      if (!localSearch.isfetched) localSearch.fetchData();
    });

    // Monitor main search box
    const onPopupClose = () => {
      searchOverlay.removeAttribute("active");
    };

    searchOverlay.addEventListener('click', event => {
      if (event.target === searchOverlay) {
        onPopupClose();
      }
    });
    document.querySelector('.search-close-btn').addEventListener('click', onPopupClose);
    window.addEventListener('keyup', event => {
      if (event.key === 'Escape') {
        onPopupClose();
      }
    });
  };

  initLocalSearch();
};

export default initSearch;