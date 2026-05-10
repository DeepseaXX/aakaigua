(function() {
  var SOURCES = window.TEXT_VARIABLES.sources;
  window.Lazyload.js(SOURCES.jquery, function() {
    $(function() {
      var $this ,$scroll;
      var $articleContent = $('.js-article-content');
      var hasSidebar = $('.js-page-root').hasClass('layout--page--sidebar');
      var scroll = hasSidebar ? '.js-page-main' : 'html, body';
      $scroll = $(scroll);

      $articleContent.find('.highlight').each(function() {
        $this = $(this);
        $this.attr('data-lang', $this.find('code').attr('data-lang'));
        var $copyBtn = $('<button class="copy-button d-print-none" title="复制代码"><i class="far fa-copy"></i></button>');
        $this.append($copyBtn);
      });

      $articleContent.on('click', '.copy-button', function() {
        var $btn = $(this);
        var $highlight = $btn.closest('.highlight');
        var code = '';
        var $table = $highlight.find('table.rouge-table');
        
        if ($table.length > 0) {
          code = $table.find('.code').text();
        } else {
          code = $highlight.find('code').text();
        }

        navigator.clipboard.writeText(code).then(function() {
          $btn.html('<i class="fas fa-check"></i>');
          setTimeout(function() {
            $btn.html('<i class="far fa-copy"></i>');
          }, 2000);
        }).catch(function(err) {
          console.error('Failed to copy: ', err);
        });
      });
      $articleContent.find('h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]').each(function() {
        $this = $(this);
        $this.append($('<a class="anchor d-print-none" aria-hidden="true"></a>').html('<i class="fas fa-anchor"></i>'));
      });
      $articleContent.on('click', '.anchor', function() {
        $scroll.scrollToAnchor('#' + $(this).parent().attr('id'), 400);
      });
    });
  });
})();
