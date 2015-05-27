/**
 * Created by hele on 26.05.2015.
 */
$(document).ready(function () {
    function transform(name, num, sel) {
        $(".select" + sel + ">.select-item:nth-of-type(" + num + ")").hover(
            function () {
                $('.demo' + sel).addClass(name + num);
            },
            function () {
                $('.demo' + sel).removeClass(name + num);
            });
    }

    //function scaleTransform(num) {
    //    $('.select2>.select-item:nth-child('+num+')').hover(
    //        function() {
    //            $('.demo2').addClass('scale'+num);
    //        },
    //        function () {
    //            $('.demo2').removeClass('scale'+num);
    //        });
    //}
    //function skewTransform(num) {
    //    $('.select3>.select-item:nth-child('+num+')').hover(
    //        function() {
    //            $('.demo3').addClass('skew'+num);
    //        },
    //        function () {
    //            $('.demo3').removeClass('skew'+num);
    //        });
    //}
    $('.select1>.select-item').mouseenter(function () {
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