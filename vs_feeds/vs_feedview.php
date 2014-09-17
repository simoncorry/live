<?php
function vs_feeds_output($items_per_feed = 5) {

    $feeds = array(
        'twitter'   => 'http://www.queryfeed.net/twitter?q=from%3Asimoncorry',
        'github'    => 'https://github.com/simoncorry.atom',
        'dribbble'  => 'http://dribbble.com/simoncorry/shots.rss',
        'jsfiddle'  => null,
        'pinterest' => 'http://pinterest.com/simoncorry/feed.rss',
        'delicious' => 'http://feeds.delicious.com/v2/rss/simoncorry',
        'bitly'     => 'https://bitly.com/u/simoncorry.rss'
    );
    
    $db = new mysqli('internal-db.s165780.gridserver.com', 'db165780_society', 'AZoi7NVx2e;@kx', 'db165780_social');
    
    $unsorted = array();
    $output = array();
    
    foreach( $feeds AS $service => $url ) {
        $result = $db->query( "
            SELECT * 
            FROM vs_feeds
            WHERE service = '{$service}'
            ORDER BY post_date DESC
            LIMIT 
        " . intval($items_per_feed) );
        $unsorted[$service] = array();
        while($row = $result->fetch_assoc()){
            $unsorted[$service][] = $row;
        }
    }
    
    for( $i = 0; $i < $items_per_feed; $i++ ) {
        foreach( $unsorted AS $service => $posts ) {
            if(isset($posts[$i])) $output[] = $posts[$i];
        }
    }

    return $output;
   
}
?>



