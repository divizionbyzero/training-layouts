/**
 * Created by hele on 21.05.2015.
 */
$(document).ready(function(){
    $("#but").click(function () {
        var a = $('#sel>option:selected').text();
        var b = $('#div-sel>option:selected').text();
        var t = $("#top").val()+"px";
        var bot = $("#bottom").val()+"px";
        var lef = $("#left").val()+"px";
        var rig = $("#right").val()+"px";
        $('#'+b).css({position: a, "top": t});
        $('#'+b).css({"bottom": bot, "right": rig, "left": lef});

    });
    $("li[id^='lin'],li[id^='rad'] ").hover(
        function () {
      $(this).html("<span>"+$(this).css("background-image")+"</span>");
            //$(this).css("background-color","rgba(150,150,150,0.7)");
},
        function () {
            $(this).text("");
        });
});