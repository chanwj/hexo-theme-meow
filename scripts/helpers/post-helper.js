/*
 * hexo theme meow
 * post data helper
 */

"use strict";

hexo.extend.helper.register('getArchiveList', function () {
  const { posts } = this.page;
  let archiveList = [], years = [];

  posts.forEach((post) => {
    if (!years.includes(post.date.year())) {
      years.push(post.date.year())
    }
  });
  years.forEach((year) => {
    archiveList.push({ year: year, yearList: [], yearNum: 0 });
  });

  posts.forEach((post) => {
    let year = post.date.year(), month = post.date.month();
    archiveList.forEach((yearItem) => {
      if (year != yearItem.year) {
        return;
      }
      yearItem.yearNum += 1;

      let monthFlag = false;
      for (let m = 0; m < yearItem.yearList.length; m++) {
        if (month != yearItem.yearList[m].month) {
          continue;
        }
        yearItem.yearList[m].postList.push(post);
        monthFlag = true;
        break;
      }

      if (!monthFlag) {
        yearItem.yearList.push({ month: month, postList: [post] });
      }
    });
  });

  return archiveList;
})