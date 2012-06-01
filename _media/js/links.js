/* //////////////////////////////////////////////////////////////////////////////////////////////////// */

/* ********** BEGIN - GLOBALS ************************************************************************* */

/* //////////////////////////////////////////////////////////////////////////////////////////////////// */

/* ////////////////////////////////////////////////// */

/* ********** BEGIN - TAG *************************** */

/* ////////////////////////////////////////////////// */

/*
 
     =====================
     .....................
     ... .................
     .. + ................
     ... ...... ..........
     ......... ^ .........
     .......... ..........
     ......... ^ .........          
     ........ ^^^ ........
     ....... ^^^^^ .......
     ...... ^^^^^^^ ......
     ..... ^^^^^^^^^ .....     
     =====================
     SIMON CORRY BA(HONS.)
     SCIENCE 'N CREATIVITY
     =====================
          
     http://simoncorry.com
               
*/

/* ////////////////////////////////////////////////// */

/* ********** END - TAG ***************************** */

/* ////////////////////////////////////////////////// */

/* //////////////////////////////////////////////////////////////////////////////////////////////////// */

/* ********** END - GLOBALS *************************************************************************** */

/* //////////////////////////////////////////////////////////////////////////////////////////////////// */

/* //////////////////////////////////////////////////////////////////////////////////////////////////// */

/* ********** BEGIN - LINKS *************************************************************************** */

/* //////////////////////////////////////////////////////////////////////////////////////////////////// */

/* ////////////////////////////////////////////////// */

/* ********** BEGIN - SHARING *********************** */

/* ////////////////////////////////////////////////// */

$(document).ready(function() {

    // SHARING
	encodedUrl = encodeURIComponent("http://simoncorry.com");
	encodedUrlTest = encodeURIComponent("http://letsswap.it");
	tweetString = "Visit the home of Science & Creativity ( http://simoncorry.com ) and follow the old chap ( @simoncorry )";
	
	// Get number of tweets about this page.
	$.getJSON(
		'http://api.tweetmeme.com/url_info.jsonc?url='+encodedUrl+'&callback=?',
		function(data) { if(data.story.url_count > 0) $("#twitterbubble").show().text(data.story.url_count); }
	);

	// Get number of facebook shares of this page.
	facebookFetch = encodeURIComponent('http://api.facebook.com/restserver.php?method=links.getStats&urls='+encodedUrl),
	$.get(
		"/_includes/crossFetch.php?url="+facebookFetch,
		function(data) {
			var shareCount = $(data).find('share_count').text();
			if(shareCount > 0) $("#facebookbubble").show().text(shareCount);
		}
	);
	
	$("#facebook-btn").click(function(){ window.open('http://www.facebook.com/sharer.php?u='+encodedUrl+'&t=Simon%20Corry', "Share", 'height=350,width=700'); });
	$("#twitter-btn").click(function(){ window.open('http://twitter.com/home?status='+encodeURIComponent(tweetString), "Tweet"); });
	
});

/* ////////////////////////////////////////////////// */

/* ********** END - SHARING ************************* */

/* ////////////////////////////////////////////////// */

/* ////////////////////////////////////////////////// */

/* ********** BEGIN - EXTERNALS ********************* */

/* ////////////////////////////////////////////////// */

$(document).ready(function() {
	
	// NAV
	$(".logo-wrapper").click(function(){ window.open('/','_self'); });
	$(".logo-dark-wrapper").click(function(){ window.open('/','_self'); });
	$(".lifestream-btn-wrapper").click(function(){ window.open('/lifestream','_self'); });
	$(".lifestream-dark-btn-wrapper").click(function(){ window.open('/lifestream','_self'); });
	$(".portfolio-wrapper").click(function(){ window.open('/portfolio','_self'); });
	$(".portfolio-dark-wrapper").click(function(){ window.open('/portfolio','_self'); });
	$(".creative-wrapper").click(function(){ window.open('/creative','_self'); });
	$(".creative-dark-wrapper").click(function(){ window.open('/creative','_self'); });
	$(".labs-wrapper").click(function(){ window.open('http://labs.simoncorry.com/','_self'); });
	$(".labs-dark-wrapper").click(function(){ window.open('http://labs.simoncorry.com/','_self'); });
	// FOOTER
	$("#html5-badge-wrapper").click(function(){ window.open('http://www.w3.org/html/logo/','_blank'); });
	$("#css3-badge-wrapper").click(function(){ window.open('http://www.w3.org/Style/CSS/','_blank'); });
		
});

$(window).load(function(){

    //Lifestream
	//$(".twitter-link").click(function(){ window.open('http://twitter.com/simoncorry','_blank'); });
    $(".googleplus-link").click(function(){ window.open('https://plus.google.com/u/0/112943355702113622332/posts','_blank'); });
    $(".tumblr-link").click(function(){ window.open('http://blog.simoncorry.com/','_blank'); });
    $(".dribbble-link").click(function(){ window.open('http://dribbble.com/simoncorry','_blank'); });
    $(".delicious-link").click(function(){ window.open('http://delicious.com/simoncorry','_blank'); });
    $(".github-link").click(function(){ window.open('https://github.com/simoncorry','_blank'); });
    $(".forrst-link").click(function(){ window.open('http://forrst.com/people/simoncorry','_blank'); });
    $(".bitly-link").click(function(){ window.open('https://bitly.com/u/simoncorry','_blank'); });
    $(".vimeo-link").click(function(){ window.open('http://vimeo.com/simoncorry','_blank'); });
    $(".youtube-link").click(function(){ window.open('http://www.youtube.com/user/simcorry','_blank'); });
    
});

/* ////////////////////////////////////////////////// */

/* ********** END - EXTERNALS *********************** */

/* ////////////////////////////////////////////////// */

/* //////////////////////////////////////////////////////////////////////////////////////////////////// */

/* ********** END - LINKS ***************************************************************************** */

/* //////////////////////////////////////////////////////////////////////////////////////////////////// */