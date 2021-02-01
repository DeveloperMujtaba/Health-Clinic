"use strict";
// Setup a Var for our Safe Code (Prevent Collisions)
var MyApp = MyApp || {};

// Prevent console.log exceptions
if(typeof( console ) === 'undefined') {
    var console = {};
    console.log = console.error = console.info = console.debug = console.warn = console.trace = function() {};
}

// Safe IFFE
(function(my){

    var userAgent = window.navigator.userAgent;

    // Setup browser environment variables (IIFE)
    my.browser = (function(){
        return {
        	'path':      location.pathname,
            
            // OS Detection
            'isIOS':     (userAgent.match(/iP(hone||od||ad)/) !== null),
            'isAndroid': (userAgent.match(/Android/) !== null),
            'isWindows': (userAgent.match(/Windows/) !== null),

            // Browser Detection
            'isFirefox': (userAgent.match(/Firefox/) !== null),
            'isChrome':  (userAgent.match(/Chrome/) !== null)
        }

    }());

    if($ === undefined) {
        var $ = jQuery;
    }

    var navToggle     = $('#nav-toggle'),
        navTarget     = $('#menu'),
        contactToggle = $('#contact-toggle'),
        contactTarget = $('#contact-target'),
        contactActive = 0;

    navToggle.click(function(){
        navTarget.toggleClass('shown');
    });

    contactToggle.click(function(){
        contactTarget.toggleClass('shown');
        if(contactActive === 0) {
            contactActive = 1;
            contactToggle.text('Close');
        } else {
            contactActive = 0;
            contactToggle.text('Contact Us');
        }
    });
}(MyApp)); // Run the Function

if($ === undefined) {
    var $ = jQuery;
}
$(document).ready(function(){
    var startForm     = $('#start-form'),
        formSlider    = $('#form-slider'),
        contentSlider = $('#content-slider'),
        formNext      = $('.form-next'),
        ticketType    = $('#ticket_type'),
        otherType     = $('#other_type'),
        ticketField   = $('#ticket'),
        formLast      = $('.form-last');
        //homeForm      = $('#home-form'),
        //homeSubmit    = $('#home-submit');

    $.validate({
        lang: 'en'
    });

    $('.equal-height').matchHeight();

    $('.carousel').slick({
        arrows: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 5000,
        //setting-name: setting-value
    });

    startForm.click(function(){
        setTimeout(function(){
            contentSlider.cycle('destroy');
        }, 500);
    });

    formNext.click(function(){
        var value = $(this).find('input').val();
        formSlider.cycle('goto', 2);
        ticketField.val('I have a '+ value + ' ticket');
    });

    otherType.change(function(){
        var value = $(this).val();
        formSlider.cycle('goto', 2);
        ticketField.val('I have a '+value+' ticket');
    });

    formLast.click(function(){
        formSlider.cycle('goto', 3);
    });

    $('.disable-form').click(function(){
        $('.disable-form-toggle').css({
            'display': 'none'
        });
        $('.disable-form-text').html('Please Call Us to Get Started');
    });

    // $('.click-call').click(function(event){
    //     event.preventDefault();
    //     event.stopPropagation();
    //     var number = $(this).text().replace('-', ''),
    //         friendlyNumber = $(this).attr('data-tel-friendly');
    //     if (typeof friendlyNumber !== typeof undefined && friendlyNumber !== false) {
    //         if(MyApp.browser.isIOS || MyApp.browser.isAndroid) {
    //             window.open('tel:'+friendlyNumber, '_blank');
    //         }
    //     } else {
    //         if(MyApp.browser.isIOS || MyApp.browser.isAndroid) {
    //             window.open('tel:'+number, '_blank');
    //         }
    //     }

    // });

    $("#start-shopping-cart").click(function(){
           window.location.href = "https://www.ticketclinic.com/shopping_cart/index.php/init";
    });
        
    $('.locations-modal').click(function(e){
        e.preventDefault();
        $('#locations-modal').toggleClass('shown');
    });

    $('.close-modal').click(function(e){
        e.preventDefault();
        $('#locations-modal').toggleClass('shown');
    });

    $('.region-chooser').click(function(e) {
        e.preventDefault();
        var caLocation = $(this).attr('data-ca-region');
        $.cookie('ca_region', caLocation, { expires: 5, path: '/' });
        location.reload();
    });

    $(".img-liquid").imgLiquid();
});


                (function($) {

                /*
                *  new_map
                *
                *  This function will render a Google Map onto the selected jQuery element
                *
                *  @type    function
                *  @date    8/11/2013
                *  @since   4.3.0
                *
                *  @param   $el (jQuery element)
                *  @return  n/a
                */

                function new_map( $el ) {
                    
                    // var
                    var $markers = $el.find('.marker');
                    
                    
                    // vars
                    var args = {
                        zoom        : 16,
                        center      : new google.maps.LatLng(0, 0),
                        mapTypeId   : google.maps.MapTypeId.ROADMAP
                    };
                    
                    
                    // create map               
                    var map = new google.maps.Map( $el[0], args);
                    
                    
                    // add a markers reference
                    map.markers = [];
                    
                    
                    // add markers
                    $markers.each(function(){
                        
                        add_marker( $(this), map );
                        
                    });
                    
                    
                    // center map
                    center_map( map );
                    
                    
                    // return
                    return map;
                    
                }

                /*
                *  add_marker
                *
                *  This function will add a marker to the selected Google Map
                *
                *  @type    function
                *  @date    8/11/2013
                *  @since   4.3.0
                *
                *  @param   $marker (jQuery element)
                *  @param   map (Google Map object)
                *  @return  n/a
                */

                function add_marker( $marker, map ) {

                    // var
                    var latlng = new google.maps.LatLng( $marker.attr('data-lat'), $marker.attr('data-lng') );

                    // create marker
                    var marker = new google.maps.Marker({
                        position    : latlng,
                        map         : map
                    });

                    // add to array
                    map.markers.push( marker );

                    // if marker contains HTML, add it to an infoWindow
                    if( $marker.html() )
                    {
                        // create info window
                        var infowindow = new google.maps.InfoWindow({
                            content     : $marker.html()
                        });

                        // show info window when marker is clicked
                        google.maps.event.addListener(marker, 'click', function() {

                            infowindow.open( map, marker );

                        });
                    }

                }

                /*
                *  center_map
                *
                *  This function will center the map, showing all markers attached to this map
                *
                *  @type    function
                *  @date    8/11/2013
                *  @since   4.3.0
                *
                *  @param   map (Google Map object)
                *  @return  n/a
                */

                function center_map( map ) {

                    // vars
                    var bounds = new google.maps.LatLngBounds();

                    // loop through all markers and create bounds
                    $.each( map.markers, function( i, marker ){

                        var latlng = new google.maps.LatLng( marker.position.lat(), marker.position.lng() );

                        bounds.extend( latlng );

                    });

                    // only 1 marker?
                    if( map.markers.length == 1 )
                    {
                        // set center of map
                        map.setCenter( bounds.getCenter() );
                        map.setZoom( 16 );
                    }
                    else
                    {
                        // fit to bounds
                        map.fitBounds( bounds );
                    }

                }

                /*
                *  document ready
                *
                *  This function will render each map when the document is ready (page has loaded)
                *
                *  @type    function
                *  @date    8/11/2013
                *  @since   5.0.0
                *
                *  @param   n/a
                *  @return  n/a
                */
                // global var
                var map = null;

                $(document).ready(function(){

                    $('.acf-map').each(function(){

                        // create map
                        map = new_map( $(this) );

                    });

                });

                })(jQuery);