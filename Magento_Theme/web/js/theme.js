/**
 * Copyright © 2015 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */
define([
    'jquery',
    'mage/smart-keyboard-handler',
    'mage/mage',
    'mage/ie-class-fixer',
    'owlCarousel',
    'domReady!'
], function ($, keyboardHandler) {
    'use strict';

    if ($('body').hasClass('checkout-cart-index')) {
        if ($('#co-shipping-method-form .fieldset.rates').length > 0 && $('#co-shipping-method-form .fieldset.rates :checked').length === 0) {
            $('#block-shipping').on('collapsiblecreate', function () {
                $('#block-shipping').collapsible('forceActivate');
            });
        }
    }

    $('.cart-summary').mage('sticky', {
        container: '#maincontent'
    });

    $('.panel.header .header.links').clone().appendTo('#store\\.links');

    $('[data-action="toggle-menu"]').click(function() {

        if ($('html').hasClass('nav-open')) {
            $('html').removeClass('nav-open');
            setTimeout(function () {
                $('html').removeClass('nav-before-open');
            }, 300);
        } else {
            $('html').addClass('nav-before-open');
            setTimeout(function () {
                $('html').addClass('nav-open');
            }, 42);
        }
    }) ;
    var item_carousel = $('.owl-brand-style2, .block.crosssell .product-items, .block.upsell .product-items, .block.related .product-items, .block-tab-products .product-items, .block-blog .post-list, .owl-slide-style1, .owl-slide-style2, .owl-slide-style3, .block-new-style1 .block-new-products .product-items, .block-sales-style1 .product-items, .block-sales-style2 .product-items');
    item_carousel.addClass('owl-carousel owl-theme');
    $(".block-blog .post-list").owlCarousel({
        items : 3,
        responsiveClass: true,
        responsive:{
            0:{
                items: 1,
            },
            320:{
                items: 1,
            },
            768:{
                items: 2,
            },
            1024:{
                items: 4,
            }
        }
    });
    $(".owl-slide-style1, .owl-slide-style2, .owl-slide-style3").owlCarousel({
        items: 1,
        responsiveClass: true,
        autoplay:true,
        autoplayTimeout:4000,
        autoplayHoverPause:true,
        autoplaySpeed: 400,
        singleItem : true,
        nav: true,
        autoHeight:true,
        navText : ["",""],
        loop: true,
    });
    $(".block-new-style1 .block-new-products .product-items").owlCarousel({
        nav: true,
        navText : ["",""],
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        autoplaySpeed: 500,
        items : 4,
        responsiveClass: true,
        loop: true,
        responsive:{
            0:{
                items: 2,
            },
            479:{
                items: 2,
            },
            768:{
                items: 3,
            }
        }
    });
    $(".block-sales-style1 .product-items").owlCarousel({
        nav:true,
        navText : ["",""],
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        autoplaySpeed: 500,
        items : 2,
        responsiveClass: true,
        loop: true,
    });
    /*

    */
    $(".block-sales-style2 .product-items").owlCarousel({
        nav:true,
        navText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        autoplaySpeed: 500,
        loop: true,
        items : 4,
        responsiveClass: true,
        responsive:{
            0:{
                items: 1,
            },
            479:{
                items: 2,
            },
            768:{
                items: 3,
            },
        }
    });
    $(".block-tab-products .product-items").owlCarousel({
        dots: false,
        nav:true,
        navText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        autoplaySpeed: 500,
        loop: true,
        items : 4,
        responsiveClass: true,
        responsive:{
            0:{
                items: 2,
            },
            768:{
                items: 3,
            }
        }
    });

    $(".block.upsell .product-items, .block.related .product-items").owlCarousel({
        nav:true,
        navText : ["",""],
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        autoplaySpeed: 500,
        loop: true,
        items : 4,
        responsiveClass: true,
        responsive:{
            0:{
                items: 2,
            },
            768:{
                items: 3,
            }
        }
    });
    $(".block.crosssell .product-items").owlCarousel({
        nav:true,
        navText : ["",""],
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        autoplaySpeed: 500,
        items : 5,
        loop: true,
        responsiveClass: true,
        responsive:{
            0:{
                items: 2,
            },
            768:{
                items: 3,
            }
        }
    });
    $(".owl-brand-style2").owlCarousel({
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        autoplaySpeed: 500,
        items : 6,
        loop: true,
        responsiveClass: true,
        responsive:{
            0:{
                items: 3,
            },
            768:{
                items: 4,
            },
            980:{
                items: 5,
            }
        }
    });

    $( ".megamenu" ).hover(
        function() {
            $( this ).children(".megamenu-content").css( "display" ,"block");
        }, function() {
            $( this ).children(".megamenu-content").css( "display" ,"none"); ;
        }
    );

    $('.input-number').focusin(function(){
       $(this).data('oldValue', $(this).val());
    });
    $('.input-number').change(function() {

        var minValue =  parseInt($(this).attr('min'));
        var maxValue =  parseInt($(this).attr('maxlength'));
        var valueCurrent = parseInt($(this).val());

        var name = $(this).attr('name');
        if(valueCurrent >= minValue) {
            $(".btn-number[data-type='minus'][data-field='"+name+"']").removeAttr('disabled')
        } else {
            alert('Sorry, the minimum value was reached');
            $(this).val($(this).data('oldValue'));
        }
        if(valueCurrent <= maxValue) {
            $(".btn-number[data-type='plus'][data-field='"+name+"']").removeAttr('disabled')
        } else {
            alert('Sorry, the maximum value was reached');
            $(this).val($(this).data('oldValue'));
        }


    });
    $(".input-number").keydown(function (e) {

            if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 190]) !== -1 ||

                (e.keyCode == 65 && e.ctrlKey === true) ||

                (e.keyCode >= 35 && e.keyCode <= 39)) {

                     return;
            }

            if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
                e.preventDefault();
            }
    });
    $(".owl-brand-style1, .owl-client-style1, .block-teams").addClass('owl-carousel owl-theme');
    $(".block-teams").owlCarousel({
        nav : false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        autoplaySpeed: 1000,
        items : 6,
        loop: true,
        responsiveClass: true,
        responsive:{
            0:{
                items: 3,
            },
            768:{
                items: 4,
            }
        }
    });
    $(".owl-client-style1").owlCarousel({
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        autoplaySpeed: 1000,
        items: 1,
        dots: true,
        nav: false,
        responsiveClass: true,
        loop: true,
    });
    $(".owl-brand-style1").owlCarousel({
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        autoplaySpeed: 1000,
        items : 3,
        responsiveClass: true,
        nav: false,
        dots: false,
        loop: true,
    });
    $(".footer-columns .widget ").click(function(){
        $(this).children(".block-content").slideDown();
    });

    keyboardHandler.apply();
});
