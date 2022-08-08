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
                items: 3,
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

    keyboardHandler.apply();
});
