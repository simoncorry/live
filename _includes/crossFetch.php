<?php
/*
	Remote file open using cURL. Takes *ENCODED* url as a parameter.
*/
	$url = $_GET["url"];
	$ch = curl_init();
	curl_setopt($ch, CURLOPT_URL, $url);
	curl_setopt($ch, CURLOPT_HEADER, 0);
	ob_start();
	curl_exec($ch);
	curl_close($ch);
	$content = ob_get_contents();
	ob_end_clean();
	var_dump($content);
?>