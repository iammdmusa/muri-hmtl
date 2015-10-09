jQuery(document).ready(function() {
    jQuery("#owl-demo").owlCarousel({
        autoPlay: 3000,
        slideSpeed : 900,
        paginationSpeed : 700,
        singleItem:true,
        navigation:false,
        pagination: false,
        mouseDrag :true,
    });
    jQuery("#owl-featured-post").owlCarousel({
        autoPlay: 4000,
        slideSpeed : 1500,
        singleItem:true,
        navigation:true,
        navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
        pagination: false,
        mouseDrag :true,
    });

    var submitIcon = jQuery('.searchbox-icon');
    var inputBox = jQuery('.searchbox-input');
    var searchBox = jQuery('.searchbox');
    var isOpen = false;
    submitIcon.click(function(){
        if(isOpen == false){
            searchBox.addClass('searchbox-open');
            inputBox.focus();
            isOpen = true;
        } else {
            searchBox.removeClass('searchbox-open');
            inputBox.focusout();
            isOpen = false;
        }
    });
    submitIcon.mouseup(function(){
        return false;
    });
    searchBox.mouseup(function(){
        return false;
    });
        jQuery(document).mouseup(function(){
            if(isOpen == true){
                jQuery('.searchbox-icon').css('display','block');
                submitIcon.click();
            }
        });

    function buttonUp(){
        var inputVal = jQuery('.searchbox-input').val();
        inputVal = jQuery.trim(inputVal).length;
        if( inputVal !== 0){
            jQuery('.searchbox-icon').css('display','none');
        } else {
            jQuery('.searchbox-input').val('');
            jQuery('.searchbox-icon').css('display','block');
        }
    }
    jQuery(".menu-nav").affix({
        offset: {
            top: 200
        }
    });
    //var $document = $(document),
    //    $element = $('#menu-bar');
    //
    //$document.scroll(function() {
    //    if ($document.scrollTop() >= 50) {
    //        $element.stop().css({
    //            top: '0px'
    //        });
    //    } else {
    //        $element.stop().css({
    //            top: '-200px'
    //        });
    //    }
    //});
}(jQuery)); 

