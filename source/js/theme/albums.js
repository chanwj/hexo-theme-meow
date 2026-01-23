/* 
 * hexo theme meow
 * album (waterfall + lazyload + decryption) scripts
 */

const initAlbum = (refreshFalg = 0) => {
  const albumContainer = document.querySelector('#album-content');
  if (!albumContainer) return;

  let imagesJsonList = {};
  let columnCount;
  let columnHeights = [];
  let managing = false;
  let loading = false;
  let imgLoadIndex = 0;
  let endFlag = false;
  const MIN_COLUMN_COUNT = 2;
  const COLUMN_WIDTH = 329; // image width: 301, padding: 14 * 2
  const IMG_WIDTH = 301;
  const GAP_COLUMN = 16;
  const GAP_COLUMN_S = 14;
  const GAP_ROW = 16;
  const GAP_ROW_S = 14;
  const THRESHOLD = 2000; //determines whether a cell is too far away from viewport (px)
  let columnWidth;
  let imgWidth;
  let gapColumn;
  let gapRow;
  let newEvent = new Event('album-load-new-image');

  const getImageJson = () => {
    let xmlhttpRequest = new XMLHttpRequest();
    xmlhttpRequest.open('GET', '/albums/ImageList.json', false);
    xmlhttpRequest.onreadystatechange = () => {
      if (xmlhttpRequest.readyState == 4 && xmlhttpRequest.status == 200) {
        imagesJsonList = JSON.parse(xmlhttpRequest.responseText);
      }
    };
    xmlhttpRequest.send();
  };

  const getColumnCount = () => {
    if (document.querySelector('#albums-container').offsetWidth < 1019) {
      gapColumn = GAP_COLUMN_S;
      gapRow = GAP_ROW_S;
      columnWidth = (document.querySelector('#albums-container').offsetWidth - gapColumn) / 2;
      imgWidth = columnWidth - 12 * 2;
      return 2;
    } else {
      gapColumn = GAP_COLUMN;
      gapRow = GAP_ROW;
      columnWidth = COLUMN_WIDTH;
      imgWidth = IMG_WIDTH;
      return Math.max(MIN_COLUMN_COUNT, Math.floor((document.querySelector('#albums-container').offsetWidth + gapColumn) / (columnWidth + gapColumn)));
    }
  };

  const resetHeights = (count) => {
    columnHeights = [];
    for (let i = 0; i < count; i++) {
      columnHeights.push(0);
    }
    albumContainer.style.width = (count * (columnWidth + gapColumn) - gapColumn) + 'px';
  };

  const appendImage = (columnCount) => {
    if (loading || endFlag) {
      return;
    }

    loading = true;
    let imgList = [];
    let fragment = document.createDocumentFragment();

    for (const album in imagesJsonList) {
      if (album != GLOBALCONFIG.album) continue;

      let images = imagesJsonList[album];
      let imgName;

      for (let i = 0; i < columnCount && imgLoadIndex < images.length; i++) {
        let imgDiv = document.createElement('div');
        imgDiv.className = 'album-img';
        imgDiv.setAttribute('pending', '');
        imgName = images[imgLoadIndex].name.slice(0, images[imgLoadIndex].name.lastIndexOf('.'));
        imgDiv.innerHTML = `
            <div><img src="../../images/albums/${album}/${images[imgLoadIndex].name}" width="${imgWidth}" height="${images[imgLoadIndex].height * imgWidth / images[imgLoadIndex].width}" title="${imgName}" alt="${imgName}"/></div>
            <div>${imgName}</div>
          `
        imgList.push(imgDiv);
        fragment.appendChild(imgDiv);
        imgLoadIndex += 1;
      }
      break;
    };

    if (imgList.length > 0) {
      albumContainer.appendChild(fragment);
      window.dispatchEvent(newEvent);
      adjustImage(imgList, false);
    } else {
      endFlag = true;
      document.querySelector('#album-loader').innerHTML = '<span end>- End -</span>';
    }
    loading = false;
  };

  const adjustImage = (imgList, reflowFlag) => {
    let columnHeight;
    let columnIndex;
    for (let i = 0; i < imgList.length; i++) {
      columnHeight = Math.min(...columnHeights);
      columnIndex = columnHeights.indexOf(columnHeight);
      if (reflowFlag) {
        imgList[i].querySelector('img').height = imgList[i].querySelector('img').naturalHeight * imgWidth / imgList[i].querySelector('img').naturalWidth;
        imgList[i].querySelector('img').width = imgWidth;
      }
      imgList[i].style.left = columnIndex * (columnWidth + gapColumn) + 'px';
      imgList[i].style.top = columnHeight + 'px';
      columnHeights[columnIndex] = columnHeight + imgList[i].offsetHeight + gapRow;

      if (!reflowFlag) {
        imgList[i].removeAttribute('pending');
      }
    }
    albumContainer.style.height = Math.max(...columnHeights) + 'px';
    manageImage();
  };

  const manageImage = () => {
    if (managing) {
      return;
    }

    managing = true;
    let imgList = albumContainer.children;
    let viewportTop = (window.scrollY || window.pageYOffset || document.body.scrollTop) - albumContainer.offsetTop;
    let viewportBottom = (window.innerHeight || document.documentElement.clientHeight) + viewportTop;

    for (let i = 0; i < imgList.length; i++) {
      if (viewportTop - imgList[i].offsetTop - imgList[i].offsetHeight > THRESHOLD) {
        imgList[i].fragment = imgList[i].innerHTML;
        imgList[i].innerHTML = '';
        imgList[i].setAttribute('hide', '');
      } else {
        if (imgList[i].hasAttribute('hide')) {
          imgList[i].innerHTML = imgList[i].fragment;
          imgList[i].removeAttribute('hide');
        }
      }
    }

    if (viewportBottom >= Math.min(...columnHeights) + gapRow) {
      appendImage(columnCount);
    }

    managing = false;
  };

  const reflowImage = () => {
    columnCount = getColumnCount();

    if (columnHeights.length != columnCount || columnCount == 2) {
      resetHeights(columnCount);
      adjustImage(albumContainer.children, true);
    } else {
      manageImage();
    }
  };

  const initAlbumHandler = () => {
    getImageJson();

    window.addEventListener('resize', meow.debounce(() => reflowImage(), 500));
    window.addEventListener('scroll', meow.debounce(() => manageImage(), 500));

    document.querySelector('#album-count').textContent = document.querySelector('#album-count').textContent.replace('...', imagesJsonList[GLOBALCONFIG.album].length);
    columnCount = getColumnCount();
    resetHeights(columnCount);
    manageImage();
  };

  if (refreshFalg == 1 || (refreshFalg == 2 && document.querySelector('.hbe-button'))) {
    document.querySelector('#album-count').removeAttribute('encrypt');
    document.querySelector('#album-loader').removeAttribute('encrypt');
    initAlbumHandler();
  } else if (refreshFalg == 0) {
    window.addEventListener('load', initAlbumHandler);
  }
};

const initLinkAlbum = (refreshFalg = 0) => {
  if (refreshFalg == 1 || (refreshFalg == 2 && document.querySelector('.hbe-button'))) {
    document.querySelector('#album-count').removeAttribute('encrypt');
    document.querySelector('#album-content-links').removeAttribute('encrypt');
  }
};

export { initAlbum, initLinkAlbum };