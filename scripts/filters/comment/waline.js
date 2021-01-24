/* global hexo */

'use strict';

hexo.extend.filter.register('theme_inject', injects => {
  injects.comment.raw('waline', '<div class="comments" id="waline"></div>', {}, {cache: true});
});
