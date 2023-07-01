function include(url) {
    var script = document.createElement('script');
    script.src = url;
    document.getElementsByTagName('body')[0].appendChild(script);
}

include('./js/header.js');
include('./js/arrivals.js');
include('./js/ban.js');
include('./js/categories.js');
include('./js/trending.js');
include('./js/sale.js');
include('./js/advantage.js');
include('./js/brands.js');
include('./js/subscribe.js');
