document.addEventListener('DOMContentLoaded', function(){
    var trigger = new ScrollTrigger({
        toggle: {
            visible: 'invisible',
            hidden: 'visible'
        },
        offset: {
            x: 0,
            y: 0
        },
        addHeight: true,
        once: false
    }, document.body, window);
});