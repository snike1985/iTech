"use strict";
( function(){

    $(function(){

        $('.contact').each( function() {
            new Contact( $(this) );
        } );

        $('.infrastructure').each( function() {
            new Infrastructure( $(this) );
        } );

        $('.menu').each( function() {
            new Menu( $(this) );
        } );

        $('.shareholders').each( function() {
            new Shareholders( $(this) );
        } );

        $('.scroll-bottom').each( function() {
            new ScrollBottom( $(this) );
        } );

    });

    var Contact = function(obj) {

        //private properties
        var _obj = obj,
            _map = null,
            _mapContainer = _obj.find('.contact__map'),
            _mapCenter = _mapContainer.data('center').slice(','),
            _centerLatLng = {lat: _mapCenter[0], lng: _mapCenter[1]},
            _markerImage = _mapContainer.data('marker');

        //private methods
        var _addEvents = function() {

            $(window).on({
                'resize': function () {
                    _map.setCenter(_centerLatLng);
                }
            });

            },
            _initMap = function() {
                _map = new google.maps.Map(_mapContainer[0], {
                    zoom: 17,
                    center: _centerLatLng,
                    disableDefaultUI: true,
                    styles: [
                        {
                            "featureType": "poi",
                            "elementType": "all",
                            "stylers": [
                                {
                                    "hue": "#000000"
                                },
                                {
                                    "saturation": -100
                                },
                                {
                                    "lightness": -100
                                },
                                {
                                    "visibility": "off"
                                }
                            ]
                        },
                        {
                            "featureType": "poi",
                            "elementType": "all",
                            "stylers": [
                                {
                                    "hue": "#000000"
                                },
                                {
                                    "saturation": -100
                                },
                                {
                                    "lightness": -100
                                },
                                {
                                    "visibility": "off"
                                }
                            ]
                        },
                        {
                            "featureType": "administrative",
                            "elementType": "all",
                            "stylers": [
                                {
                                    "hue": "#000000"
                                },
                                {
                                    "saturation": 0
                                },
                                {
                                    "lightness": -100
                                },
                                {
                                    "visibility": "off"
                                }
                            ]
                        },
                        {
                            "featureType": "road",
                            "elementType": "labels",
                            "stylers": [
                                {
                                    "hue": "#ffffff"
                                },
                                {
                                    "saturation": -100
                                },
                                {
                                    "lightness": 100
                                },
                                {
                                    "visibility": "off"
                                }
                            ]
                        },
                        {
                            "featureType": "water",
                            "elementType": "labels",
                            "stylers": [
                                {
                                    "hue": "#000000"
                                },
                                {
                                    "saturation": -100
                                },
                                {
                                    "lightness": -100
                                },
                                {
                                    "visibility": "off"
                                }
                            ]
                        },
                        {
                            "featureType": "road.local",
                            "elementType": "all",
                            "stylers": [
                                {
                                    "hue": "#ffffff"
                                },
                                {
                                    "saturation": -100
                                },
                                {
                                    "lightness": 100
                                },
                                {
                                    "visibility": "on"
                                }
                            ]
                        },
                        {
                            "featureType": "water",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "hue": "#ffffff"
                                },
                                {
                                    "saturation": -100
                                },
                                {
                                    "lightness": 100
                                },
                                {
                                    "visibility": "on"
                                }
                            ]
                        },
                        {
                            "featureType": "transit",
                            "elementType": "labels",
                            "stylers": [
                                {
                                    "hue": "#000000"
                                },
                                {
                                    "saturation": 0
                                },
                                {
                                    "lightness": -100
                                },
                                {
                                    "visibility": "off"
                                }
                            ]
                        },
                        {
                            "featureType": "landscape",
                            "elementType": "labels",
                            "stylers": [
                                {
                                    "hue": "#000000"
                                },
                                {
                                    "saturation": -100
                                },
                                {
                                    "lightness": -100
                                },
                                {
                                    "visibility": "off"
                                }
                            ]
                        },
                        {
                            "featureType": "road",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "hue": "#bbbbbb"
                                },
                                {
                                    "saturation": -100
                                },
                                {
                                    "lightness": 26
                                },
                                {
                                    "visibility": "on"
                                }
                            ]
                        },
                        {
                            "featureType": "landscape",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "hue": "#dddddd"
                                },
                                {
                                    "saturation": -100
                                },
                                {
                                    "lightness": -3
                                },
                                {
                                    "visibility": "on"
                                }
                            ]
                        }
                    ]
                });

                var image = new google.maps.MarkerImage(
                    _markerImage,
                    new google.maps.Size(48,58),
                    new google.maps.Point(0,0),
                    new google.maps.Point(24,58)
                );

                var marker = new google.maps.Marker({
                    position: _centerLatLng,
                    icon: image,
                    map: _map
                });

                marker.setMap(_map);
            },
            _init = function() {
                _addEvents();
                _initMap();
            };

        //public properties

        //public methods

        _init();
    };

    var Infrastructure = function(obj) {

        //private properties
        var _obj = obj,
            _sliders = _obj.find('.infrastructure__slider');

        //private methods
        var _addEvents = function() {

            $(window).on({
                'resize': function () {

                }
            });

            },
            _initSlider = function(wrap) {
                var container = $(wrap).find('.swiper-container'),
                    pagination = $(wrap).find('.swiper-pagination'),
                    next = $(wrap).find('.swiper-button-next'),
                    prev = $(wrap).find('.swiper-button-prev'),
                    swiper = new Swiper(container, {
                        loop: true,
                        pagination: {
                            el: pagination,
                            clickable: true,
                        },
                        navigation: {
                            nextEl: next,
                            prevEl: prev,
                        },
                });
            },
            _init = function() {
                _addEvents();

                for ( var i = 0 ; i < _sliders.length; i++ ) {
                    _initSlider(_sliders[i])
                }
            };

        //public properties

        //public methods

        _init();
    };

    var Menu = function(obj) {

        //private properties
        var _obj = obj,
            _btn = _obj.find( '.menu__btn' ),
            _wrap = _obj.find( '.menu__wrap' ),
            _scrollConteiner = $( 'html' ),
            _body = $('body');

        //private methods
        var _addEvents = function() {

                _btn.on({
                    'click': function() {

                        if ( !_obj.hasClass( 'active' ) ) {
                            _showMenu();
                        } else {
                            _hideMenu();
                        }
                    }
                });

            },
            _getScrollWidth = function (){
                var scrollDiv = document.createElement( 'div'),
                    scrollBarWidth;

                scrollDiv.className = 'scrollbar-measure';

                document.body.appendChild( scrollDiv );

                scrollBarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;

                document.body.removeChild(scrollDiv);

                return scrollBarWidth;
            },
            _showMenu = function() {
                _obj.addClass( 'active' );
                _scrollConteiner.css( {
                    overflowY: 'hidden',
                    paddingRight: _getScrollWidth()
                } );
                _body.addClass('fixed');
            },
            _hideMenu = function() {
                _obj.removeClass( 'active' );
                _wrap.css( {
                    overflowY: 'hidden'
                } );
                _scrollConteiner.css( {
                    overflowY: 'auto',
                    paddingRight: 0
                } );
                _body.removeClass('fixed');
            },
            _init = function() {
                _addEvents();
            };

        //public properties

        //public methods

        _init();
    };

    var Shareholders = function(obj) {

        //private properties
        var _obj = obj,
        _slider = _obj.find('.swiper-container'),
        _pagination = _obj.find('.swiper-pagination'),
        _swiper = null;

        //private methods
        var _addEvents = function() {

                $(window).on({
                    'load': function() {

                    }
                });

            },
            _initSlider = function() {
                _swiper = new Swiper(_slider, {
                    slidesPerView: 5,
                    spaceBetween: 0,
                    centeredSlides: true,
                    loop: true,
                    pagination: {
                        el: _pagination,
                        clickable: true
                    },
                    breakpoints: {
                        480: {
                            slidesPerView: 1
                        },
                        640: {
                            slidesPerView: 2
                        },
                        992: {
                            slidesPerView: 3
                        },
                        1200: {
                            slidesPerView: 4
                        }
                    }
                });
            },
            _init = function() {
                _addEvents();
                _initSlider();
            };

        //public properties

        //public methods

        _init();
    };

    var ScrollBottom = function(obj) {

        //private properties
        var _obj = obj,
            _scrollBtn = _obj.find('.scroll-bottom__btn'),
            _container = $('html, body');

        //private methods
        var _addEvents = function() {

                _scrollBtn.on({
                    'click': function() {
                        var way = _obj.offset().top + _obj.outerHeight(),
                            curScroll = $(window).scrollTop(),
                            scrollingTime = 500*(way - curScroll)/way;

                        _container.animate({
                            scrollTop: way
                        }, scrollingTime);
                    }
                });

            },
            _init = function() {
                _addEvents();
            };

        //public properties

        //public methods

        _init();
    };

} )();