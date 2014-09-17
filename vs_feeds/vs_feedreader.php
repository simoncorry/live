<?php

$feeds = array(
    'twitter'   => 'http://www.queryfeed.net/twitter?q=from%3Asimoncorry',
    'medium'    => 'https://medium.com/feed/@razmakhin',
    'github'    => 'https://github.com/simoncorry.atom',
    'dribbble'  => 'http://dribbble.com/simoncorry/shots.rss',
    'jsfiddle'  => null,
    'pinterest' => 'http://pinterest.com/simoncorry/feed.rss',
    'delicious' => 'http://feeds.delicious.com/v2/rss/simoncorry',
    'bitly'     => 'https://bitly.com/u/simoncorry.rss'
);
// http://feeds.feedburner.com/behance/vorr

require_once('simplepie.compiled.php');
$reader = new SimplePie();

$db = new mysqli('internal-db.s165780.gridserver.com', 'db165780_society', 'AZoi7NVx2e;@kx', 'db165780_social');



function do_inserts($a) {
    global $db;
    $guids = array();
    $vars = array();
    $vals = array();
    foreach( $a AS $var => $val ) {
        $vars[] = $var;
        $vals[] = "'" . $db->real_escape_string($val) . "'";
    }
    $vars = implode(',', $vars);
    $vals = implode(',', $vals);
    $db->query("INSERT INTO vs_feeds ({$vars}) VALUES ({$vals})");
    $guids[] = "'{$a['guid']}'";
    // remove deprecated items
    $guids = implode(',', $guids);
    $db->query( "DELETE FROM vs_feeds WHERE service = '{$service}' AND guid NOT IN ( {$guids} )");
}



foreach( $feeds AS $service => $url ) {
    if(!$url) continue;
    $reader->set_feed_url($url);
    $reader->enable_cache(false);
    $reader->init();
    $reader->handle_content_type();
    // read the items
    foreach($reader->get_items() as $item) {
        $caption = $item->get_description();
        if( $service == 'pinterest' ) {
            $caption = str_replace('192x', '736x', $caption);
        }
        $a = array(
            'service'   => $service,
            'guid'      => str_replace('#simoncorry', null, $item->get_id()),
            'link'      => $item->get_link(),
            'title'     => $item->get_title(),
            'caption'   => $caption,
            'post_date' => strtotime($item->get_date()),
        );
        do_inserts($a);
    }
}

// okay now let's do JSFiddle API
$fiddles = json_decode( file_get_contents( 'http://jsfiddle.net/api/user/simoncorry/demo/list.json' ) );
if($fiddles) {
    $service = 'jsfiddle';
    foreach( $fiddles AS $fiddle ) {
        $guids[] = "'{$fiddle->url}'";
        $a = array(
            'service'   => $service,
            'guid'      => $fiddle->url,
            'link'      => $fiddle->url,
            'title'     => $fiddle->title,
            'caption'   => null,
            'post_date' => strtotime($fiddle->created),
        );
        do_inserts($a);
    }
}


$db->close();

?>