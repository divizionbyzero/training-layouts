$(document).ready(function () {
    $(".loadjson").click(function () {
        $.ajax({
            url: "table.json",
            dataType: "json",
            data: {get_param: 'value'},
            success: function (data) {
                $.each(data, function () {
                    $("tbody").append("<tr><td>" + this.name + "</td><td>" + this.surname + "</td><td>" + this.id + "</td><td>" + this.city + "</td></tr>");
                })
            }
        })
    })
});