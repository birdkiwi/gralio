function fixedHeader() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        document.getElementsByClassName("js-main-header-fixed")[0].classList.add('active');
    } else {
        document.getElementsByClassName("js-main-header-fixed")[0].classList.remove('active');
    }
}

window.onscroll = function() {
    fixedHeader();
};

fixedHeader();