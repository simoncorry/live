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
    var id_active_link = $trigger.parents('li').attr('class');
    $('li.'+id_active_link).children().addClass('active');
    
    // Wait for button active state
    $trigger_child.one('webkitAnimationEnd animationend', function() {
    
      // Loading functions
      function loading_functions() {
        $('.ajax_page').addClass('remove');
        $('.ajax_page').one('webkitTransitionEnd transitionend', function() {
          load_ajax_page(url);
        });
      }
      
      // If page top do nothing else scroll up
      if (document.body.scrollTop === 0) {
        loading_functions();
      } else {
        $body.animate({scrollTop:$top.offset().top - 390}, 800, function() {
          loading_functions();
        });  
      }
      
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
      $('.ajax_page').removeClass('remove');
      
      // Allow Clicks/Scroll
      setTimeout(function(){
        $('.ajax_loader').removeClass('active');
        enable_scroll();
        initialize_waypoints();
        running = false;
      }, 1100)
      
    }
  });
}