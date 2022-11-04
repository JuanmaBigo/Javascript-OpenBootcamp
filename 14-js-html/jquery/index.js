// $("selector").accion()
// $("h1").hide()

//$() => {    // o
$(document).ready(() => {
    // Selectores:
    // id="el-1" => "#el-1"
    // class= "el-1" => ".el-1"
    //    $("#el-1").hide()
    $(".hide-btn").click(() => {
        $("h1").fadeOut();
    });

    $(".show-btn").click(() => {
        $("h1").fadeIn();
    });

    $("li").click(() => {
        $("h1").css({ color:"red" })
    })

    $("li").dblclick(() => {
        $("h1").css({ color:"blue" })
    })

    $(".new-element").click(() => {
        $("ul").append("<li>New Element</li>")
    })

    $(".new-element").click(() => {
        $("ul").prepend("<li>New Element</li>")
    })

    $("li").mouseenter((elem) => {
        elem.target.style.color = "red"
    })

    $("li").mouseleave((elem) => {
        elem.target.style.color = "black"
    })

});
