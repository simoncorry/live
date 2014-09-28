<div class="article_wrapper">
    <article class="article article_stream">
        <header id="dribbble_caption">
                    
            <h3><a href="<?=$post['link']?>" target="_blank"><?=$post['service']?> <span class="slash">/</span> <?=date("m.d.Y",$post['post_date'])?></a></h3>
            <div class="hr_top"></div>
            <div class="hr_bottom"></div>
            <?=$post['caption']?>
            <p>Posted a new shot - <a href="<?=$post['link']?>" target="_blank"><?=$post['title']?></a></p>
            <div class="hr_top under"></div>
            <div class="hr_bottom under"></div>
            <h4 class="icon <?=$post['service']?>"><a href="<?=$post['link']?>" target="_blank"><?=$post['service']?></a></h4>
            
        </header>
    </article>
</div>