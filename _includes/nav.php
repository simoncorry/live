<!-- /// BEGIN - NAV FADE /// -->

<script type="text/javascript">
$(document).ready(function() {	
    $.localScroll();
	var $begin_scroll = $('#wrapper').offset().top - -1;
	var $nav = $('nav');
	var $nav_dots = $('.nav-dots');
	var $nav_up = $('#top-link');
	var $content = $('#content');
	var $footer = $('footer');
	$(window).scroll(function() {
		if( $(window).scrollTop() > $begin_scroll ) {
			$nav.addClass('nav-hidden');
			$nav_dots.addClass('nav-dots-active');
			$nav_up.addClass('nav-up-active');
			$content.addClass('content-active');
			$footer.addClass('footer-hidden');
		} else {
			$nav.removeClass('nav-hidden');
			$nav_dots.removeClass('nav-dots-active');
			$nav_up.removeClass('nav-up-active');
			$content.removeClass('content-active');
			$footer.removeClass('footer-hidden');
		}
	});	
	$('nav').mouseover(function(){
        $nav.removeClass('nav-hidden');
        $nav_dots.removeClass('nav-dots-active');
        $nav_up.removeClass('nav-up-active');
        $content.removeClass('content-active');
    }).mouseout(function(){
        if( $(window).scrollTop() > $begin_scroll ) {
			$nav.addClass('nav-hidden');
			$nav_dots.addClass('nav-dots-active');
			$nav_up.addClass('nav-up-active');
			$content.addClass('content-active');			
		} else {
			$nav.removeClass('nav-hidden');	
		}
    });
});
</script>

<!-- /// END - NAV FADE /// -->

<?php
function tile_setter($label) {
    $letters = array('a','b','c','d','e');
    for($i=0;$i<count($letters);$i++) {
        for($j=1;$j<=5;$j++) {
            echo( "                <div class='{$label}-{$letters[$i]}-{$j}'></div>\n" );
        }
    }
}
?>
<a href="#top" id="top-link"></a>
<nav>
    <div class="nav-content">
        <div class="nav-dots"></div>
        <div class="nav-content-lcol">        
            <!-- LOGO -->
<?php if ($thisPage=="Home") : ?>
            <div class="logo-wrapper">
                <div class="logo-content">Science<br />&amp; Creativity</div>
<?php tile_setter('logo'); ?>
                <div id="logo-moon"></div> 
                <div id="logo-ship"></div>
                <div id="logo-cloud-top"></div> 
                <div id="logo-cloud-bottom"></div>
                <div id="logo-cloud-left"></div>
                <div id="logo-cloud-right"></div>
            </div>
<?php elseif ($thisPage=="Home") : ?>
            <div class="logo-wrapper">
                <div class="logo-content">Science<br />&amp; Creativity</div>
<?php tile_setter('logo'); ?>
                <div id="logo-moon"></div> 
                <div id="logo-ship"></div>
                <div id="logo-cloud-top"></div> 
                <div id="logo-cloud-bottom"></div>
                <div id="logo-cloud-left"></div>
                <div id="logo-cloud-right"></div>
            </div>
<?php else : ?>
            <div class="logo-dark-wrapper">
                <div class="logo-dark-content">Science<br />&amp; Creativity</div>
<?php tile_setter('logo-dark'); ?>
                <div id="logo-dark-moon"></div> 
                <div id="logo-dark-ship"></div>
                <div id="logo-dark-cloud-top"></div> 
                <div id="logo-dark-cloud-bottom"></div>
                <div id="logo-dark-cloud-left"></div>
                <div id="logo-dark-cloud-right"></div>
            </div>
<?php endif; ?>
            <!-- LIFESTREAM BTN -->
<?php if ($thisPage=="Lifestream") : ?>
            <div class="lifestream-btn-wrapper">
                <div class="lifestream-btn-content">The<br />Lifestream</div>
<?php tile_setter('lifestream-btn'); ?>
                <div id="lifestream-btn-letter-1"></div>
                <div id="lifestream-btn-letter-2"></div>
                <div id="lifestream-btn-letter-3"></div>
                <div id="lifestream-btn-letter-4"></div>
                <div id="lifestream-btn-letter-5"></div> 
            </div>
<?php elseif ($thisPage=="Home") : ?>
            <div class="lifestream-btn-wrapper">
                <div class="lifestream-btn-content">The<br />Lifestream</div>
<?php tile_setter('lifestream-btn'); ?>
                <div id="lifestream-btn-letter-1"></div>
                <div id="lifestream-btn-letter-2"></div>
                <div id="lifestream-btn-letter-3"></div>
                <div id="lifestream-btn-letter-4"></div>
                <div id="lifestream-btn-letter-5"></div> 
            </div>
<?php else : ?>
            <div class="lifestream-dark-btn-wrapper">
                <div class="lifestream-dark-btn-content">The<br />lifestream</div>
<?php tile_setter('lifestream-dark-btn'); ?>
                <div id="lifestream-dark-btn-letter-1"></div>
                <div id="lifestream-dark-btn-letter-2"></div>
                <div id="lifestream-dark-btn-letter-3"></div>
                <div id="lifestream-dark-btn-letter-4"></div>
                <div id="lifestream-dark-btn-letter-5"></div> 
            </div>            
<?php endif; ?>            
            <!-- PORTFOLIO -->
<?php if ($thisPage=="Portfolio") : ?>
            <div class="portfolio-wrapper ">
                <div class="portfolio-content">The<br />Portfolio</div>
<?php tile_setter('portfolio'); ?>
                <div id="portfolio-letter-1"></div>
                <div id="portfolio-letter-2"></div>
                <div id="portfolio-letter-3"></div>
                <div id="portfolio-letter-4"></div>
                <div id="portfolio-letter-5"></div>   
            </div>
<?php elseif ($thisPage=="Home") : ?>
            <div class="portfolio-wrapper ">
                <div class="portfolio-content">The<br />Portfolio</div>
<?php tile_setter('portfolio'); ?>
                <div id="portfolio-letter-1"></div>
                <div id="portfolio-letter-2"></div>
                <div id="portfolio-letter-3"></div>
                <div id="portfolio-letter-4"></div>
                <div id="portfolio-letter-5"></div>   
            </div>
<?php else : ?>
            <div class="portfolio-dark-wrapper ">
                <div class="portfolio-dark-content">The<br />Portfolio</div>
<?php tile_setter('portfolio-dark'); ?>
                <div id="portfolio-dark-letter-1"></div>
                <div id="portfolio-dark-letter-2"></div>
                <div id="portfolio-dark-letter-3"></div>
                <div id="portfolio-dark-letter-4"></div>
                <div id="portfolio-dark-letter-5"></div>   
            </div>           
<?php endif; ?> 
            <!-- CREATIVE -->
<?php if ($thisPage=="Creative") : ?>
            <div class="creative-wrapper ">
                <div class="creative-content">The<br />Creative</div>
<?php tile_setter('creative'); ?>
                <div id="creative-letter-1"></div>
                <div id="creative-letter-2"></div>
                <div id="creative-letter-3"></div>
                <div id="creative-letter-4"></div>
                <div id="creative-letter-5"></div>   
            </div>
<?php elseif ($thisPage=="Home") : ?>
            <div class="creative-wrapper ">
                <div class="creative-content">The<br />Creative</div>
<?php tile_setter('creative'); ?>
                <div id="creative-letter-1"></div>
                <div id="creative-letter-2"></div>
                <div id="creative-letter-3"></div>
                <div id="creative-letter-4"></div>
                <div id="creative-letter-5"></div>   
            </div>
<?php else : ?>
            <div class="creative-dark-wrapper ">
                <div class="creative-dark-content">The<br />Creative</div>
<?php tile_setter('creative-dark'); ?>
                <div id="creative-dark-letter-1"></div>
                <div id="creative-dark-letter-2"></div>
                <div id="creative-dark-letter-3"></div>
                <div id="creative-dark-letter-4"></div>
                <div id="creative-dark-letter-5"></div>   
            </div>           
<?php endif; ?>
            <!-- LABS -->
<!--
<?php if ($thisPage=="Labs") : ?>
            <div class="labs-wrapper">
                <div class="labs-content">The<br />Laboratory</div>
<?php tile_setter('labs'); ?>
                <div id="labs-letter-1"></div> 
                <div id="labs-letter-2"></div>
                <div id="labs-letter-3"></div> 
                <div id="labs-letter-4"></div>
                <div id="labs-letter-5"></div>
                <div id="labs-letter-6"></div>
                <div id="labs-letter-7"></div>
                <div id="labs-letter-8"></div>
                <div id="labs-letter-9"></div>
                <div id="labs-letter-10"></div>
                <div id="labs-letter-11"></div>
                <div id="labs-letter-12"></div>
                <div id="labs-letter-13"></div>
            </div>
<?php elseif ($thisPage=="Home") : ?>
            <div class="labs-wrapper">
                <div class="labs-content">The<br />Laboratory</div>
<?php tile_setter('labs'); ?>
                <div id="labs-letter-1"></div> 
                <div id="labs-letter-2"></div>
                <div id="labs-letter-3"></div> 
                <div id="labs-letter-4"></div>
                <div id="labs-letter-5"></div>
                <div id="labs-letter-6"></div>
                <div id="labs-letter-7"></div>
                <div id="labs-letter-8"></div>
                <div id="labs-letter-9"></div>
                <div id="labs-letter-10"></div>
                <div id="labs-letter-11"></div>
                <div id="labs-letter-12"></div>
                <div id="labs-letter-13"></div>
            </div>
<?php else : ?>
            <div class="labs-dark-wrapper">
                <div class="labs-dark-content">The<br />Laboratory</div>
<?php tile_setter('labs-dark'); ?>
                <div id="labs-dark-letter-1"></div> 
                <div id="labs-dark-letter-2"></div>
                <div id="labs-dark-letter-3"></div> 
                <div id="labs-dark-letter-4"></div>
                <div id="labs-dark-letter-5"></div>
                <div id="labs-dark-letter-6"></div>
                <div id="labs-dark-letter-7"></div>
                <div id="labs-dark-letter-8"></div>
                <div id="labs-dark-letter-9"></div>
                <div id="labs-dark-letter-10"></div>
                <div id="labs-dark-letter-11"></div>
                <div id="labs-dark-letter-12"></div>
                <div id="labs-dark-letter-13"></div>
            </div>
<?php endif; ?> 
-->      
            <div class="clearfix"></div>
        </div>
        <div class="nav-content-rcol">
            <!-- SHARE -->
            <div class="share-wrapper">
                <div class="share-content">                    
                    <div style="float:left;">
                        <g:plusone size="small" href="http://simoncorry.com/"></g:plusone>
                    </div>    
                    <div style="float:left;">
                        <div id="facebook-btn">
                            <div class="share-bubbles-arrow"></div>                            
                        </div>
                        <div class="share-bubbles">
                            <div class="share-bubbles-arrow"></div>
                            <div id="facebookbubble"></div>
                        </div>
                        <div id="twitter-btn">
                            <div class="share-bubbles-arrow"></div>                            
                        </div>
                        <div class="share-bubbles">
                            <div class="share-bubbles-arrow"></div>
                            <div id="twitterbubble"></div>
                        </div>
                        <div class="clearfix"></div> 
                    </div>
                    <div class="clearfix"></div>                   
                </div>
                <div class="share-a-1"></div>
                <div class="share-a-2"></div>
                <div class="share-a-3"></div>
                <div class="share-b-1"></div>
                <div class="share-b-2"></div>
                <div class="share-b-3"></div>
                <div class="share-c-1"></div>
                <div class="share-c-2"></div>
                <div class="share-c-3"></div>               
                <div id="share-letter-1"></div>
                <div id="share-letter-2"></div>
                <div id="share-letter-3"></div>
                <div id="share-letter-4"></div>
            </div>
            <div class="comment-wrapper">
                <div class="comment-content">
                    <div class="comment-content-bg">
                        <div id="fb-root"></div>
                        <fb:comments href="http://simoncorry.com" num_posts="20" width="355"></fb:comments>
                    </div>                 
                </div>
                <div class="clearfix"></div>
                <div class="comment-a-1"></div>
                <div class="comment-a-2"></div>
                <div class="comment-a-3"></div>
                <div class="comment-b-1"></div>
                <div class="comment-b-2"></div>
                <div class="comment-b-3"></div>
                <div class="comment-c-1"></div>
                <div class="comment-c-2"></div>
                <div class="comment-c-3"></div>               
                <div id="comment-letter-1"></div>
                <div id="comment-letter-2"></div>
                <div id="comment-letter-3"></div>
                <div id="comment-letter-4"></div>
            </div>       
            <div class="clearfix"></div>
        </div>
        <div class="clearfix"></div>    
    </div>
</nav>  