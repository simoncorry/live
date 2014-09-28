var running = false;

$(function() { 
  $('#bio, #header').on('click', '.ajax_load', function(e) {
    e.preventDefault();
    
    // Disable Clicks/Scroll
    if (running) {return;}
    running = true;
    disable_scroll();
    
    // Global Vars
    var $body          = $('body');
    var $trigger       = $(this);
    var $trigger_child = $(this).children('.active_animation');
    var $top           = $('#main');
    var url            = $(this).attr('href');
    var $nav_lis       = $('.tooltip_nav');
    var $nav_btns      = $('.ajax_load');
    
    // Add/Remove Button Active
    $nav_lis.removeClass('btn_active');
    $nav_btns.removeClass('active');
    $trigger.parents('li').addClass('btn_active');
    $trigger.addClass('active');
    var active_item = $trigger.parents('li').attr("class").split(' ')[0];
    $('li.'+active_item).children('a').addClass('active');
    
    // Wait for button active state
    $trigger_child.one('animationend webkitAnimationEnd', function() {
        
      // Loading functions
      function loading_functions() {
        var transition = (document.transition !== undefined) ? 'webkitTransitionEnd' : 'transitionend';
        $('.ajax_page').addClass('remove remove_timer');
        $('.ajax_page').one(transition, function(e) {
            load_ajax_page(url);
        });
      }
      
      // If page top do nothing else scroll up
      var page_position = $(window).scrollTop();
      if (page_position > 0) {
        
        // Check if touch
        if (!Modernizr.touch) {
          $('html, body').animate({scrollTop: $top.offset().top - 390}, 800, function() {loading_functions();});
        } 
        else if ($(window).width() < 747) {loading_functions();} 
        else {
          $('#shroud').removeClass('active');
          $('.square_cover').removeClass('active');
          $('.typeTarget, .typeTarget .square_1, .typeTarget .square_2, .typeTarget .square_3, .typeTarget .square_4').removeClass('pauseAnimation'); 
          var offset_val
          if(isiPad === true) {offset_val = 304;} else {offset_val = 0;}
          setTimeout(function() {$('html, body').animate({scrollTop: $top.offset().top - offset_val}, 0, function() {loading_functions();});}, 1000);
        }
        
      } else {loading_functions();}
      
    });
  });   
});

// Ajax Script
var load_ajax_page = function(url) {

  // Activate loader
  $('.ajax_loader').addClass('active');
  
  // Run ajax
  $.ajax({
    url:url,
    cache:false,
    success:function(r) {
    
      // load new html
      $('.ajax_page').html(r);
      
      // Initiate page animations
      $('.ajax_page').removeClass('remove remove_timer');
      
      // Allow Clicks/Scroll
      setTimeout(function(){
        $('.ajax_loader').removeClass('active');
        enable_scroll();
        initialize_waypoints();
        if (Modernizr.touch) {
          $('#shroud').addClass('active'); 
          $('.square_cover').addClass('active'); 
          $('.typeTarget, .typeTarget .square_1, .typeTarget .square_2, .typeTarget .square_3, .typeTarget .square_4').removeClass('pauseAnimation');
        }
        running = false;
      }, 1100)
      
    }
  });
  
}