import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'asclepius';
}
/*$.fn.infiniteCarousel = function (config) {
    config = $.extend({
        itemsPerMove: 2,
        duration: 4000,
        vertical: false
    }, config);

    var viewportEl = this.find('.viewport'), listEl = viewportEl.find('.list');
    var first = listEl.children(":first"), last = listEl.children(":last");

    var distance, prevProp, nextProp;
    if (config.vertical) {
        distance = Math.max(first.outerHeight(true), last.outerHeight(true)) * config.itemsPerMove;
        prevProp = { 'scrollTop': "-=" + distance };
        nextProp = { 'scrollTop': distance };
    } else {
        distance = Math.max(first.outerWidth(true), last.outerWidth(true)) * config.itemsPerMove;
        prevProp = { 'scrollLeft': "-=" + distance };
        nextProp = { 'scrollLeft': '+=' + distance };
    }

    function move(config) {
        if (config.dir === 'next') {
            viewportEl.stop().animate(nextProp, {
                duration: config.duration,
                complete: function () {
                    config.vertical ? viewportEl.scrollTop(0) : viewportEl.scrollLeft(0);
                    repeatRun(function () {
                        listEl.children(":last").after(listEl.children(":first"));
                    }, config.itemsPerMove);
                }
            });
        }

        if (config.dir === 'pre') {
            for (var i = 0; i < config.itemsPerMove; i++) {
                listEl.prepend(listEl.children(":last"));
            }
            viewportEl[config.vertical ? 'scrollTop' : 'scrollLeft'](distance)
                .stop().animate(prevProp, {
                    duration: config.duration
                });
        }
    }

    function repeatRun(func, times) {
        for (var i = 0; i < times; i++) {
            func();
        }
    }
    

    function mover(){
        x=3;
        move($.extend(config, {
            dir: "pre"
        }));
        setTimeout(mover,x*1000);
    };
    mover();


    return this;
};

$('.infinite-carousel').infiniteCarousel({
    itemsPerMove: 1,
    duration: 3000,
    vertical: true
});

*/