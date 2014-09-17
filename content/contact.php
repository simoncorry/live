<div class="content_wrapper">
    
    <div class="article_wrapper">
        <article class="article">
            <header>         
                <h3>Say Hello</h3>
                <hr class="hr">
                
                <form id="contact" name="contact" method="post">
                    <fieldset>
                        <input type="text" placeholder="Name:" name="name" id="name" size="30" value="" required/>
                        <input type="text" placeholder="Email:" name="email" id="email" size="30" value="" required/>
                        <textarea placeholder="Comments:" name="message" id="message" class="animated" required></textarea>
                        <!-- <input placeholder="Which pet says meow?" type="text" name="captcha" value="" required/> -->
                        <input id="submit" type="submit" name="submit" value="Send" />
                        <div class="loader_block"></div>
                    </fieldset>
                </form>

                <div id="success">
                    <div>
                        <p>Success!<br>I'll be in touch soon.</p>
                    </div>
                </div>
                <div id="error">
                    <div>
                        <p>Something went wrong, refresh and submit the form again.</p>
                    </div>
                </div>
                
                <hr class="hr">
                <h4 class="icon letter"><a>Letter Icon</a></h4>
            </header>
        </article>
    </div>
    
    <div class="article_wrapper">
        <article class="article">
            <header>
                <h3>Useful Links</h3>
                <hr class="hr">
                
                <a href="/assets/downloads/simon-corry-cv_digital.pdf" target="_blank" class="button margin_bottom_40 touch_link">Download CV</a>
    
                <ul class="nav_network contact_network touch_links clearfix">
                    <li><a href="http://twitter.com/simoncorry"     target="_blank" class="touch_link twitter">Read Tweets by Simon Corry</a></li>
                    <li><a href="http://dribbble.com/simoncorry"    target="_blank" class="touch_link dribbble">View project shots by Simon Corry</a></li>      
                    <li><a href="http://github.com/simoncorry"      target="_blank" class="touch_link github">See code examples by Simon Corry</a></li>
                    <li><a href="http://linkedin.com/in/simoncorry" target="_blank" class="touch_link linkedin">Connect with Simon Corry</a></li>
                </ul>

                <hr class="hr">
                <h4 class="icon link"><a>Link Icon</a></h4>
            </header>
        </article>
    </div>

</div>

<!-- Required Scripts -->
<script src="/assets/js/app/validate.js"></script>
