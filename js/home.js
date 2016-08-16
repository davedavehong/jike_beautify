/**
 * Created by davedavehong on 2015/9/3.
 */

jQuery(function () {
    'use strict';
    // ==========================================================================
    //   Header js
    // ==========================================================================
    $(".navbar-fixed-bottom").on("click", "li", function () {
        $(".navbar-fixed-bottom").find("li").removeClass("active");
        $(this).addClass("active")
    })
});