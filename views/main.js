'use strict';

require.config(__FRAMEWORK_CONFIG__);

require.async(['router', 'site'], function (router, site) {
    // 渲染页面骨架z
    site.render(document.body);
    
    // 带有page路径的路由
    router('/:demo', function (ctx) {
        //从hash中获取页面名并加载
        site.load(ctx);
    });
    
    // 其他未命中情况
    router('*', function(){
        router.replace('/index');
    });
    
    router();
});
