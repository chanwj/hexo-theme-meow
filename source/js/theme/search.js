var searchFunc = function(path, search_id, content_id) {
  'use strict';
  $.ajax({
    url: path,
    dataType: "xml",
    success: function( xmlResponse ) {
      // get the contents from search data
      var datas = $( "entry", xmlResponse ).map(function() {
        return {
          title: $( "title", this ).text(),
          content: $("content",this).text(),
          url: $( "url" , this).text()
        };
      }).get();

      var $input = document.getElementById(search_id);
      if (!$input) return;
      var $resultContent = document.getElementById(content_id);
      var searchCount = document.getElementById('search-count');
      var initSearchCount = searchCount.innerText;
      var searchEmpty = document.getElementById('search-result-empty');
      if ($("#search-input").length > 0) {
        $input.addEventListener('input', function () {
          $resultContent.innerHTML = "";
          if (this.value.trim().length <= 0) {
            searchCount.removeAttribute('search-count-show');
            return;
          }
          var str = '<ul class=\"search-result-list\">';
          var keywords = this.value.trim().toLowerCase().split(/[\s\-]+/);
          var matchCount = 0;

          // perform local searching
          datas.forEach(function (data) {
            var isMatch = true;
            // var content_index = [];
            if (!data.title || data.title.trim() === '') {
              data.title = "Untitled";
            }
            var data_title = data.title.trim().toLowerCase();
            var data_content = data.content.trim().replace(/<[^>]+>/g, "").toLowerCase();
            var data_url = data.url;
            var index_title = -1;
            var index_content = -1;
            var first_occur = -1;
            // only match artiles with not empty contents
            if (data_content !== '') {
              keywords.forEach(function (keyword, i) {
                index_title = data_title.indexOf(keyword);
                index_content = data_content.indexOf(keyword);

                if (index_title < 0 && index_content < 0) {
                  isMatch = false;
                } else {
                  if (index_content < 0) {
                    index_content = 0;
                  }
                  if (i == 0) {
                    first_occur = index_content;
                  }
                  // content_index.push({index_content:index_content, keyword_len:keyword_len});
                }
              });
            } else {
              isMatch = false;
            }
            // show search results
            if (isMatch) {
              matchCount++;
              str += "<li><a href='" + data_url + "' class='search-result-title'>" + data_title + "</a>";
              var content = data.content.trim().replace(/<[^>]+>/g, "");
              if (first_occur >= 0) {
                // cut out 100 characters
                var start = first_occur - 20;
                var end = first_occur + 80;

                if (start < 0) {
                  start = 0;
                }

                if (start == 0) {
                  end = 100;
                }

                if (end > content.length) {
                  end = content.length;
                }

                var match_content = content.substring(start, end);

                // highlight all keywords
                keywords.forEach(function (keyword) {
                  var regS = new RegExp(keyword, "gi");
                  match_content = match_content.replace(regS, "<em class=\"search-keyword\">" + keyword + "</em>");
                });

                str += "<p class=\"search-result-content\">" + match_content + "...</p>"
              }
              str += "</li>";
            }
          });
          str += "</ul>";

          // show special notes if no matched article
          if (matchCount <= 0) {
            $resultContent.innerHTML = "";
            searchCount.removeAttribute('search-count-show');
            searchEmpty.setAttribute('search-empty-show', true);
            return;
          }

          $resultContent.innerHTML = str;
          searchCount.setAttribute('search-count-show', true);
          searchCount.innerText = initSearchCount + matchCount;
          searchEmpty.removeAttribute('search-empty-show');
        });
      }
    }
  });
}

function toggleSearchWindow(){
  'use strict';
  var searchPanel = document.getElementById('search-panel');
  if (searchPanel.getAttribute('search-show')) {
    searchPanel.removeAttribute('search-show')
  } else {
    searchPanel.setAttribute('search-show', true);
  }
}