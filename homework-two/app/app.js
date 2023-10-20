import { evalPage }from "../model/model.js";

function changeRoute(){
    let hashTag = window.location.hash;
    let pageID = hashTag.replace("#", "");
    //console.log(hashTag + " " + pageID);
    evalPage(pageID);
}

function initURLListener(){
    $(window).on("hashchange", changeRoute);
    changeRoute();
}

function initListeners() {
    $(".bars").click(function (e) {
        $(".bars").toggleClass("active");
        $(".links").toggleClass("active");
    })

    $(".navHolder a").click(function (e) {
        $(".bars").removeClass("active");
        $(".links").removeClass("active");
    })
}

$(document).ready(function () {
    initURLListener();
    initListeners();
});
