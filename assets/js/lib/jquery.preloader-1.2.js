/*
 *
 * NAME         : Moomba Preloader
 * INSTRUCTIONS : http://labs.simoncorry.com/plugins/preloader
 * GITHUB REPO  : https://github.com/simoncorry/jquery.preloader
 * AUTHORED BY  : Simon Corry, http://simoncorry.com
 * VERSION      : 1.3
 * UPDATED      : September 12th, 2013
 *
 * Moomba Preloader is a plugin for jQuery. Please feel free to email
 * questions or use case examples to hello@simoncorry.com.
 * 
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 * 
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 * Version 1.1 (October 29th, 2012)
 * - Various bug fixes. 
 *
 * Version 1.1.1 (April 30th, 2013)
 * - Fixed bug that prevented content being hidden on ready.
 * 
 * Version 1.2 (May 17th, 2013)
 * - Shroud added to set a background color during the loading sequence.
 * - New type added 'Square'.
 *
 * Version 1.3 (Sep 11th, 2013)
 * - Replaced setTimeout with animationEnd for more precise transitions.
 * - Added blank divs to handle animationEnd timings.
 *
*/

(function($){

  // Plugin Methods
  var methods = {
    
    // Settings Method
    settings : function() {      
      var settings = {             
        'type'        : 1,                  // Rectangle(1), Square(2)
        'bg_color'    : 'rgb(225,225,225)', // Background Color
        // Rectangle(1) 
        'r_box_color' : 'rgb(254,254,254)', // Outer shell
        'r_bar_color' : 'rgb(204,102,51)' , // Inner Bar
        // Square(2)
        's_box_color' : 'rgb(254,254,254)', // Outer shell
        's_square_1'  : 'rgb(40,55,64)',    // Top Left
        's_square_2'  : 'rgb(138,178,159)', // Top Right
        's_square_3'  : 'rgb(191,168,118)', // Bottom Left
        's_square_4'  : 'rgb(89,51,37)',    // Bottom Right         
      };
    },
  
    // Initialise Method
    init : function(options) {  
      var o       = options;
      var $body   = $('body');
      var wrapper = '<div id="wrapper" />';
      var target  = 'typeTarget'; 
      
      // Plugin
      return this.each(function() {
  
        // Rectangle
        function typeRectangle() {
          $body
            .css('display','block')
            .wrapInner(wrapper)
            .prepend('<div id="loadingAnimationDelay"></div> \ <div id="activateShroud"></div> \ <div id="activatePage"></div> \ <div id="shroud"> \ <div id="typeRectangle" class="'+target+'"> \ <div class="bar"></div> \ </div> \ </div>');
          $('#shroud')
            .css('background-color', o.bg_color);
          $('#typeRectangle')
            .css('background-color', o.r_box_color)
            .css('border-color', o.r_box_color);
          $('#typeRectangle > .bar')
            .css('background-color', o.r_bar_color);
        };
        
        // Square
        function typeSquare() {
          $body
            .css('display','block')
            .wrapInner(wrapper)
            .prepend('<div id="loadingAnimationDelay"></div> \ <div id="activateShip"></div> \ <div id="activateShroud"></div> \ <div id="activatePage"></div> \ <div id="shroud"> \ <div class="square_cover"></div> \ <div id="typeSquare" class="'+target+'"> \ <div class="square_1"></div> \ <div class="square_2"></div> \ <div class="square_3"></div> \ <div class="square_4"></div> \ </div> \ </div>');
          $('#shroud')
            .css('background-color', o.bg_color);
          $('#typeSquare')
            .css('background-color', o.s_box_color);
          $('#typeSquare > .square_1')
            .css('background-color', o.s_square_1);
          $('#typeSquare > .square_2')
            .css('background-color', o.s_square_2);
          $('#typeSquare > .square_3')
            .css('background-color', o.s_square_3);
          $('#typeSquare > .square_4')
            .css('background-color', o.s_square_4);
        };
        
        // Determine 'type'
        if(o.type == 1) {typeRectangle();}
        else if(o.type == 2) {typeSquare();}
        else {typeRectangle();}
        
        // Initialise
        onload = function() {
          
          // Add one sec delay after load complete  
          $('#loadingAnimationDelay').
            addClass('addDelay');
            
          // Wait for one sec delay and clear loader
          $('#loadingAnimationDelay').one('animationend webkitAnimationEnd', function(e) {
            
            $('#wrapper')
	            .addClass('show');
	            
	        $('.square_cover')
              .addClass('active');
              
            $('.typeTarget, .typeTarget .square_1, .typeTarget .square_2, .typeTarget .square_3, .typeTarget .square_4')
              .addClass('pauseAnimation');
               
            // Simoncorry.com only.
            $('#activateShip').
              addClass('runShip');
            
          });
          
          // Activate Ship
          $('#activateShip').one('animationend webkitAnimationEnd', function(e) {
	        
	        $('.square_cover')
              .addClass('topinvisible');
	            
	        // Simoncorry.com only.
			$('#activateShroud').
			  addClass('runShroud');
			  
	      });
	      
	      // Activate Shroud
          $('#activateShroud').one('animationend webkitAnimationEnd', function(e) {
	        
	        $('#shroud')
              .addClass('active');
	            
	        // Simoncorry.com only.
			$('#activatePage').
			  addClass('runPage');
			  
	      });
          
          // Activate Page
          $('#activatePage').one('animationend webkitAnimationEnd', function(e) {
          	
          	$('body').css('overflow','visible');
              
            // Add active states on load
            $('section, .animations').addClass('active');
          
          });
        
        }    
      });  
    }
  }; 
  
  // Call Plugin Methods 
  $.fn.moombaPreloader = function(method) {       
    if (methods[method]) {
      return methods[method].apply(this,Array.prototype.slice.call(arguments,1));        
    } else if (typeof method === 'object' || ! method) {
      return methods.init.apply(this,arguments);
    } else {
      $.error('Method ' + method + ' does not exist on jQuery.load');
    } 
  }
  
})(jQuery);    