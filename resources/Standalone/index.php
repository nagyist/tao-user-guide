<?php
require 'php/vendor/autoload.php';

use ZendSearch\Lucene\Lucene;
use ZendSearch\Lucene\MultiSearcher;
use ZendSearch\Lucene\Search\QueryParser;


$stem = function ( $e ) {
    return \Porter::Stem( $e );
};

$q = isset( $_GET['q'] ) ? $_GET['q'] : null;
$q = htmlentities( $q );
$q = implode( '+', array_map( $stem, explode( ' ', $q ) ) );


//echo nl2br( $q . PHP_EOL );

if ($q) {
    $indexer = Lucene::open( 'static/_index' );
    $search = new MultiSearcher( [ $indexer ] );
    $query = QueryParser::parse( $q );

    $result = $search->find( $query );
//    echo 'Total ' . count( $result ) . ' ';

    foreach ($result as $hit) {
        $resultUrl = "static/" . $hit->fileName;
//        echo 'Rank: <b>' . $hit->score . '</b>' . PHP_EOL;
        echo "<a href='$resultUrl'  > $hit->name</a>";
//        $highlightedHTML = $query->highlightMatches( file_get_contents( $resultUrl ) );
//        echo $highlightedHTML;
        echo '<br/>';
    }
}