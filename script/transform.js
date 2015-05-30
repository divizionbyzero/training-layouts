/**
 * Created by hele on 26.05.2015.
 */
$(document).ready(function () {
    function transform(name, num, sel) {
        $(".select" + sel + ">.select-item:nth-of-type(" + num + ")").hover(
            function () {
                console.log($('.demo' + sel));
                $('.demo' + sel).addClass(name + num);
            },
            function () {
                $('.demo' + sel).removeClass(name + num);
            });
    }

    $('.select1>.select-item').bind('mouseover', function (e) {
        transform("rotate", $(this).data("number"), 1);
    });
    $('.select2>.select-item').mouseenter(function () {
        transform("scale", $(this).data("number"), 2);
    });
    $('.select3>.select-item').mouseenter(function () {
        transform("skew", $(this).data("number"), 3);
    });
    $('.select4>.select-item').mouseenter(function () {
        transform("translate", $(this).data("number"), 4);
    });
    $('.select5>.select-item').mouseenter(function () {
        transform("matrix", $(this).data("number"), 5);
    });

});