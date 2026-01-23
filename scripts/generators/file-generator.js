/*
 * hexo theme meow
 * file generator (album images)
 */

const fs = require("fs");
const path = require('path');
const { imageSize } = require('image-size');

function readDirFileList(dirPath) {
  const results = {};
  function scan(currentPath, relativePath = '') {
    try {
      const items = fs.readdirSync(currentPath, { withFileTypes: true });

      for (const item of items) {
        const fullPath = path.join(currentPath, item.name);

        if (item.isDirectory()) {
          scan(fullPath, path.join(relativePath, item.name));
        } else if (item.isFile()) {
          const stats = fs.statSync(fullPath);
          const subDir = relativePath || '.';

          if (!results[subDir]) {
            results[subDir] = [];
          }

          results[subDir].push({
            name: item.name,
            mtime: stats.mtime
          });
        }
      }
    } catch (err) {
      console.warn(`Failed to read directory: ${currentPath}`);
    }
  }

  scan(dirPath);

  Object.values(results).forEach(files => {
    files.sort((a, b) => b.mtime - a.mtime);
  });

  return results;
}

async function getImgSize(imgPath) {
  try {
    const dimensions = imageSize(imgPath);
    return dimensions;
  } catch (error) {
    console.error(`Failed to get image(${imgPath}) size: ${error}`);
    return null;
  }
}

async function handleAlbumImage(imgList) {
  let images = {};

  for (const dir in imgList) {
    if (!images[dir]) {
      images[dir] = [];
    }
    for (const file of imgList[dir]) {
      let buffer = fs.readFileSync('source/images/albums/' + dir + '/' + file.name);
      let dimensions = await getImgSize(buffer);
      if (dimensions) {
        images[dir].push({
          name: file.name,
          width: dimensions.width,
          height: dimensions.height
        });
      }
    }
  }

  return images;
}

hexo.extend.generator.register("getAlbumImage", function (locals) {
  return {
    path: "albums/ImageList.json",
    data: async function () {
      const results = readDirFileList('source/images/albums');
      let images = await handleAlbumImage(results);
      return JSON.stringify(images);
    }
  };
});