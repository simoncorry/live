<div class="article_wrapper">
    <article class="article article_stream">
        <header id="pinterest_caption">
                    
            <h3><a href="<?=$post['link']?>" target="_blank"><?=$post['service']?> <span class="slash">/</span> <?=date("m.d.Y",$post['post_date'])?></a></h3>
            <hr class="hr">
            <?=$post['caption']?>
            <p>Pinned an image - <a href="<?=$post['link']?>" target="_blank"><?=$post['title']?></a></p>
            <hr class="hr">
            <h4 class="icon <?=$post['service']?>"><a href="<?=$post['link']?>" target="_blank"><?=$post['service']?></a></h4>
            
        </header>
    </article>
</div>