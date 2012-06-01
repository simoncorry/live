<!DOCTYPE html>
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
<?php /* PAGE */ $thisPage="Lifestream"; ?>

<!-- ////////////////////////////////////////////////// -->

<!-- ********** END - GLOBALS ************************* -->

<!-- ////////////////////////////////////////////////// -->

<!-- ////////////////////////////////////////////////// -->

<!-- ********** BEGIN - META/LINKS ******************** -->

<!-- ////////////////////////////////////////////////// -->

<title>Simon Corry &raquo; Lifestream &raquo; Science &amp; Creativity</title>
<meta name="viewport" content="user-scalable=no">
<meta name="app-mobile-web-app-capable" content="yes" />
<meta name="Author" content="Simon Corry" />
<meta name="description" content="Catch all the latest from Simon Corry through his interactive Lifestream."/>
<meta name="keywords" content="simon corry, blog simon corry, science &amp; creativity, user experience design, user interaction design, information architecture, design &amp; developmentt"/>
	 
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

<!-- /// BEGIN - LIFESTREAM /// -->

<script type="text/javascript">

$(document).ready(function(){
  var count = 0,
      list = [ 
        {
          service: 'twitter',
          user: 'simoncorry',
        },
        {
          service: 'googleplus',
          user: '112943355702113622332',
          key: 'AIzaSyCB8pKtPwGWkOMfe49CopUM40F6seVv5AE'
        },
        {
          service: 'tumblr',
          user: 'simoncorry'
        },
        {
          service: 'dribbble',
          user: 'simoncorry'
        },
        {
          service: 'delicious',
          user: 'simoncorry'
        },
        {
          service: 'github',
          user: 'simoncorry'
        },
        {
          service: 'forrst',
          user: 'simoncorry'
        },
        {
          service: 'bitly',
          user: 'simoncorry'
        },
        {
          service: 'vimeo',
          user: 'simoncorry'
        },
        {
          service: 'youtube',
          user: 'simcorry'
        }             
      ];

      Date.prototype.toISO8601 = function(date) {
          var pad = function (amount, width) {
              var padding = "";
              while (padding.length < width - 1 && amount < Math.pow(10, width - padding.length - 1))
                  padding += "0";
              return padding + amount.toString();
          }
          date = date ? date : new Date();
          var offset = date.getTimezoneOffset();
          return pad(date.getFullYear(), 4)
              + "-" + pad(date.getMonth() + 1, 2)
              + "-" + pad(date.getDate(), 2)
              + "T" + pad(date.getHours(), 2)
              + ":" + pad(date.getMinutes(), 2)
              + ":" + pad(date.getUTCSeconds(), 2)
              + (offset > 0 ? "-" : "+")
              + pad(Math.floor(Math.abs(offset) / 60), 2)
              + ":" + pad(Math.abs(offset) % 60, 2);
      };

      $("#lifestream").lifestream({
        limit: 400,
        list: list,
        feedloaded: function(){
          count++;
          // Check if all the feeds have been loaded
          if( count === list.length ){
            $("#lifestream li").each(function(){
              var element = $(this),
                  date = new Date(element.data("time"));
              element.append(' <abbr class="timeago" title="' + date.toISO8601(date) + '">' + date + "</abbr>");
              element.after('<li style="height:auto; border:none; margin:0px;"><div class="hr-top"></div><div class="hr-bottom"></div></li>');
            })
            $("#lifestream .timeago").timeago();
            $("#lifestream a").attr("target","_blank");
          }
        }
      });
      
})();

</script>
 
<!-- /// END - LIFESTREAM /// -->

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

<!-- ////////////////////////////////////////////////// -->
        
<?php /* NAV */ include_once($_SERVER['DOCUMENT_ROOT']."/_includes/nav.php"); ?>      
        
<!-- ////////////////////////////////////////////////// -->

<!-- ********** END - NAV ***************************** -->

<!-- ////////////////////////////////////////////////// -->

<!-- ////////////////////////////////////////////////// -->

<!-- ********** BEGIN - WRAPPER *********************** -->

<!-- ////////////////////////////////////////////////// -->

<div id="top"></div>
<div id="wrapper">
    <div id="content">
        
        <!-- /// BEGIN - LIFESTREAM /// -->
        
        <div class="hr-top"></div>
        <div class="hr-bottom"></div>
        <div id="lifestream-wrapper">
            <div id="lifestream-content">
                <div id="lifestream">&nbsp;</div> 
                <div class="clearfix"></div>
            </div>
        </div>
              
        <!-- /// END - LIFESTREAM /// -->
                                                                   
    </div>    
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