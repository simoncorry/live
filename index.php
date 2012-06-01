<!--  --><!DOCTYPE html>
<!--[if lt IE 7]><html lang="en" class="ie6 ie" xmlns="http://www.w3.org/1999/xhtml"><![endif]--> 
<!--[if IE 7]>   <html lang="en" class="ie7 ie" xmlns="http://www.w3.org/1999/xhtml"><![endif]--> 
<!--[if IE 8]>   <html lang="en" class="ie8 ie" xmlns="http://www.w3.org/1999/xhtml"><![endif]--> 
<!--[if IE 9]>   <html lang="en" class="ie9 ie" xmlns="http://www.w3.org/1999/xhtml"><![endif]-->
<html lang="en">

<!-- //////////////////////////////////////////////////////////////////////////////////////////////////// -->

<!-- ********** BEGIN - HEAD **************************************************************************** -->

<!-- //////////////////////////////////////////////////////////////////////////////////////////////////// -->

<head>
<script type="text/javascript">var _sf_startpt=(new Date()).getTime()</script>
<meta charset="utf-8" />

<!-- ////////////////////////////////////////////////// -->

<!-- ********** BEGIN - GLOBALS *********************** -->

<!-- ////////////////////////////////////////////////// -->

<?php /* ERROR */ ini_set('error_reporting', E_ALL); ini_set('display_errors', 0); ?>
<?php /* TAG */ include_once($_SERVER['DOCUMENT_ROOT']."/_includes/tag.php"); ?>
<?php /* PAGE */ $thisPage="Home"; ?>

<!-- ////////////////////////////////////////////////// -->

<!-- ********** END - GLOBALS ************************* -->

<!-- ////////////////////////////////////////////////// -->

<!-- ////////////////////////////////////////////////// -->

<!-- ********** BEGIN - META/LINKS ******************** -->

<!-- ////////////////////////////////////////////////// -->

<title>Simon Corry &raquo; Home &raquo; Science &amp; Creativity</title>
<!-- FOR MOBILE VERSION SOON <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"> -->
<meta name="Author" content="Simon Corry" />
<meta name="description" content="Welcome one and all to the new home of science and creativity."/>
<meta name="keywords" content="simon corry, science &amp; creativity, user experience design, information architecture, design &amp; development"/>
	 
<?php /* FACEBOOK OG */ include_once($_SERVER['DOCUMENT_ROOT']."/_includes/fb-og.php"); ?>

<?php /* LINKS */ include_once($_SERVER['DOCUMENT_ROOT']."/_includes/head.php"); ?>

<!-- ////////////////////////////////////////////////// -->

<!-- ********** END - META/LINKS ********************** -->

<!-- ////////////////////////////////////////////////// -->

<!-- ////////////////////////////////////////////////// -->

<!-- ********** BEGIN - FUNCTIONS ********************* -->

<!-- ////////////////////////////////////////////////// -->

<!-- /// BEGIN - PRELOAD  /// -->

<script type="text/javascript">
$(document).ready(function() {	
    $('#loading-wrapper').show();
    $('nav').hide();
    $('#wrapper').hide();
    $('footer').hide(); 
	onload = function() {		
        $('#loading-wrapper').hide();
        $('nav').fadeIn(600);
        $('#wrapper').fadeIn(600);
        $('footer').fadeIn(600);
    }
});
</script>

<!-- /// END - PRELOAD  /// -->

<!-- /// BEGIN - FIXED FOOTER /// -->

<script type="text/javascript">
$(document).ready(function() {
    $("footer").pinFooter();
});
$(window).resize(function() {
    $("footer").pinFooter();
});
</script>

<!-- /// END - FIXED FOOTER /// -->

<!-- ////////////////////////////////////////////////// -->

<!-- ********** END - FUNCTIONS *********************** -->

<!-- ////////////////////////////////////////////////// --> 

</head>

<!-- //////////////////////////////////////////////////////////////////////////////////////////////////// -->

<!-- ********** END - HEAD ****************************************************************************** -->

<!-- //////////////////////////////////////////////////////////////////////////////////////////////////// -->

<!-- //////////////////////////////////////////////////////////////////////////////////////////////////// -->

<!-- ********** BEGIN - BODY **************************************************************************** -->

<!-- //////////////////////////////////////////////////////////////////////////////////////////////////// -->

<body>

<!-- ////////////////////////////////////////////////// -->

<!-- ********** BEGIN - PRELOADER ********************* -->

<!-- ////////////////////////////////////////////////// -->

<div id="loading-wrapper">
    <div id="loading">&nbsp;</div>
</div>
<div id="preload"></div>

<!-- ////////////////////////////////////////////////// -->

<!-- ********** END - PRELOADER *********************** -->

<!-- ////////////////////////////////////////////////// -->

<!-- ////////////////////////////////////////////////// -->

<!-- ********** BEGIN - NAV *************************** -->

<!-- //////////////////////////////////////////////////// -->
        
<?php /* NAV */ include_once($_SERVER['DOCUMENT_ROOT']."/_includes/nav.php"); ?>      
        
<!-- ////////////////////////////////////////////////// -->

<!-- ********** END - NAV ***************************** -->

<!-- ////////////////////////////////////////////////// -->

<!-- ////////////////////////////////////////////////// -->

<!-- ********** BEGIN - WRAPPER *********************** -->

<!-- ////////////////////////////////////////////////// -->

<div id="wrapper" style="background:transparent;">
    <div id="content"></div>
</div>

<!-- ////////////////////////////////////////////////// -->

<!-- ********** END - WRAPPER ************************* -->

<!-- ////////////////////////////////////////////////// -->

<!-- ////////////////////////////////////////////////// -->

<!-- ********** BEGIN - FOOTER ************************ -->

<!-- ////////////////////////////////////////////////// -->   
         
<?php /* FOOTER */ include_once($_SERVER['DOCUMENT_ROOT']."/_includes/footer.php"); ?>
            
<!-- ////////////////////////////////////////////////// -->

<!-- ********** END - FOOTER ************************** -->

<!-- ////////////////////////////////////////////////// -->

<!-- ////////////////////////////////////////////////// -->

<!-- ********** BEGIN - FUNCTIONS ********************* -->

<!-- ////////////////////////////////////////////////// -->

<!-- /// BEGIN - GOOGLE /// -->

<!-- ANALYTICS -->
<script type="text/javascript">
  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-24800976-1']);
  _gaq.push(['_trackPageview']);
  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();
</script>

<!-- PLUS -->
<script type="text/javascript">
  (function() {
    var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
    po.src = 'https://apis.google.com/js/plusone.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
  })();
</script>

<!-- /// END - GOOGLE /// -->

<!-- /// BEGIN - FACEBOOK /// -->

<script type="text/javascript">
  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_GB/all.js#xfbml=1&appId=144137692323731";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));
</script>

<!-- /// END - FACEBOOK /// -->

<!-- /// BEGIN - TWITTER /// -->

<script type="text/javascript">
  !function(d,s,id){
    var js,fjs=d.getElementsByTagName(s)[0];
    if(!d.getElementById(id)){
      js=d.createElement(s);
      js.id=id;js.src="//platform.twitter.com/widgets.js";
      fjs.parentNode.insertBefore(js,fjs);
     }
   }(document,"script","twitter-wjs");
</script>

<!-- /// END - TWITTER /// -->

<!-- /// BEGIN - CHARTBEAT /// -->

<script type="text/javascript">
var _sf_async_config={uid:33072,domain:"simoncorry.com"};
(function(){
  function loadChartbeat() {
    window._sf_endpt=(new Date()).getTime();
    var e = document.createElement('script');
    e.setAttribute('language', 'javascript');
    e.setAttribute('type', 'text/javascript');
    e.setAttribute('src',
       (("https:" == document.location.protocol) ? "https://a248.e.akamai.net/chartbeat.download.akamai.com/102508/" : "http://static.chartbeat.com/") +
       "js/chartbeat.js");
    document.body.appendChild(e);
  }
  loadChartbeat();
})();
</script>

<!-- /// END - CHARTBEAT /// -->

<!-- ////////////////////////////////////////////////// -->

<!-- ********** END - FUNCTIONS *********************** -->

<!-- ////////////////////////////////////////////////// -->    

</body>

<!-- //////////////////////////////////////////////////////////////////////////////////////////////////// -->

<!-- ********** END - BODY ****************************************************************************** -->

<!-- //////////////////////////////////////////////////////////////////////////////////////////////////// -->

</html>