<?php
require 'vendor/autoload.php';

use ZendSearch\Lucene\Lucene;
use ZendSearch\Lucene\MultiSearcher;
use ZendSearch\Lucene\Search\QueryParser;

$stem = function ( $e ) {
    return \Porter::Stem( $e );
};

$q = isset( $_GET['q'] ) ? $_GET['q'] : null;
$q = htmlentities( $q );
$q = implode( '+', array_map( $stem, explode( ' ', $q ) ) );


header( 'Content-Type: application/json' );
$output = array();

if ($q) {

    $indexer = Lucene::open( '../static/_index' );
    $search  = new MultiSearcher( [ $indexer ] );
    $query   = QueryParser::parse( $q );

    $result = $search->find( $query );

    foreach ($result as $hit) {
        $resultUrl = "/static/" . $hit->fileName;
        $output[]  = [
            'href' => $resultUrl,
            'name' => $hit->name,
            'preview' => $query->htmlFragmentHighlightMatches(
                substr( preg_replace( "/\s+/", " ", $hit->body ), 0, 300 ) . '...'
            ),
        ];
    }
}
echo json_encode( $output );
