'use strict';

require.config(__FRAMEWORK_CONFIG__);

require.async(['router', 'site'], function (router, site) {
    // 渲染页面骨架z
    site.render(document.body);
});
