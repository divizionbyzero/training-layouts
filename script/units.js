/**
 * Created by hele on 21.05.2015.
 */
$(document).ready(function () {

    $('input[type="text"]').change(function () {
        var idInput = $(this).attr('id');
        $('.' + idInput).css('font-size', $(this).val() + idInput);
        if (idInput == 'percent') {
            $('.percent').css('font-size', $(this).val() + '%');
        }
    });

});