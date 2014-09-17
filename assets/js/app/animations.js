// /// HOME ANIMATIONS /// //


/* /// CLOUDS /// */

var cloud_animations = function() {
	
	// Vars
	var $cloud_large_1  = $('div.cloud_large_1');
	var $cloud_large_2  = $('div.cloud_large_2');
	var $cloud_large_3  = $('div.cloud_large_3');
	var $cloud_large_4  = $('div.cloud_large_4');
	var $cloud_medium_1 = $('div.cloud_medium_1');
	var $cloud_medium_2 = $('div.cloud_medium_2');
	var $cloud_medium_3 = $('div.cloud_medium_3');
	var $cloud_medium_4 = $('div.cloud_medium_4');
	var $cloud_medium_5 = $('div.cloud_medium_5');
	var $cloud_small_1  = $('div.cloud_small_1');
	var $cloud_small_2  = $('div.cloud_small_2');
	
	// Create Large Cloud Array
	var clouds_large     = [];
    var get_clouds_large = $('div.cloud_types_large div.cloud_type_large').each(function() {clouds_large.push($(this).css('background-image'));});
    
    // Create Medium Cloud Array
	var clouds_medium     = [];
    var get_clouds_medium = $('div.cloud_types_medium div.cloud_type_medium').each(function() {clouds_medium.push($(this).css('background-image'));});
    
    // Create Small Cloud Array
	var clouds_small     = [];
    var get_clouds_small = $('div.cloud_types_small div.cloud_type_small').each(function() {clouds_small.push($(this).css('background-image'));});
	
	// Functions
	
	// Large
	function cloud_large_1() {
	  var z_index          = Math.floor(Math.random() * (999 - 5 + 1)) + 5;
	  var opacity          = Math.floor(Math.random() * (9 - 6 + 1)) + 6;
	  var rand_x_cord      = Math.floor(Math.random() * (10 - 5 + 1)) + 5;
	  var rand_y_cord      = Math.floor(Math.random() * (15 - 5 + 1)) + 5;
	  var rand_cloud_large = clouds_large[Math.floor(Math.random()*clouds_large.length)];
	  $cloud_large_1.css({
	    'z-index'          : z_index,
	    opacity            : '0.'+opacity,
	  	'background-image' : rand_cloud_large,
	    left : rand_x_cord + '%',
	    top  : rand_y_cord + '%'
	  });
	}
	
	function cloud_large_2() {
	  var z_index          = Math.floor(Math.random() * (999 - 5 + 1)) + 5;
	  var opacity          = Math.floor(Math.random() * (9 - 6 + 1)) + 6;
	  var rand_x_cord      = Math.floor(Math.random() * (10 - 5 + 1)) + 5;
	  var rand_y_cord      = Math.floor(Math.random() * (25 - 15 + 1)) + 15;
	  var rand_cloud_large = clouds_large[Math.floor(Math.random()*clouds_large.length)];
	  $cloud_large_2.css({
	    'z-index'          : z_index,
	    opacity            : '0.'+opacity,
	  	'background-image' : rand_cloud_large,
	    right              : rand_x_cord + '%',
	    top                : rand_y_cord + '%'
	  });
	}
	
	function cloud_large_3() {
	  var z_index          = Math.floor(Math.random() * (999 - 5 + 1)) + 5;
	  var opacity          = Math.floor(Math.random() * (9 - 6 + 1)) + 6;
	  var rand_x_cord      = Math.floor(Math.random() * (25 - 15 + 1)) + 15;
	  var rand_y_cord      = Math.floor(Math.random() * (30 - 20 + 1)) + 20;
	  var rand_cloud_large = clouds_large[Math.floor(Math.random()*clouds_large.length)];
	  $cloud_large_3.css({
	    'z-index'          : z_index,
	    opacity            : '0.'+opacity,
	  	'background-image' : rand_cloud_large,
	    right              : rand_x_cord + '%',
	    bottom             : rand_y_cord + '%'
	  });
	}
	
	function cloud_large_4() {
	  var z_index          = Math.floor(Math.random() * (999 - 5 + 1)) + 5;
	  var opacity          = Math.floor(Math.random() * (9 - 6 + 1)) + 6;
	  var rand_x_cord      = Math.floor(Math.random() * (55 - 45 + 1)) + 45;
	  var rand_cloud_large = clouds_large[Math.floor(Math.random()*clouds_large.length)];
	  $cloud_large_4.css({
	    'z-index'          : z_index,
	    opacity            : '0.'+opacity,
	  	'background-image' : rand_cloud_large,
	    left               : rand_x_cord + '%'
	  });
	}
	
	// Medium
	function cloud_medium_1() {
	  var z_index           = Math.floor(Math.random() * (999 - 5 + 1)) + 5;
	  var opacity          = Math.floor(Math.random() * (9 - 6 + 1)) + 6;
	  var rand_x_cord       = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
	  var rand_y_cord       = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
	  var rand_cloud_medium = clouds_medium[Math.floor(Math.random()*clouds_medium.length)];
	  $cloud_medium_1.css({
	    'z-index'          : z_index,
	    opacity            : '0.'+opacity,
	  	'background-image' : rand_cloud_medium,
	    right              : rand_x_cord + '%',
	    bottom             : rand_y_cord + '%'
	  });
	}
	
	function cloud_medium_2() {
	  var z_index           = Math.floor(Math.random() * (999 - 5 + 1)) + 5;
	  var opacity          = Math.floor(Math.random() * (9 - 6 + 1)) + 6;
	  var rand_x_cord       = Math.floor(Math.random() * (30 - 20 + 1)) + 20;
	  var rand_y_cord       = Math.floor(Math.random() * (50 - 40 + 1)) + 40;
	  var rand_cloud_medium = clouds_medium[Math.floor(Math.random()*clouds_medium.length)];
	  $cloud_medium_2.css({
	    'z-index'          : z_index,
	    opacity            : '0.'+opacity,
	  	'background-image' : rand_cloud_medium,
	    left               : rand_x_cord + '%',
	    bottom             : rand_y_cord + '%'
	  });
	}
	
	function cloud_medium_3() {
	  var z_index           = Math.floor(Math.random() * (999 - 5 + 1)) + 5;
	  var opacity          = Math.floor(Math.random() * (9 - 6 + 1)) + 6;
	  var rand_y_cord       = Math.floor(Math.random() * (40 - 35 + 1)) + 35;
	  var rand_cloud_medium = clouds_medium[Math.floor(Math.random()*clouds_medium.length)];
	  $cloud_medium_3.css({
	    'z-index'          : z_index,
	    opacity            : '0.'+opacity,
	  	'background-image' : rand_cloud_medium,
	    top                : rand_y_cord + '%'
	  });
	}
	
	function cloud_medium_4() {
	  var z_index           = Math.floor(Math.random() * (999 - 5 + 1)) + 5;
	  var opacity          = Math.floor(Math.random() * (9 - 6 + 1)) + 6;
	  var rand_y_cord       = Math.floor(Math.random() * (25 - 20 + 1)) + 20;
	  var rand_cloud_medium = clouds_medium[Math.floor(Math.random()*clouds_medium.length)];
	  $cloud_medium_4.css({
	    'z-index'          : z_index,
	    opacity            : '0.'+opacity,
	  	'background-image' : rand_cloud_medium,
	    bottom             : rand_y_cord + '%'
	  });
	}
	
	function cloud_medium_5() {
	  var z_index           = Math.floor(Math.random() * (999 - 5 + 1)) + 5;
	  var opacity          = Math.floor(Math.random() * (9 - 6 + 1)) + 6;
	  var rand_y_cord       = Math.floor(Math.random() * (45 - 40 + 1)) + 40;
	  var rand_cloud_medium = clouds_medium[Math.floor(Math.random()*clouds_medium.length)];
	  $cloud_medium_5.css({
	    'z-index'          : z_index,
	    opacity            : '0.'+opacity,
	  	'background-image' : rand_cloud_medium,
	    bottom             : rand_y_cord + '%'
	  });
	}
	
	// Small
	function cloud_small_1() {
	  var z_index          = Math.floor(Math.random() * (999 - 5 + 1)) + 5;
	  var opacity          = Math.floor(Math.random() * (9 - 6 + 1)) + 6;
	  var rand_y_cord      = Math.floor(Math.random() * (25 - 15 + 1)) + 15;
	  var rand_cloud_small = clouds_small[Math.floor(Math.random()*clouds_small.length)];
	  $cloud_small_1.css({
	    'z-index'          : z_index,
	    opacity            : '0.'+opacity,
	  	'background-image' : rand_cloud_small,
	    bottom             : rand_y_cord + '%'
	  });
	}
	function cloud_small_2() {
	  var z_index          = Math.floor(Math.random() * (999 - 5 + 1)) + 5;
	  var opacity          = Math.floor(Math.random() * (9 - 6 + 1)) + 6;
	  var rand_y_cord      = Math.floor(Math.random() * (25 - 15 + 1)) + 15;
	  var rand_cloud_small = clouds_small[Math.floor(Math.random()*clouds_small.length)];
	  $cloud_small_2.css({
	  	'z-index'          : z_index,
	  	opacity            : '0.'+opacity,
	  	'background-image' : rand_cloud_small,
	    top                : rand_y_cord + '%'
	  });
	}
	
	// Load
	cloud_large_1();
	cloud_large_2();
	cloud_large_3();
	cloud_large_4();
	cloud_medium_1();
	cloud_medium_2();
	cloud_medium_3();
	cloud_medium_4();
	cloud_medium_5();
	cloud_small_1();
	cloud_small_2();
	    
    $cloud_medium_3.addClass('cloud_medium_3_animation');
    $cloud_medium_4.addClass('cloud_medium_4_animation');
    $cloud_small_1.addClass('cloud_small_1_animation');
    $cloud_small_2.addClass('cloud_small_2_animation');
	
}


/* /// SHIPS /// */

// LOOP SHIPS
var ships_loop_right = function() {
    
    // Rand Ship Pause
    var rand_ship_pause = Math.floor(Math.random() * (30 - 10 + 1)) + 10;
    
    // Ship Array
    var ship_array = [
        '<script>cargo_ship_1_position(); person_sailor_animation_1();</script><div class="ship_1 cargo_ship_1_wrapper"><div class="ship_1_timer"></div><div class="cargo_ship_1"><div class="cab_1"></div><div class="rail_1"></div><div class="sail_1"></div><div class="prop_1"></div><div class="prop_2"></div><div class="prop_3"></div><div class="ex_1"></div><div class="person_sailor_wrapper person_sailor_1"><div class="person_sailor_event_timer"></div><div class="person_sailor_pixel_timer"></div></div></div></div>',
        
        '<script>gun_ship_1_position(); cannon_animation_1(); person_sailor_animation_2(); person_scientist_animation_1(); person_solider_animation_1();</script><div class="ship_1 gun_ship_1_wrapper"><div class="ship_1_timer"></div><div class="gun_ship_1"><div class="cab_1"></div><div class="rail_1"></div><div class="cannon_desk_1"></div><div class="prop_1"></div><div class="prop_2"></div><div class="prop_3"></div><div class="prop_4"></div><div class="prop_5"></div><div class="prop_6"></div><div class="ex_1"></div><div class="ex_2"></div><div class="cannon_wrapper cannon_1"><div class="cannon_event_timer"></div><div class="cannon_pixel_timer"></div><div class="cannon_blast_timer"></div></div><div class="person_sailor_wrapper person_sailor_2"><div class="person_sailor_event_timer"></div><div class="person_sailor_pixel_timer"></div></div><div class="person_scientist_wrapper person_scientist_1"><div class="person_scientist_event_timer"></div><div class="person_scientist_pixel_timer"></div></div><div class="person_solider_wrapper person_solider_1"><div class="person_solider_event_timer"></div><div class="person_solider_pixel_timer"></div></div></div></div>',
    ];
    
    // Shuffle Ships
    shuffle(ship_array);
        
    // Add Remove Clone
    var timer   = $('.ship_1_timer'),  
    timer_clone = timer.clone(true);
    timer.before(timer_clone);
    $("." + timer.attr("class") + ":last").remove();
    
    // Start Animations 
    $('.ships_loop_right').html(ship_array[1]);
    // Animation 1 CallBack 
    $('.ship_1_timer').one('animationend webkitAnimationEnd', function() {
        // Special Pause
        $('.ships_loop_right').html('<div class="ship_1 ship_1_pause"><div class="ship_1_timer" style="-webkit-animation-duration:'+rand_ship_pause+'s; animation-duration:'+rand_ship_pause+'s;"></div></div>');
        // Animation 2 CallBack 
        $('.ship_1_timer').one('animationend webkitAnimationEnd', function() {
            // Loop the Function
            ships_loop_right();
        });
    });

}; 


// CARGO SHIP 1
cargo_ship_1_position = function() {
  var $cargo_ship_1_wrapper = $('div.cargo_ship_1_wrapper');
  var z_index               = Math.floor(Math.random() * (999 - 5 + 1)) + 5;
  var rand_y_cord           = Math.floor(Math.random() * (45 - 55 + 1)) + 45;
  $cargo_ship_1_wrapper.css({
  	'z-index'          : z_index,
    top                : rand_y_cord + '%'
  });
}

// GUN SHIP 1
gun_ship_1_position = function() {
  var $gun_ship_1_wrapper = $('div.gun_ship_1_wrapper');
  var z_index               = Math.floor(Math.random() * (999 - 5 + 1)) + 5;
  var rand_y_cord           = Math.floor(Math.random() * (45 - 55 + 1)) + 45;
  $gun_ship_1_wrapper.css({
  	'z-index'          : z_index,
    top                : rand_y_cord + '%'
  });
}


// PERSON SAILOR ANIMATION 1
person_sailor_animation_1 = function() {
    
    // Animation Array
    person_sailor_1_animations = [
        function() {
            // Add Animation
            $('.person_sailor_event_timer').attr('class', 'person_sailor_event_timer walk_right_event');
            $('.person_sailor_pixel_timer').attr('class', 'person_sailor_pixel_timer walk_right_animation');
            if(window.debug) console.log('walking right');
            // Set Position
            var st     = window.getComputedStyle($('.person_sailor_wrapper').get(0));
            var tr     = st.getPropertyValue("-webkit-transform") || st.getPropertyValue("-moz-transform") || st.getPropertyValue("transform");                    
            var values = tr.split('(')[1];
                values = values.split(')')[0];
                values = values.split(',');
            var sp     = parseInt(values[4]) + 50;
            $('.person_sailor_wrapper').css({
                '-webkit-transform' : 'translate3d(' + sp + 'px,0,0)',
                'transform'         : 'translate3d(' + sp + 'px,0,0)'
            });
        },
        function() {
            // Add Animation
            $('.person_sailor_event_timer').attr('class', 'person_sailor_event_timer walk_left_event');
            $('.person_sailor_pixel_timer').attr('class', 'person_sailor_pixel_timer walk_left_animation');
            if(window.debug) console.log('walking left');
            // Set Position
            var st     = window.getComputedStyle($('.person_sailor_wrapper').get(0));
            var tr     = st.getPropertyValue("-webkit-transform") || st.getPropertyValue("-moz-transform") || st.getPropertyValue("transform");                    
            var values = tr.split('(')[1];
                values = values.split(')')[0];
                values = values.split(',');
            var sp     = parseInt(values[4]) - 50;
            $('.person_sailor_wrapper').css({
                '-webkit-transform' : 'translate3d(' + sp + 'px,0,0)',
                'transform'         : 'translate3d(' + sp + 'px,0,0)'
            });
        },
        function() {
            // Add Animation
            $('.person_sailor_event_timer').attr('class', 'person_sailor_event_timer look_around_event');
            $('.person_sailor_pixel_timer').attr('class', 'person_sailor_pixel_timer look_around_animation');
            if(window.debug) console.log('looking around');
        },
        function() {
            // Add Animation
            $('.person_sailor_event_timer').attr('class', 'person_sailor_event_timer bend_down_event');
            $('.person_sailor_pixel_timer').attr('class', 'person_sailor_pixel_timer bend_down_animation');
            if(window.debug) console.log('bending down');
        },
        function() {
            // Add Animation
            $('.person_sailor_event_timer').attr('class', 'person_sailor_event_timer smoking_event');
            $('.person_sailor_pixel_timer').attr('class', 'person_sailor_pixel_timer smoking_animation');
            if(window.debug) console.log('smoking');
        },
        function() {
            // Add Animation
            $('.person_sailor_event_timer').attr('class', 'person_sailor_event_timer stand_still_event');
            $('.person_sailor_pixel_timer').attr('class', 'person_sailor_pixel_timer stand_still_animation');
            if(window.debug) console.log('standing still');
        },
        function() {
            // Add Animation
            $('.person_sailor_event_timer').attr('class', 'person_sailor_event_timer dance_event');
            $('.person_sailor_pixel_timer').attr('class', 'person_sailor_pixel_timer dance_animation');
            if(window.debug) console.log('dance');
        },
        function() {
            // Add Animation
            $('.person_sailor_event_timer').attr('class', 'person_sailor_event_timer sweeping_event');
            $('.person_sailor_pixel_timer').attr('class', 'person_sailor_pixel_timer sweeping_animation');
            if(window.debug) console.log('sweeping');
        },
    ];
        
    // Shuffle Animations
    shuffle(person_sailor_1_animations);
        
    // Loop Animations
    var person_sailor_loop = function() {  
        
        // Add Remove Clone
        var timer   = $('.person_sailor_event_timer'),  
        timer_clone = timer.clone(true);
        timer.before(timer_clone);
        $("." + timer.attr("class") + ":last").remove();
        
        if(window.debug) console.log('--- Begin ---');
        
        // Start Animations
        person_sailor_1_animations[0]();
        // Animation 1 CallBack   
        $('.person_sailor_event_timer').one('animationend webkitAnimationEnd', function() {
            $('.person_sailor_event_timer').attr('class', 'person_sailor_event_timer');
            $('.person_sailor_pixel_timer').attr('class', 'person_sailor_pixel_timer');
            person_sailor_1_animations[1]();    
            // Animation 2 CallBack
            $(this).one('animationend webkitAnimationEnd', function() {
                $('.person_sailor_event_timer').attr('class', 'person_sailor_event_timer');
                $('.person_sailor_pixel_timer').attr('class', 'person_sailor_pixel_timer');
                person_sailor_1_animations[2]();
                // Animation 3 CallBack
                $(this).one('animationend webkitAnimationEnd', function() {
                    $('.person_sailor_event_timer').attr('class', 'person_sailor_event_timer');
                    $('.person_sailor_pixel_timer').attr('class', 'person_sailor_pixel_timer');
                    person_sailor_1_animations[3]();  
                    // Animation 4 CallBack
                    $(this).one('animationend webkitAnimationEnd', function() {
                        $('.person_sailor_event_timer').attr('class', 'person_sailor_event_timer');
                        $('.person_sailor_pixel_timer').attr('class', 'person_sailor_pixel_timer');                        
                        person_sailor_1_animations[4](); 
                        // Animation 5 CallBack
                        $(this).one('animationend webkitAnimationEnd', function() {
                            $('.person_sailor_event_timer').attr('class', 'person_sailor_event_timer');
                            $('.person_sailor_pixel_timer').attr('class', 'person_sailor_pixel_timer'); 
                            person_sailor_1_animations[5](); 
                            // Animation 6 CallBack
                            $(this).one('animationend webkitAnimationEnd', function() {
                                $('.person_sailor_event_timer').attr('class', 'person_sailor_event_timer');
                                $('.person_sailor_pixel_timer').attr('class', 'person_sailor_pixel_timer'); 
                                person_sailor_1_animations[6]();
                                // Animation 7 CallBack
                                $(this).one('animationend webkitAnimationEnd', function() {
                                    $('.person_sailor_event_timer').attr('class', 'person_sailor_event_timer');
                                    $('.person_sailor_pixel_timer').attr('class', 'person_sailor_pixel_timer'); 
                                    person_sailor_1_animations[7]();     
                                    // Animation 8 CallBack
                                    $(this).one('animationend webkitAnimationEnd', function() {
                                        $('.person_sailor_event_timer').attr('class', 'person_sailor_event_timer');
                                        $('.person_sailor_pixel_timer').attr('class', 'person_sailor_pixel_timer');                        
                                        // Re-shuffle Animations
                                        shuffle(person_sailor_1_animations);
                                        if(window.debug) console.log('--- end ---');
                                        // Loop The Function
                                        person_sailor_loop();
                                    });
                                });
                            });
                        });
                    });
                });             
            });      
        });
    }; person_sailor_loop();
    
};

// PERSON SAILOR ANIMATION 2
person_sailor_animation_2 = function() {
    
    // Animation Array
    person_sailor_2_animations = [
        function() {
            // Add Animation
            $('.person_sailor_event_timer').attr('class', 'person_sailor_event_timer walk_right_event');
            $('.person_sailor_pixel_timer').attr('class', 'person_sailor_pixel_timer walk_right_animation');
            if(window.debug) console.log('walking right');
            // Set Position
            var st     = window.getComputedStyle($('.person_sailor_wrapper').get(0));
            var tr     = st.getPropertyValue("-webkit-transform") || st.getPropertyValue("-moz-transform") || st.getPropertyValue("transform");                    
            var values = tr.split('(')[1];
                values = values.split(')')[0];
                values = values.split(',');
            var sp     = parseInt(values[4]) + 50;
            $('.person_sailor_wrapper').css({
                '-webkit-transform' : 'translate3d(' + sp + 'px,0,0)',
                'transform'         : 'translate3d(' + sp + 'px,0,0)'
            });
        },
        function() {
            // Add Animation
            $('.person_sailor_event_timer').attr('class', 'person_sailor_event_timer walk_left_event');
            $('.person_sailor_pixel_timer').attr('class', 'person_sailor_pixel_timer walk_left_animation');
            if(window.debug) console.log('walking left');
            // Set Position
            var st     = window.getComputedStyle($('.person_sailor_wrapper').get(0));
            var tr     = st.getPropertyValue("-webkit-transform") || st.getPropertyValue("-moz-transform") || st.getPropertyValue("transform");                    
            var values = tr.split('(')[1];
                values = values.split(')')[0];
                values = values.split(',');
            var sp     = parseInt(values[4]) - 50;
            $('.person_sailor_wrapper').css({
                '-webkit-transform' : 'translate3d(' + sp + 'px,0,0)',
                'transform'         : 'translate3d(' + sp + 'px,0,0)'
            });
        },
        function() {
            // Add Animation
            $('.person_sailor_event_timer').attr('class', 'person_sailor_event_timer look_around_event');
            $('.person_sailor_pixel_timer').attr('class', 'person_sailor_pixel_timer look_around_animation');
            if(window.debug) console.log('looking around');
        },
        function() {
            // Add Animation
            $('.person_sailor_event_timer').attr('class', 'person_sailor_event_timer bend_down_event');
            $('.person_sailor_pixel_timer').attr('class', 'person_sailor_pixel_timer bend_down_animation');
            if(window.debug) console.log('bending down');
        },
        function() {
            // Add Animation
            $('.person_sailor_event_timer').attr('class', 'person_sailor_event_timer smoking_event');
            $('.person_sailor_pixel_timer').attr('class', 'person_sailor_pixel_timer smoking_animation');
            if(window.debug) console.log('smoking');
        },
        function() {
            // Add Animation
            $('.person_sailor_event_timer').attr('class', 'person_sailor_event_timer stand_still_event');
            $('.person_sailor_pixel_timer').attr('class', 'person_sailor_pixel_timer stand_still_animation');
            if(window.debug) console.log('standing still');
        },
        function() {
            // Add Animation
            $('.person_sailor_event_timer').attr('class', 'person_sailor_event_timer dance_event');
            $('.person_sailor_pixel_timer').attr('class', 'person_sailor_pixel_timer dance_animation');
            if(window.debug) console.log('dance');
        },
        function() {
            // Add Animation
            $('.person_sailor_event_timer').attr('class', 'person_sailor_event_timer sweeping_event');
            $('.person_sailor_pixel_timer').attr('class', 'person_sailor_pixel_timer sweeping_animation');
            if(window.debug) console.log('sweeping');
        },
    ];
        
    // Shuffle Animations
    shuffle(person_sailor_2_animations);
        
    // Loop Animations
    var person_sailor_loop = function() {  
        
        // Add Remove Clone
        var timer   = $('.person_sailor_event_timer'),  
        timer_clone = timer.clone(true);
        timer.before(timer_clone);
        $("." + timer.attr("class") + ":last").remove();
        
        if(window.debug) console.log('--- Begin ---');
        
        // Start Animations
        person_sailor_2_animations[0]();
        // Animation 1 CallBack   
        $('.person_sailor_event_timer').one('animationend webkitAnimationEnd', function() {
            $('.person_sailor_event_timer').attr('class', 'person_sailor_event_timer');
            $('.person_sailor_pixel_timer').attr('class', 'person_sailor_pixel_timer');
            person_sailor_2_animations[1]();    
            // Animation 2 CallBack
            $(this).one('animationend webkitAnimationEnd', function() {
                $('.person_sailor_event_timer').attr('class', 'person_sailor_event_timer');
                $('.person_sailor_pixel_timer').attr('class', 'person_sailor_pixel_timer');
                person_sailor_2_animations[2]();
                // Animation 3 CallBack
                $(this).one('animationend webkitAnimationEnd', function() {
                    $('.person_sailor_event_timer').attr('class', 'person_sailor_event_timer');
                    $('.person_sailor_pixel_timer').attr('class', 'person_sailor_pixel_timer');
                    person_sailor_2_animations[3]();  
                    // Animation 4 CallBack
                    $(this).one('animationend webkitAnimationEnd', function() {
                        $('.person_sailor_event_timer').attr('class', 'person_sailor_event_timer');
                        $('.person_sailor_pixel_timer').attr('class', 'person_sailor_pixel_timer');                        
                        person_sailor_2_animations[4](); 
                        // Animation 5 CallBack
                        $(this).one('animationend webkitAnimationEnd', function() {
                            $('.person_sailor_event_timer').attr('class', 'person_sailor_event_timer');
                            $('.person_sailor_pixel_timer').attr('class', 'person_sailor_pixel_timer'); 
                            person_sailor_2_animations[5](); 
                            // Animation 6 CallBack
                            $(this).one('animationend webkitAnimationEnd', function() {
                                $('.person_sailor_event_timer').attr('class', 'person_sailor_event_timer');
                                $('.person_sailor_pixel_timer').attr('class', 'person_sailor_pixel_timer'); 
                                person_sailor_2_animations[6]();
                                // Animation 7 CallBack
                                $(this).one('animationend webkitAnimationEnd', function() {
                                    $('.person_sailor_event_timer').attr('class', 'person_sailor_event_timer');
                                    $('.person_sailor_pixel_timer').attr('class', 'person_sailor_pixel_timer'); 
                                    person_sailor_2_animations[7]();     
                                    // Animation 8 CallBack
                                    $(this).one('animationend webkitAnimationEnd', function() {
                                        $('.person_sailor_event_timer').attr('class', 'person_sailor_event_timer');
                                        $('.person_sailor_pixel_timer').attr('class', 'person_sailor_pixel_timer');                        
                                        // Re-shuffle Animations
                                        shuffle(person_sailor_2_animations);
                                        if(window.debug) console.log('--- end ---');
                                        // Loop The Function
                                        person_sailor_loop();
                                    });
                                });
                            });
                        });
                    });
                });             
            });      
        });
    }; person_sailor_loop();
    
};

// PERSON SCIENTIST ANIMATION 1
person_scientist_animation_1 = function() {
    
    // Animation Array
    person_scientist_1_animations = [
        function() {
            // Add Animation
            $('.person_scientist_event_timer').attr('class', 'person_scientist_event_timer typing_event');
            $('.person_scientist_pixel_timer').attr('class', 'person_scientist_pixel_timer typing_animation');
            if(window.debug) console.log('typing');
        },
        function() {
            // Add Animation
            $('.person_scientist_event_timer').attr('class', 'person_scientist_event_timer stretching_event');
            $('.person_scientist_pixel_timer').attr('class', 'person_scientist_pixel_timer stretching_animation');
            if(window.debug) console.log('stretching');
        },
        function() {
            // Add Animation
            $('.person_scientist_event_timer').attr('class', 'person_scientist_event_timer scratching_event');
            $('.person_scientist_pixel_timer').attr('class', 'person_scientist_pixel_timer scratching_animation');
            if(window.debug) console.log('scratching');
        },
        function() {
            // Add Animation
            $('.person_scientist_event_timer').attr('class', 'person_scientist_event_timer bending_event');
            $('.person_scientist_pixel_timer').attr('class', 'person_scientist_pixel_timer bending_animation');
            if(window.debug) console.log('bending');
        },
    ];
        
    // Shuffle Animations
    shuffle(person_scientist_1_animations);
        
    // Loop Animations
    var person_scientist_loop = function() {  
        
        // Add Remove Clone
        var timer   = $('.person_scientist_event_timer'),  
        timer_clone = timer.clone(true);
        timer.before(timer_clone);
        $("." + timer.attr("class") + ":last").remove();
        
        if(window.debug) console.log('--- Begin ---');
        
        // Start Animations
        person_scientist_1_animations[0]();
        // Animation 1 CallBack   
        $('.person_scientist_event_timer').one('animationend webkitAnimationEnd', function() {
            $('.person_scientist_event_timer').attr('class', 'person_scientist_event_timer');
            $('.person_scientist_pixel_timer').attr('class', 'person_scientist_pixel_timer');
            person_scientist_1_animations[1]();
            // Animation 2 CallBack   
            $('.person_scientist_event_timer').one('animationend webkitAnimationEnd', function() {
                $('.person_scientist_event_timer').attr('class', 'person_scientist_event_timer');
                $('.person_scientist_pixel_timer').attr('class', 'person_scientist_pixel_timer');
                person_scientist_1_animations[2]();                                 
                // Animation 3 CallBack   
                $('.person_scientist_event_timer').one('animationend webkitAnimationEnd', function() {
                    $('.person_scientist_event_timer').attr('class', 'person_scientist_event_timer');
                    $('.person_scientist_pixel_timer').attr('class', 'person_scientist_pixel_timer');                               
                    person_scientist_1_animations[3]();
                    // Animation 4 CallBack   
                    $('.person_scientist_event_timer').one('animationend webkitAnimationEnd', function() {
                        $('.person_scientist_event_timer').attr('class', 'person_scientist_event_timer');
                        $('.person_scientist_pixel_timer').attr('class', 'person_scientist_pixel_timer');
                        // Re-shuffle Animations
                        shuffle(person_scientist_1_animations);
                        if(window.debug) console.log('--- end ---');
                        // Loop The Function
                        person_scientist_loop();                                  
                    });
                });
            });
        });
            
    }; person_scientist_loop();
    
};

// PERSON SOLIDER ANIMATION 1
person_solider_animation_1 = function() {
    
    // Animation Array
    person_solider_1_animations = [
        function() {
            // Add Animation
            $('.person_solider_event_timer').attr('class', 'person_solider_event_timer walk_right_event');
            $('.person_solider_pixel_timer').attr('class', 'person_solider_pixel_timer walk_right_animation');
            if(window.debug) console.log('walking right');
            // Set Position
            var st     = window.getComputedStyle($('.person_solider_wrapper').get(0));
            var tr     = st.getPropertyValue("-webkit-transform") || st.getPropertyValue("-moz-transform") || st.getPropertyValue("transform");                    
            var values = tr.split('(')[1];
                values = values.split(')')[0];
                values = values.split(',');
            var sp     = parseInt(values[4]) + 35;
            $('.person_solider_wrapper').css({
                '-webkit-transform' : 'translate3d(' + sp + 'px,0,0)',
                'transform'         : 'translate3d(' + sp + 'px,0,0)'
            });
        },
        function() {
            // Add Animation
            $('.person_solider_event_timer').attr('class', 'person_solider_event_timer walk_left_event');
            $('.person_solider_pixel_timer').attr('class', 'person_solider_pixel_timer walk_left_animation');
            if(window.debug) console.log('walking left');
            // Set Position
            var st     = window.getComputedStyle($('.person_solider_wrapper').get(0));
            var tr     = st.getPropertyValue("-webkit-transform") || st.getPropertyValue("-moz-transform") || st.getPropertyValue("transform");                    
            var values = tr.split('(')[1];
                values = values.split(')')[0];
                values = values.split(',');
            var sp     = parseInt(values[4]) - 35;
            $('.person_solider_wrapper').css({
                '-webkit-transform' : 'translate3d(' + sp + 'px,0,0)',
                'transform'         : 'translate3d(' + sp + 'px,0,0)'
            });
        },
        function() {
            // Add Animation
            $('.person_solider_event_timer').attr('class', 'person_solider_event_timer spyglass_event');
            $('.person_solider_pixel_timer').attr('class', 'person_solider_pixel_timer spyglass_animation');
            if(window.debug) console.log('spyglass');
        },
    ];
        
    // Shuffle Animations
    shuffle(person_solider_1_animations);
        
    // Loop Animations
    var person_solider_loop = function() {  
        
        // Add Remove Clone
        var timer   = $('.person_solider_event_timer'),  
        timer_clone = timer.clone(true);
        timer.before(timer_clone);
        $("." + timer.attr("class") + ":last").remove();
        
        if(window.debug) console.log('--- Begin ---');
        
        // Start Animations
        person_solider_1_animations[0]();
        // Animation 1 CallBack   
        $('.person_solider_event_timer').one('animationend webkitAnimationEnd', function() {
            $('.person_solider_event_timer').attr('class', 'person_solider_event_timer');
            $('.person_solider_pixel_timer').attr('class', 'person_solider_pixel_timer');
            person_solider_1_animations[1]();  
            // Animation 2 CallBack
            $(this).one('animationend webkitAnimationEnd', function() {
                $('.person_solider_event_timer').attr('class', 'person_solider_event_timer');
                $('.person_solider_pixel_timer').attr('class', 'person_solider_pixel_timer');                        
                person_solider_1_animations[2](); 
                // Animation 3 CallBack
                $(this).one('animationend webkitAnimationEnd', function() {
                    $('.person_solider_event_timer').attr('class', 'person_solider_event_timer');
                    $('.person_solider_pixel_timer').attr('class', 'person_solider_pixel_timer');                        
                    // Re-shuffle Animations
                    shuffle(person_solider_1_animations);
                    if(window.debug) console.log('--- end ---');
                    // Loop The Function
                    person_solider_loop();
                });            
            });
        });
    }; person_solider_loop();
    
};


// CANNON 1 ANIMATION
cannon_animation_1 = function() {
    
    // Animation Array
    cannon_1_animations = [
        function() {
            // Add Animation
            $('.cannon_event_timer').attr('class', 'cannon_event_timer cannon_pause_event');
            $('.cannon_pixel_timer').attr('class', 'cannon_pixel_timer cannon_pause_animation');
            if(window.debug) console.log('cannon pause');
        },
        function() {
            // Add Animation
            $('.cannon_event_timer').attr('class', 'cannon_event_timer cannon_fire_event');
            $('.cannon_pixel_timer').attr('class', 'cannon_pixel_timer cannon_fire_animation');
            $('.cannon_blast_timer').attr('class', 'cannon_blast_timer cannon_blast_animation');
            if(window.debug) console.log('cannon fire');
        },  
    ];
        
    // Loop Animations
    var cannon_1_loop = function() {  
        
        // Add Remove Clone
        var event_timer   = $('.cannon_event_timer'),  
        event_timer_clone = event_timer.clone(true);
        event_timer.before(event_timer_clone);
        $("." + event_timer.attr("class") + ":last").remove();
        
        // Add Remove Clone
        var pixel_timer   = $('.cannon_pixel_timer'),  
        pixel_timer_clone = pixel_timer.clone(true);
        pixel_timer.before(pixel_timer_clone);
        $("." + pixel_timer.attr("class") + ":last").remove();
        
        // Add Remove Clone
        var blast_timer   = $('.cannon_blast_timer'),  
        blast_timer_clone = blast_timer.clone(true);
        blast_timer.before(blast_timer_clone);
        $("." + blast_timer.attr("class") + ":last").remove();
        
        if(window.debug) console.log('--- Begin ---');
        
        // Start Animations
        cannon_1_animations[0]();
        // Animation 1 CallBack   
        $('.cannon_event_timer').one('animationend webkitAnimationEnd', function() {
            $('.cannon_event_timer').attr('class', 'cannon_event_timer');
            $('.cannon_pixel_timer').attr('class', 'cannon_pixel_timer');
            $('.cannon_blast_timer').attr('class', 'cannon_blast_timer');
            cannon_1_animations[1]();
            // Animation 2 CallBack 
            $(this).one('animationend webkitAnimationEnd', function() {
                $('.cannon_event_timer').attr('class', 'cannon_event_timer');
                $('.cannon_pixel_timer').attr('class', 'cannon_pixel_timer');
                $('.cannon_blast_timer').attr('class', 'cannon_blast_timer');
                // Loop The Function
                cannon_1_loop();                           
            });
        });
        
    }; cannon_1_loop();
    
};


// LOAD FUNCTIONS

$(function() {

  setTimeout(function() {

    cloud_animations();  
    ships_loop_right();
    
  }, 4000);
    
});