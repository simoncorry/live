<div class="content_wrapper" data-active_nav_item="stream">
    <?php
    require($_SERVER['DOCUMENT_ROOT'].'/vs_feeds/vs_feedview.php');
    ?>
    
    <!-- Feed -->
    <?php foreach( vs_feeds_output() AS $post ) : ?>
        <?php require($_SERVER['DOCUMENT_ROOT'].'/vs_feeds/feed_templates/'.$post['service'].'.php'); ?>
    <?php endforeach; ?>
</div>

<!-- Force link target to _blank -->
<script>
  $(".content_wrapper a").attr("target","_blank");
</script>