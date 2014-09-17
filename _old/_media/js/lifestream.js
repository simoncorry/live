$(window).load(function(){

    /* Detect a:href */
    $(".lifestream-twitter:not(:has(a))").addClass('twitter-link'),
    $(".lifestream-twitter:not(:has(a)) .twitter-box").removeClass('twitter-link'); 
    $(".twitter-link").click(function(){ window.open('http://twitter.com/simoncorry','_blank'); }); 
    
    /* Set Rollover events for first-child */
    $('ul.lifestream li').bind('mouseover',function(){$('ul.lifestream li:first-child').removeClass('first-item first-item-twitter first-item-googleplus first-item-tumblr first-item-dribbble first-item-delicious first-item-github first-item-forrst first-item-bitly first-item-vimeo first-item-youtube'); });
    $('ul.lifestream li').bind('mouseout',function(){$('ul.lifestream li.lifestream-twitter:first-child').addClass('first-item first-item-twitter'); });
    $('ul.lifestream li').bind('mouseout',function(){$('ul.lifestream li.lifestream-googleplus:first-child').addClass('first-item first-item-googleplus'); });   
    $('ul.lifestream li').bind('mouseout',function(){$('ul.lifestream li.lifestream-tumblr:first-child').addClass('first-item first-item-tumblr'); });
    $('ul.lifestream li').bind('mouseout',function(){$('ul.lifestream li.lifestream-dribbble:first-child').addClass('first-item first-item-dribbble'); });
    $('ul.lifestream li').bind('mouseout',function(){$('ul.lifestream li.lifestream-delicious:first-child').addClass('first-item first-item-delicious'); });
    $('ul.lifestream li').bind('mouseout',function(){$('ul.lifestream li.lifestream-github:first-child').addClass('first-item first-item-github'); });
    $('ul.lifestream li').bind('mouseout',function(){$('ul.lifestream li.lifestream-forrst:first-child').addClass('first-item first-item-forrst'); });
    $('ul.lifestream li').bind('mouseout',function(){$('ul.lifestream li.lifestream-bitly:first-child').addClass('first-item first-item-bitly'); });
    $('ul.lifestream li').bind('mouseout',function(){$('ul.lifestream li.lifestream-vimeo:first-child').addClass('first-item first-item-vimeo'); });
    $('ul.lifestream li').bind('mouseout',function(){$('ul.lifestream li.lifestream-youtube:first-child').addClass('first-item first-item-youtube'); });
    
    /* Add individual CSS classes for first-child */
    $('ul.lifestream li.lifestream-twitter:first-child').addClass('first-item-twitter');
    $('ul.lifestream li.lifestream-googleplus:first-child').addClass('first-item-googleplus');
    $('ul.lifestream li.lifestream-tumblr:first-child').addClass('first-item-tumblr');
    $('ul.lifestream li.lifestream-dribbble:first-child').addClass('first-item-dribbble');
    $('ul.lifestream li.lifestream-delicious:first-child').addClass('first-item-delicious');
    $('ul.lifestream li.lifestream-github:first-child').addClass('first-item-github');
    $('ul.lifestream li.lifestream-forrst:first-child').addClass('first-item-forrst');
    $('ul.lifestream li.lifestream-bitly:first-child').addClass('first-item-bitly');
    $('ul.lifestream li.lifestream-vimeo:first-child').addClass('first-item-vimeo');
    $('ul.lifestream li.lifestream-youtube:first-child').addClass('first-item-youtube');
     
    /* Add lifestramHover class to relevant stream items when stream item is moused over */ 
	var $twitter = $('.lifestream-twitter');
	var $google = $('.lifestream-googleplus');
	var $tumblr = $('.lifestream-tumblr');
	var $dribbble = $('.lifestream-dribbble');
	var $delicious = $('.lifestream-delicious');
	var $github = $('.lifestream-github');
	var $forrst = $('.lifestream-forrst');
	var $bitly = $('.lifestream-bitly');
	var $vimeo = $('.lifestream-vimeo');
	var $youtube = $('.lifestream-youtube');
    
    /* TWITTER */
	$('.lifestream-twitter').mouseover(function(){$twitter.addClass('lifestreamHover');}).mouseout(function(){$twitter.removeClass('lifestreamHover');});   
    /* GOOGLE */
    $('.lifestream-googleplus').mouseover(function(){$google.addClass('lifestreamHover');}).mouseout(function(){$google.removeClass('lifestreamHover');});
    /* TUMBLR */
    $('.lifestream-tumblr').mouseover(function(){$tumblr.addClass('lifestreamHover');}).mouseout(function(){$tumblr.removeClass('lifestreamHover');});
    /* DRIBBBLE */
    $('.lifestream-dribbble').mouseover(function(){$dribbble.addClass('lifestreamHover');}).mouseout(function(){$dribbble.removeClass('lifestreamHover');});
    /* DELICIOUS */
    $('.lifestream-delicious').mouseover(function(){$delicious.addClass('lifestreamHover');}).mouseout(function(){$delicious.removeClass('lifestreamHover');});
    /* GITHUB */
    $('.lifestream-github').mouseover(function(){$github.addClass('lifestreamHover');}).mouseout(function(){$github.removeClass('lifestreamHover');});
    /* FORRST */
    $('.lifestream-forrst').mouseover(function(){$forrst.addClass('lifestreamHover');}).mouseout(function(){$forrst.removeClass('lifestreamHover');});
    /* BITLY */
    $('.lifestream-bitly').mouseover(function(){$bitly.addClass('lifestreamHover');}).mouseout(function(){$bitly.removeClass('lifestreamHover');});
    /* VIMEO */
    $('.lifestream-vimeo').mouseover(function(){$vimeo.addClass('lifestreamHover');}).mouseout(function(){$vimeo.removeClass('lifestreamHover');});
    /* YOUTUBE */
    $('.lifestream-youtube').mouseover(function(){$youtube.addClass('lifestreamHover');}).mouseout(function(){$youtube.removeClass('lifestreamHover');});
});