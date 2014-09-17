<div class="content_wrapper">
    <?php
    require($_SERVER['DOCUMENT_ROOT'].'/vs_feeds/vs_feedview.php');
    ?>
    
    <!-- Feed -->
    <?php foreach( vs_feeds_output() AS $post ) : ?>
        <?php require($_SERVER['DOCUMENT_ROOT'].'/vs_feeds/feed_templates/'.$post['service'].'.php'); ?>
    <?php endforeach; ?>

</div>