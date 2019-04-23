document.addEventListener('DOMContentLoaded', function(){
    var trigger = new ScrollTrigger({
        toggle: {
            visible: 'visible',
            hidden: 'invisible'
        },
        offset: {
            x: 0,
            y: 0
        },
        addHeight: false,
        once: true
    }, document.body, window);
});